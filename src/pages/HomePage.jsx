function HomePage() {
  return (
    <div style={{
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1>🏠 Home Page</h1>
      <p style={{ fontSize: '18px', color: '#666' }}>
        Welcome to the Task Manager App!
      </p>
      <p>
        This is a complete task management system built with React.
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
          border: '2px solid #3498db',
          borderRadius: '8px'
        }}>
          <h3>📝 Create Tasks</h3>
          <p>Easily create and organize your tasks</p>
        </div>
        
        <div style={{
          padding: '20px',
          border: '2px solid #2ecc71',
          borderRadius: '8px'
        }}>
          <h3>✅ Track Progress</h3>
          <p>Monitor your task completion</p>
        </div>
        
        <div style={{
          padding: '20px',
          border: '2px solid #9b59b6',
          borderRadius: '8px'
        }}>
          <h3>🎯 Stay Organized</h3>
          <p>Keep everything in one place</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage