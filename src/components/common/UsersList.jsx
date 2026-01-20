import { useState, useEffect } from 'react'

function UsersList() {
  // State for data, loading, and errors
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    // Fetch users from API
    console.log('Fetching users...')
    
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch users')
        }
        return response.json()
      })
      .then(data => {
        console.log('Users fetched:', data)
        setUsers(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Error:', err)
        setError(err.message)
        setLoading(false)
      })
  }, []) // Empty array = fetch once on mount
  
  // Show loading state
  if (loading) {
    return (
      <div style={{
        border: '2px solid #3498db',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h2>Loading users...</h2>
        <div style={{ fontSize: '48px' }}>⏳</div>
      </div>
    )
  }
  
  // Show error state
  if (error) {
    return (
      <div style={{
        border: '2px solid #e74c3c',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
        backgroundColor: '#fee'
      }}>
        <h2>❌ Error!</h2>
        <p>{error}</p>
      </div>
    )
  }
  
  // Show data
  return (
    <div style={{
      border: '2px solid #2ecc71',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px'
    }}>
      <h2>Users from API ({users.length})</h2>
      
      <div style={{ display: 'grid', gap: '10px' }}>
        {users.map(user => (
          <div 
            key={user.id}
            style={{
              border: '1px solid #ddd',
              padding: '15px',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3>{user.name}</h3>
            <p><strong>Email:</strong> {user.email}</p>
            <p><strong>Phone:</strong> {user.phone}</p>
            <p><strong>Company:</strong> {user.company.name}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UsersList