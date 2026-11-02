import { useState, useEffect } from 'react'
import { getHello } from "./helloApi.ts";
import './App.css'

function App() {
  const [message, setMessage] = useState<string>("Loading...")
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    getHello()
        .then(data => {
          setMessage(data.message)
        })
        .catch(e => {
          setError(e instanceof Error ? e.message : 'Unknown error')
        })
  }, [])

  return (
    <div>
      <h1>Hajvágósch</h1>

      {error ? (
          <p>Error: {error}</p>
      ) : (
          <p>{message}</p>
      )}
    </div>
  )
}

export default App
