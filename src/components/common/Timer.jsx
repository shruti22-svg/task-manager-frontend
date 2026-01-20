import { useState, useEffect } from 'react'

function Timer() {
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  
  useEffect(() => {
    if (!isRunning) return // Don't run if paused
    
    // Set up timer
    console.log('Timer started')
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)
    
    // Cleanup function
    return () => {
      console.log('Timer cleaned up')
      clearInterval(interval)
    }
  }, [isRunning]) // Run when isRunning changes
  
  const handleStart = () => {
    setIsRunning(true)
  }
  
  const handlePause = () => {
    setIsRunning(false)
  }
  
  const handleReset = () => {
    setIsRunning(false)
    setSeconds(0)
  }
  
  return (
    <div style={{
      border: '2px solid #e74c3c',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2>Timer with Cleanup</h2>
      
      <div style={{ fontSize: '48px', margin: '20px 0' }}>
        {seconds}s
      </div>
      
      <div>
        <button onClick={handleStart} disabled={isRunning}>
          Start
        </button>
        <button onClick={handlePause} disabled={!isRunning}>
          Pause
        </button>
        <button onClick={handleReset}>
          Reset
        </button>
      </div>
      
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        Check console to see cleanup messages!
      </p>
    </div>
  )
}

export default Timer