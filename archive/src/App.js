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
        console.log('Raw JSON Data:', jsonData)

        // Process the raw JSON into an array of conversation objects
        const processedConversations = processConversations(jsonData)
        console.log(`Processed ${processedConversations.length} conversations.`)
        console.log(
          'First 5 Conversations:',
          processedConversations.slice(0, 5),
        )

        // Count total messages (for reference)
        const totalMessages = countMessages(processedConversations)
        console.log('Total number of messages:', totalMessages)

        // Count total queries (user messages) across all conversations
        const totalQueries = countQueries(processedConversations)
        console.log('Total number of queries (user messages):', totalQueries)

        // --- Environmental Calculations by Model ---
        // Group queries by model.
        const queriesByModel = {} // key: model, value: total user queries
        processedConversations.forEach((convo) => {
          const model = convo.model
          const numQueries = convo.messages.filter(
            (msg) => msg.author === 'user',
          ).length
          queriesByModel[model] = (queriesByModel[model] || 0) + numQueries
        })

        // For each model, calculate and print total environmental impacts.
        Object.keys(queriesByModel).forEach((model) => {
          const numQueries = queriesByModel[model]
          const factors = getModelFactors(model)
          const totalEnergy = factors.energy * numQueries
          const totalCO2 = factors.co2 * numQueries
          // For water, assume that every series of up to 50 queries uses 500 ml.
          const totalWater =
            Math.ceil(numQueries / 50) * 500 * factors.waterMultiplier
          console.log(`Model: ${model}`)
          console.log(`  Total queries: ${numQueries}`)
          console.log(`  Total water usage: ${totalWater.toFixed(2)} ml`)
          console.log(`  Total CO₂ emissions: ${totalCO2.toFixed(2)} units`)
          console.log(`  Total energy usage: ${totalEnergy.toFixed(2)} Wh`)
        })

        // --- Calculate Overall Totals ---
        const overallTotals = calculateOverallTotals(queriesByModel)
        console.log('--- Overall Environmental Totals ---')
        console.log(`Overall queries: ${overallTotals.overallQueries}`)
        console.log(
          `Overall water usage: ${overallTotals.overallWater.toFixed(2)} ml`,
        )
        console.log(
          `Overall CO₂ emissions: ${overallTotals.overallCO2.toFixed(2)} units`,
        )
        console.log(
          `Overall energy usage: ${overallTotals.overallEnergy.toFixed(2)} Wh`,
        )
      })
      .catch((err) => {
        console.error('Error processing the zip file:', err)
      })
  }, [])

  return <div>Data loaded. Check the console for results.</div>
}

/**
 * Processes the raw JSON export.
 * Supports multiple structures:
 *   1. rawData.conversations is an array.
 *   2. rawData.conversations is an object (keys as conversation IDs).
 *   3. rawData itself is a single conversation (contains a mapping property).
 *   4. rawData is a collection of conversations keyed by IDs.
 */
function processConversations(rawData) {
  console.log('Detecting conversation structure...')
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
  if (rawData.mapping) {
    console.log('Raw data appears to be a single conversation.')
    return [processConversation(rawData)]
  }
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
 * Extracts conversation-level metadata (title, create_time, update_time),
 * attempts to extract the model used, and processes all messages from the mapping.
 */
function processConversation(convo) {
  const title = convo.title || 'Untitled Conversation'
  const create_time = convo.create_time || null
  const update_time = convo.update_time || null

  // Determine the model:
  // First try the top-level property, then check for a model in the messages' metadata.
  let model = convo.model
  if (!model && convo.mapping && typeof convo.mapping === 'object') {
    for (const nodeId in convo.mapping) {
      const node = convo.mapping[nodeId]
      if (
        node.message &&
        node.message.metadata &&
        node.message.metadata.model_slug
      ) {
        model = node.message.metadata.model_slug
        break
      }
    }
  }
  if (!model) {
    model = 'gpt-3.5'
  }

  const messages = []
  if (convo.mapping && typeof convo.mapping === 'object') {
    Object.keys(convo.mapping).forEach((nodeId) => {
      const node = convo.mapping[nodeId]
      if (node.message) {
        const author = node.message.author?.role || 'unknown'
        const m_create_time = node.message.create_time || null
        const m_update_time = node.message.update_time || null

        // Process message content: join parts and stringify non-string parts.
        let content = ''
        if (node.message.content && Array.isArray(node.message.content.parts)) {
          content = node.message.content.parts
            .map((part) =>
              typeof part === 'string' ? part : JSON.stringify(part),
            )
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
    model,
    messages,
  }
}

/**
 * Counts the total number of messages across all processed conversations.
 * @param {Array} conversations - Array of processed conversation objects.
 * @returns {number} Total message count.
 */
function countMessages(conversations) {
  let total = 0
  conversations.forEach((convo) => {
    if (convo.messages && Array.isArray(convo.messages)) {
      total += convo.messages.length
    }
  })
  return total
}

/**
 * Counts the total number of queries (i.e. user messages) across all processed conversations.
 * @param {Array} conversations - Array of processed conversation objects.
 * @returns {number} Total query count.
 */
function countQueries(conversations) {
  let total = 0
  conversations.forEach((convo) => {
    if (convo.messages && Array.isArray(convo.messages)) {
      convo.messages.forEach((msg) => {
        if (msg.author === 'user') {
          total++
        }
      })
    }
  })
  return total
}

/**
 * Returns model-specific factors.
 * Each factor object includes:
 *  - energy: Wh used per query
 *  - co2: grams of CO₂ emitted per query
 *  - waterMultiplier: multiplier for water usage per series (baseline is 500 ml per up to 50 queries)
 *
 * Example assumptions:
 *  - GPT-3 mini: roughly half the baseline.
 *  - GPT-3.5: baseline.
 *  - GPT-4: roughly 2× the baseline.
 *  - o1 (and similar): adjust as needed.
 *
 * @param {string} model - The model name.
 * @returns {Object} An object with keys: energy, co2, waterMultiplier.
 */
function getModelFactors(model) {
  const lower = model.toLowerCase()
  if (lower.includes('gpt-3 mini')) {
    return { energy: 0.15, co2: 2.16, waterMultiplier: 0.5 }
  } else if (lower.includes('o1')) {
    // Example factors for an "o1" model
    return { energy: 0.4, co2: 5.76, waterMultiplier: 1.5 }
  } else if (lower.includes('gpt-4')) {
    return { energy: 0.6, co2: 8.64, waterMultiplier: 2 }
  } else if (lower.includes('gpt-3')) {
    // This covers GPT-3.5 and similar
    return { energy: 0.3, co2: 4.32, waterMultiplier: 1 }
  } else {
    // Default fallback
    return { energy: 0.3, co2: 4.32, waterMultiplier: 1 }
  }
}

/**
 * Calculates the overall environmental totals across all models.
 * @param {Object} queriesByModel - An object with keys as model names and values as total user queries.
 * @returns {Object} An object with overall queries, water (ml), CO₂ (grams), and energy (Wh).
 */
function calculateOverallTotals(queriesByModel) {
  let overallQueries = 0
  let overallWater = 0
  let overallCO2 = 0
  let overallEnergy = 0
  Object.keys(queriesByModel).forEach((model) => {
    const numQueries = queriesByModel[model]
    const factors = getModelFactors(model)
    overallQueries += numQueries
    overallEnergy += factors.energy * numQueries
    overallCO2 += factors.co2 * numQueries
    overallWater += Math.ceil(numQueries / 50) * 500 * factors.waterMultiplier
  })
  return { overallQueries, overallWater, overallCO2, overallEnergy }
}

export default App
