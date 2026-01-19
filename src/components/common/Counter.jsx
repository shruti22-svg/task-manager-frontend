import { useState } from 'react'

function Counter() {
  // Declare state
  const [count, setCount] = useState(0)
  
  return (
    <div style={{
      border: '2px solid #4CAF50',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px',
      textAlign: 'center'
    }}>
      <h2>Counter: {count}</h2>
      
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
      
      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
      
      <button onClick={() => setCount(0)}>
        Reset
      </button>
    </div>
  )
}

export default Counter