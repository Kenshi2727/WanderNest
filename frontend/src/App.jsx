import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import appLogo from '/favicon.svg'
import PWABadge from './PWABadge.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault()
      // Store the event so it can be triggered later
      window.deferredPrompt = e
    });
  }, [])

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={appLogo} className="logo" alt="Travel Safari logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Travel Safari</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <PWABadge />
    </>
  )
}

export default App
