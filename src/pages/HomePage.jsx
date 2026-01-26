import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTasks } from '../context/TaskContext'
import { useTheme } from '../context/ThemeContext'

function HomePage() {
  const { user, isAuthenticated } = useAuth()
  const { tasks } = useTasks()
  const { theme } = useTheme()
  
  const pendingTasks = tasks.filter(t => t.status === 'pending').length
  const inProgressTasks = tasks.filter(t => t.status === 'in-progress').length
  const completedTasks = tasks.filter(t => t.status === 'completed').length
  
  return (
    <div style={{
      padding: '40px',
      textAlign: 'center'
    }}>
      {isAuthenticated ? (
        <>
          <h1>Welcome back, {user.name}! 👋</h1>
          <p style={{ 
            fontSize: '18px', 
            color: theme === 'light' ? '#666' : '#bdc3c7',
            marginBottom: '40px'
          }}>
            Here's your task overview
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '20px',
            maxWidth: '800px',
            margin: '0 auto 40px'
          }}>
            <div style={{
              padding: '30px',
              border: `2px solid ${theme === 'light' ? '#3498db' : '#5dade2'}`,
              borderRadius: '8px',
              backgroundColor: theme === 'light' ? 'white' : '#2c3e50'
            }}>
              <h2 style={{ fontSize: '48px', margin: '0 0 10px 0', color: '#3498db' }}>
                {tasks.length}
              </h2>
              <p style={{ margin: 0, color: theme === 'light' ? '#666' : '#bdc3c7' }}>
                Total Tasks
              </p>
            </div>
            
            <div style={{
              padding: '30px',
              border: `2px solid ${theme === 'light' ? '#95a5a6' : '#aab7b8'}`,
              borderRadius: '8px',
              backgroundColor: theme === 'light' ? 'white' : '#2c3e50'
            }}>
              <h2 style={{ fontSize: '48px', margin: '0 0 10px 0', color: '#95a5a6' }}>
                {pendingTasks}
              </h2>
              <p style={{ margin: 0, color: theme === 'light' ? '#666' : '#bdc3c7' }}>
                Pending
              </p>
            </div>
            
            <div style={{
              padding: '30px',
              border: `2px solid ${theme === 'light' ? '#f39c12' : '#f5b041'}`,
              borderRadius: '8px',
              backgroundColor: theme === 'light' ? 'white' : '#2c3e50'
            }}>
              <h2 style={{ fontSize: '48px', margin: '0 0 10px 0', color: '#f39c12' }}>
                {inProgressTasks}
              </h2>
              <p style={{ margin: 0, color: theme === 'light' ? '#666' : '#bdc3c7' }}>
                In Progress
              </p>
            </div>
            
            <div style={{
              padding: '30px',
              border: `2px solid ${theme === 'light' ? '#2ecc71' : '#58d68d'}`,
              borderRadius: '8px',
              backgroundColor: theme === 'light' ? 'white' : '#2c3e50'
            }}>
              <h2 style={{ fontSize: '48px', margin: '0 0 10px 0', color: '#2ecc71' }}>
                {completedTasks}
              </h2>
              <p style={{ margin: 0, color: theme === 'light' ? '#666' : '#bdc3c7' }}>
                Completed
              </p>
            </div>
          </div>
          
          <Link to="/tasks">
            <button style={{
              padding: '15px 30px',
              fontSize: '18px',
              backgroundColor: '#3498db',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}>
              Go to Tasks →
            </button>
          </Link>
        </>
      ) : (
        <>
          <h1>🏠 Welcome to Task Manager</h1>
          <p style={{ 
            fontSize: '18px', 
            color: theme === 'light' ? '#666' : '#bdc3c7'
          }}>
            Your complete task management solution
          </p>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '20px',
            marginTop: '40px',
            maxWidth: '800px',
            margin: '40px auto'
          }}>
            <div style={{
              padding: '20px',
              border: `2px solid ${theme === 'light' ? '#3498db' : '#5dade2'}`,
              borderRadius: '8px',
              backgroundColor: theme === 'light' ? 'white' : '#2c3e50'
            }}>
              <h3>📝 Create Tasks</h3>
              <p style={{ color: theme === 'light' ? '#666' : '#bdc3c7' }}>
                Easily create and organize your tasks
              </p>
            </div>
            
            <div style={{
              padding: '20px',
              border: `2px solid ${theme === 'light' ? '#2ecc71' : '#58d68d'}`,
              borderRadius: '8px',
              backgroundColor: theme === 'light' ? 'white' : '#2c3e50'
            }}>
              <h3>✅ Track Progress</h3>
              <p style={{ color: theme === 'light' ? '#666' : '#bdc3c7' }}>
                Monitor your task completion
              </p>
            </div>
            
            <div style={{
              padding: '20px',
              border: `2px solid ${theme === 'light' ? '#9b59b6' : '#a569bd'}`,
              borderRadius: '8px',
              backgroundColor: theme === 'light' ? 'white' : '#2c3e50'
            }}>
              <h3>🎯 Stay Organized</h3>
              <p style={{ color: theme === 'light' ? '#666' : '#bdc3c7' }}>
                Keep everything in one place
              </p>
            </div>
          </div>
          
          <div style={{ marginTop: '40px' }}>
            <Link to="/register">
              <button style={{
                padding: '15px 30px',
                fontSize: '18px',
                backgroundColor: '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginRight: '15px'
              }}>
                Get Started →
              </button>
            </Link>
            
            <Link to="/login">
              <button style={{
                padding: '15px 30px',
                fontSize: '18px',
                backgroundColor: theme === 'light' ? 'white' : '#34495e',
                color: theme === 'light' ? '#3498db' : '#ecf0f1',
                border: `2px solid ${theme === 'light' ? '#3498db' : '#5dade2'}`,
                borderRadius: '8px',
                cursor: 'pointer',
                fontWeight: 'bold'
              }}>
                Login
              </button>
            </Link>
          </div>
        </>
      )}
    </div>
  )
}

export default HomePage