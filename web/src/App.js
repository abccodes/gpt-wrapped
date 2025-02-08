import React, { useEffect } from 'react'
import JSZip from 'jszip'

function App() {
  useEffect(() => {
    // Replace with the correct path to your zip file (must be in the public folder)
    const zipFilePath = `${process.env.PUBLIC_URL}/data/f9429c316e3dbbc1bb3afa7b5e68b15493c5a1ff2339fda948ccc4da8b1402ba-2025-02-03-07-31-49-4e7606b893924266b2de3d4bf1b54fb0.zip`

    fetch(zipFilePath)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Failed to fetch the zip file: ${response.statusText}`,
          )
        }
        return response.arrayBuffer()
      })
      .then((arrayBuffer) => {
        // Log the first 4 bytes (should be [80, 75, ...] which is "PK" for a valid zip)
        const header = new Uint8Array(arrayBuffer).slice(0, 4)
        console.log('Header bytes:', header)
        return JSZip.loadAsync(arrayBuffer)
      })
      .then((zip) => {
        // Look for conversations.json inside the zip
        const file = zip.file('conversations.json')
        if (!file) {
          throw new Error('conversations.json not found in the zip file.')
        }
        return file.async('string')
      })
      .then((text) => {
        const jsonData = JSON.parse(text)
        // Debug: Log the raw JSON structure so we know what we're working with.
        console.log('Raw JSON Data:', jsonData)

        // Process the raw JSON into an array of conversation objects.
        const processedConversations = processConversations(jsonData)
        console.log(`Processed ${processedConversations.length} conversations.`)

        // Print out the first five conversations (or all if fewer than five)
        const firstFive = processedConversations.slice(0, 5)
        console.log('First 5 Conversations:', firstFive)
      })
      .catch((err) => {
        console.error('Error processing the zip file:', err)
      })
  }, [])

  return (
    <div>Data loaded. Check the console for the first 5 conversations.</div>
  )
}

/**
 * Processes the raw JSON export.
 * This function attempts to handle several possible structures:
 *   1. rawData.conversations is an array.
 *   2. rawData.conversations is an object (keys as conversation IDs).
 *   3. rawData itself is a single conversation (contains a mapping property).
 *   4. rawData is a collection of conversations keyed by IDs.
 */
function processConversations(rawData) {
  console.log('Detecting conversation structure...')
  // Case 1: rawData.conversations exists
  if (rawData.conversations) {
    if (Array.isArray(rawData.conversations)) {
      console.log('Conversations detected as an array.')
      return rawData.conversations.map((convo) => processConversation(convo))
    } else if (typeof rawData.conversations === 'object') {
      console.log('Conversations detected as an object.')
      return Object.values(rawData.conversations).map((convo) =>
        processConversation(convo),
      )
    }
  }
  // Case 2: rawData itself is a conversation (has a mapping property)
  if (rawData.mapping) {
    console.log('Raw data appears to be a single conversation.')
    return [processConversation(rawData)]
  }
  // Case 3: rawData is a collection of conversations keyed by IDs
  if (typeof rawData === 'object') {
    const possibleConvos = Object.values(rawData).filter(
      (val) => val && typeof val === 'object' && val.mapping,
    )
    if (possibleConvos.length) {
      console.log('Conversations detected as a keyed collection.')
      return possibleConvos.map((convo) => processConversation(convo))
    }
  }
  console.warn('No conversations found in the JSON data.')
  return []
}

/**
 * Processes a single conversation object.
 * Extracts conversation-level metadata (title, create_time, update_time)
 * and all messages from the mapping.
 */
function processConversation(convo) {
  // Extract conversation-level metadata.
  const title = convo.title || 'Untitled Conversation'
  const create_time = convo.create_time || null
  const update_time = convo.update_time || null

  const messages = []
  if (convo.mapping && typeof convo.mapping === 'object') {
    Object.keys(convo.mapping).forEach((nodeId) => {
      const node = convo.mapping[nodeId]
      // Only process nodes that have a non-null message.
      if (node.message) {
        const author = node.message.author?.role || 'unknown'
        const m_create_time = node.message.create_time || null
        const m_update_time = node.message.update_time || null

        // Process the message content.
        let content = ''
        if (node.message.content && Array.isArray(node.message.content.parts)) {
          content = node.message.content.parts
            .map((part) => {
              return typeof part === 'string' ? part : JSON.stringify(part)
            })
            .join(' ')
        }
        messages.push({
          id: nodeId,
          author,
          create_time: m_create_time,
          update_time: m_update_time,
          content,
        })
      }
    })

    // Sort messages by creation time (if available)
    messages.sort((a, b) => (a.create_time || 0) - (b.create_time || 0))
  }

  return {
    title,
    create_time,
    update_time,
    messages,
  }
}

export default App
