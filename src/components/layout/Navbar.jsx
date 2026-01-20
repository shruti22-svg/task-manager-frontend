import { NavLink } from 'react-router-dom'

function Navbar() {
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '8px 16px',
    borderRadius: '4px',
    transition: 'background-color 0.3s'
  }
  
  const activeLinkStyle = {
    ...linkStyle,
    backgroundColor: '#3498db',
    fontWeight: 'bold'
  }
  
  return (
    <nav style={{
      backgroundColor: '#2c3e50',
      padding: '15px 20px',
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
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
            color: 'white', 
            textDecoration: 'none',
            fontSize: '24px',
            fontWeight: 'bold'
          }}
        >
          📝 TaskManager
        </NavLink>
        
        <div style={{ display: 'flex', gap: '20px' }}>
          <NavLink 
            to="/"
            end
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
          >
            Home
          </NavLink>
          
          <NavLink 
            to="/tasks"
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
          >
            Tasks
          </NavLink>
          
          <NavLink 
            to="/about"
            style={({ isActive }) => isActive ? activeLinkStyle : linkStyle}
          >
            About
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar