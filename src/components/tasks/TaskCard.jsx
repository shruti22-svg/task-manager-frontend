import { useTheme } from '../../context/ThemeContext'

function TaskCard({ task, onDelete, onUpdate }) {
  const { theme } = useTheme()
  
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return '#e74c3c'
      case 'medium': return '#f39c12'
      case 'low': return '#3498db'
      default: return '#95a5a6'
    }
  }
  
  const getStatusColor = (status) => {
    switch (status) {
      case 'completed': return '#2ecc71'
      case 'in-progress': return '#f39c12'
      case 'pending': return '#95a5a6'
      default: return '#95a5a6'
    }
  }
  
  const handleStatusChange = async (e) => {
    await onUpdate(task.id, { status: e.target.value })
  }
  
  const cardStyle = {
    border: `2px solid ${theme === 'light' ? '#ddd' : '#555'}`,
    padding: '20px',
    margin: '15px 0',
    borderRadius: '8px',
    backgroundColor: theme === 'light' ? 'white' : '#2c3e50',
    color: theme === 'light' ? '#333' : '#ecf0f1',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }
  
  return (
    <div style={cardStyle}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: '10px'
      }}>
        <h3 style={{ margin: 0 }}>
          {task.title}
        </h3>
    
      </div>
      
      <p style={{ color: theme === 'light' ? '#666' : '#bdc3c7', marginBottom: '15px' }}>
        {task.description}
      </p>
      
      <div style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: '15px'
      }}>
        <span style={{
          padding: '4px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 'bold',
          backgroundColor: getStatusColor(task.status),
          color: 'white'
        }}>
          {task.status.toUpperCase()}
        </span>
        
        <span style={{
          padding: '4px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          fontWeight: 'bold',
          backgroundColor: getPriorityColor(task.priority),
          color: 'white'
        }}>
          {task.priority.toUpperCase()} PRIORITY
        </span>
        
        <span style={{
          padding: '4px 12px',
          borderRadius: '4px',
          fontSize: '12px',
          border: `1px solid ${theme === 'light' ? '#ddd' : '#555'}`,
          color: theme === 'light' ? '#666' : '#bdc3c7'
        }}>
          📅 Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>
      </div>
      
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px'
      }}>
        <label style={{ fontSize: '14px', fontWeight: 'bold' }}>
          Update Status:
        </label>
        <select
          value={task.status}
          onChange={handleStatusChange}
          style={{
            padding: '6px 12px',
            borderRadius: '4px',
            border: `1px solid ${theme === 'light' ? '#ddd' : '#555'}`,
            backgroundColor: theme === 'light' ? 'white' : '#34495e',
            color: theme === 'light' ? '#333' : '#ecf0f1',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          <option value="pending">Pending</option>
          <option value="in-progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
      </div>
    </div>
  )
}

export default TaskCard