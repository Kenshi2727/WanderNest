import { useState, useEffect } from 'react'
import Navbar from './components/Navbar';

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
    <div>
      <Navbar />
      {/* <Footer /> */}
    </div>
  )
}

export default App
