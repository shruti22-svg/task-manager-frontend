import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTheme } from '../context/ThemeContext'

function LoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  
  const { login } = useAuth()
  const { theme } = useTheme()
  const navigate = useNavigate()
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    // Validate
    if (!email || !password) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }
    
    // Login
    const result = login(email, password)
    
    if (result.success) {
      navigate('/tasks')
    } else {
      setError(result.error)
    }
    
    setLoading(false)
  }
  
  const cardStyle = {
    backgroundColor: theme === 'light' ? 'white' : '#2c3e50',
    color: theme === 'light' ? '#333' : '#ecf0f1',
    padding: '40px',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%'
  }
  
  const inputStyle = {
    width: '100%',
    padding: '12px',
    borderRadius: '4px',
    border: theme === 'light' ? '1px solid #ddd' : '1px solid #555',
    fontSize: '14px',
    backgroundColor: theme === 'light' ? 'white' : '#34495e',
    color: theme === 'light' ? '#333' : '#ecf0f1'
  }
  
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '80vh',
      padding: '20px'
    }}>
      <div style={cardStyle}>
        <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>
          🔐 Login
        </h1>
        
        {error && (
          <div style={{
            backgroundColor: '#fee',
            color: '#c33',
            padding: '10px',
            borderRadius: '4px',
            marginBottom: '20px',
            border: '1px solid #fcc'
          }}>
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              style={inputStyle}
              disabled={loading}
            />
          </div>
          
          <div style={{ marginBottom: '20px' }}>
            <label style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              style={inputStyle}
              disabled={loading}
            />
          </div>
          
          <button
            type="submit"
            disabled={loading}
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: loading ? '#95a5a6' : '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              fontWeight: 'bold',
              cursor: loading ? 'not-allowed' : 'pointer'
            }}
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
        
        <p style={{ textAlign: 'center', marginTop: '20px', color: theme === 'light' ? '#666' : '#bdc3c7' }}>
          Don't have an account?{' '}
          <Link to="/register" style={{ color: '#3498db', textDecoration: 'none' }}>
            Register
          </Link>
        </p>
        
        <div style={{
          marginTop: '30px',
          padding: '15px',
          backgroundColor: theme === 'light' ? '#e8f5e9' : '#27ae60',
          borderRadius: '4px',
          fontSize: '12px',
          color: theme === 'light' ? '#2e7d32' : 'white'
        }}>
          <strong>Demo:</strong> Enter any email and password to login!
        </div>
      </div>
    </div>
  )
}

export default LoginPage