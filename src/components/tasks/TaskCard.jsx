function TaskCard({ task, onDelete }) {
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
  
  return (
    <div style={{
      border: '2px solid #ddd',
      padding: '20px',
      margin: '15px 0',
      borderRadius: '8px',
      backgroundColor: 'white',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        marginBottom: '10px'
      }}>
        <h3 style={{ margin: 0, color: '#2c3e50' }}>
          {task.title}
        </h3>
        
        <button 
          onClick={() => onDelete(task.id)}
          style={{
            backgroundColor: '#e74c3c',
            color: 'white',
            border: 'none',
            padding: '6px 12px',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '12px'
          }}
        >
          Delete
        </button>
      </div>
      
      <p style={{ color: '#666', marginBottom: '15px' }}>
        {task.description}
      </p>
      
      <div style={{
        display: 'flex',
        gap: '10px',
        flexWrap: 'wrap'
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
          border: '1px solid #ddd',
          color: '#666'
        }}>
          📅 Due: {new Date(task.dueDate).toLocaleDateString()}
        </span>
      </div>
    </div>
  )
}

export default TaskCard