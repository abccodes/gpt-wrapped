import React, { useEffect, useState } from 'react'
import JSZip from 'jszip'

function App() {
  const [conversations, setConversations] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Replace with the correct path to your zip file.
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
        // Debug: Log first 4 bytes of the file
        const header = new Uint8Array(arrayBuffer).slice(0, 4)
        console.log('Header bytes:', header)
        // Expect header to start with [80, 75, ...] which is "PK"
        return JSZip.loadAsync(arrayBuffer)
      })
      .then((zip) => {
        // Look for conversations.json in the zip
        const file = zip.file('conversations.json')
        if (!file) {
          throw new Error('conversations.json not found in the zip file.')
        }
        return file.async('string')
      })
      .then((text) => {
        const jsonData = JSON.parse(text)
        setConversations(jsonData)
      })
      .catch((err) => {
        console.error('Error processing the zip file:', err)
        setError(err.message)
      })
  }, [])

  return (
    <div>
      <h1>Conversations Data</h1>
      {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      {conversations ? (
        <pre>{JSON.stringify(conversations, null, 2)}</pre>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  )
}

export default App
