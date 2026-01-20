import { useState, useEffect } from 'react'

function PostsList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    // Async function inside useEffect
    const fetchPosts = async () => {
      try {
        console.log('Fetching posts...')
        setLoading(true)
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5')
        
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        
        const data = await response.json()
        console.log('Posts fetched:', data)
        
        setPosts(data)
        setError(null)
      } catch (err) {
        console.error('Error fetching posts:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }
    
    fetchPosts()
  }, [])
  
  if (loading) {
    return (
      <div style={{
        border: '2px solid #f39c12',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h2>Loading posts...</h2>
        <div style={{ fontSize: '48px' }}>📝</div>
      </div>
    )
  }
  
  if (error) {
    return (
      <div style={{
        border: '2px solid #e74c3c',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
        backgroundColor: '#fee'
      }}>
        <h2>❌ Error Loading Posts</h2>
        <p>{error}</p>
        <button onClick={() => window.location.reload()}>
          Try Again
        </button>
      </div>
    )
  }
  
  return (
    <div style={{
      border: '2px solid #9b59b6',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px'
    }}>
      <h2>Posts from API ({posts.length})</h2>
      
      <div style={{ display: 'grid', gap: '15px' }}>
        {posts.map(post => (
          <div 
            key={post.id}
            style={{
              border: '1px solid #ddd',
              padding: '15px',
              borderRadius: '5px',
              backgroundColor: '#f9f9f9'
            }}
          >
            <h3 style={{ color: '#9b59b6' }}>{post.title}</h3>
            <p style={{ color: '#666' }}>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PostsList