import { useState, useEffect } from 'react'

function EffectExamples() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  
  // Example 1: Run once on mount
  useEffect(() => {
    console.log('Component mounted! This runs ONCE')
  }, []) // Empty array = run once
  
  // Example 2: Run when count changes
  useEffect(() => {
    console.log('Count changed to:', count)
  }, [count]) // Runs when count changes
  
  // Example 3: Run on every render (careful!)
  useEffect(() => {
    console.log('Component rendered')
  }) // No array = runs every render
  
  return (
    <div style={{
      border: '2px solid #9b59b6',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px'
    }}>
      <h2>useEffect Examples</h2>
      
      <div>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>
          Increment Count
        </button>
      </div>
      
      <div style={{ marginTop: '20px' }}>
        <p>Name: {name}</p>
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Type your name"
        />
      </div>
      
      <p style={{ marginTop: '20px', fontSize: '14px', color: '#666' }}>
        Open browser console (F12) to see useEffect logs!
      </p>
    </div>
  )
}

export default EffectExamples