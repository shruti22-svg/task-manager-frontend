import { useState } from 'react'

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [username, setUsername] = useState('Guest')
  const [view, setView] = useState('home') // 'home', 'profile', 'settings'
  
  const handleLogin = () => {
    setIsLoggedIn(true)
    setUsername('John Doe')
  }
  
  const handleLogout = () => {
    setIsLoggedIn(false)
    setUsername('Guest')
    setView('home')
  }
  
  // Pattern 1: Early return
  if (!isLoggedIn) {
    return (
      <div style={{
        border: '2px solid #e74c3c',
        padding: '20px',
        margin: '20px 0',
        borderRadius: '8px',
        textAlign: 'center'
      }}>
        <h2>Please Log In</h2>
        <p>You need to log in to access this content.</p>
        <button onClick={handleLogin}>
          Log In
        </button>
      </div>
    )
  }
  
  // Pattern 4: Switch for multiple views
  const renderView = () => {
    switch (view) {
      case 'home':
        return (
          <div style={{ padding: '20px', backgroundColor: '#e8f5e9' }}>
            <h3>🏠 Home</h3>
            <p>Welcome to your dashboard, {username}!</p>
          </div>
        )
      
      case 'profile':
        return (
          <div style={{ padding: '20px', backgroundColor: '#e3f2fd' }}>
            <h3>👤 Profile</h3>
            <p><strong>Name:</strong> {username}</p>
            <p><strong>Email:</strong> john@example.com</p>
            <p><strong>Member since:</strong> 2024</p>
          </div>
        )
      
      case 'settings':
        return (
          <div style={{ padding: '20px', backgroundColor: '#fff3e0' }}>
            <h3>⚙️ Settings</h3>
            <p>Configure your preferences here.</p>
            <label>
              <input type="checkbox" /> Email notifications
            </label>
            <br />
            <label>
              <input type="checkbox" /> Dark mode
            </label>
          </div>
        )
      
      default:
        return <div>Unknown view</div>
    }
  }
  
  // Logged in view
  return (
    <div style={{
      border: '2px solid #2ecc71',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2>Welcome, {username}!</h2>
        <button onClick={handleLogout}>
          Log Out
        </button>
      </div>
      
      {/* Navigation */}
      <div style={{ marginBottom: '20px' }}>
        <button 
          onClick={() => setView('home')}
          style={{
            backgroundColor: view === 'home' ? '#2ecc71' : '#95a5a6'
          }}
        >
          Home
        </button>
        <button 
          onClick={() => setView('profile')}
          style={{
            backgroundColor: view === 'profile' ? '#3498db' : '#95a5a6'
          }}
        >
          Profile
        </button>
        <button 
          onClick={() => setView('settings')}
          style={{
            backgroundColor: view === 'settings' ? '#f39c12' : '#95a5a6'
          }}
        >
          Settings
        </button>
      </div>
      
      {/* Pattern 2: Ternary for simple condition */}
      {isLoggedIn ? (
        renderView()
      ) : (
        <p>Please log in to continue</p>
      )}
      
      {/* Pattern 3: Logical AND */}
      {isLoggedIn && (
        <p style={{ 
          marginTop: '20px', 
          fontSize: '12px', 
          color: '#666' 
        }}>
          Last login: {new Date().toLocaleString()}
        </p>
      )}
    </div>
  )
}

export default LoginStatus