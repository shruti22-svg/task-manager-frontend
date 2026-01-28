import { NavLink, useNavigate } from 'react-router-dom'
import { useTheme } from '../../context/ThemeContext'
import { useAuth } from '../../context/AuthContext'
import { useTasks } from '../../context/TaskContext'

function Navbar() {
  const { theme } = useTheme()
  const { user, isAuthenticated, logout } = useAuth()
  const { loading } = useTasks()
  const navigate = useNavigate()
  
  const handleLogout = () => {
    logout()
    navigate('/login')
  }
  
  const navbarStyles = {
    light: {
      backgroundColor: '#2c3e50',
      color: 'white'
    },
    dark: {
      backgroundColor: '#34495e',
      color: '#ecf0f1'
    }
  }
  
  const linkStyle = {
    color: theme === 'light' ? 'white' : '#ecf0f1',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  }
  
  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: theme === 'light' ? '#3498db' : '#f39c12',
    fontWeight: 'bold'
  }
  
  return (
    <nav style={{
      ...navbarStyles[theme],
      padding: '15px 20px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      transition: 'all 0.3s'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <NavLink 
  to="/" 
  style={{ 
    color: theme === 'light' ? 'white' : '#ecf0f1',
    textDecoration: 'none',
    fontSize: '24px',
    fontWeight: 'bold'
  }}
>
  📝 TaskManager
</NavLink>

{loading && (
  <div style={{
    marginLeft: '15px',
    padding: '4px 12px',
    backgroundColor: theme === 'light' ? '#f39c12' : '#f5b041',
    borderRadius: '12px',
    fontSize: '12px',
    fontWeight: 'bold',
    color: 'white',
    animation: 'pulse 1.5s ease-in-out infinite'
  }}>
    Loading...
  </div>
)}

<style>{`
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
  }
`}</style>
        
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <NavLink 
            to="/"
            end
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
          >
            Home
          </NavLink>
          
          {isAuthenticated && (
            <NavLink 
              to="/tasks"
              style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
            >
              Tasks
            </NavLink>
          )}
          
          <NavLink 
            to="/about"
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
          >
            About
          </NavLink>
          
          {isAuthenticated ? (
            <>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: theme === 'light' ? '#34495e' : '#2c3e50'
              }}>
                <img 
                  src={user.avatar} 
                  alt={user.name}
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%'
                  }}
                />
                <span style={{ fontSize: '14px' }}>{user.name}</span>
              </div>
              
              <button
                onClick={handleLogout}
                style={{
                  ...linkStyle,
                  backgroundColor: '#e74c3c',
                  border: 'none',
                  cursor: 'pointer'
                }}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink 
                to="/login"
                style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
              >
                Login
              </NavLink>
              
              <NavLink 
                to="/register"
                style={({ isActive }) => ({
                  ...linkStyle,
                  backgroundColor: '#2ecc71',
                  fontWeight: 'bold'
                })}
              >
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar