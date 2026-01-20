function AboutPage() {
  return (
    <div style={{ padding: '40px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>ℹ️ About Task Manager</h1>
      
      <div style={{
        marginTop: '30px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2>Our Mission</h2>
        <p>
          To provide a simple, efficient, and powerful task management solution
          that helps people stay organized and productive.
        </p>
      </div>
      
      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2>Features</h2>
        <ul style={{ lineHeight: '2' }}>
          <li>✅ Create and manage tasks</li>
          <li>✅ Set priorities and deadlines</li>
          <li>✅ Track task status</li>
          <li>✅ Organize with categories</li>
          <li>✅ User-friendly interface</li>
        </ul>
      </div>
      
      <div style={{
        marginTop: '20px',
        padding: '20px',
        backgroundColor: '#f8f9fa',
        borderRadius: '8px'
      }}>
        <h2>Technology Stack</h2>
        <p><strong>Frontend:</strong> React, React Router</p>
        <p><strong>Backend:</strong> Node.js, Express, MongoDB</p>
        <p><strong>Styling:</strong> CSS3</p>
      </div>
    </div>
  )
}

export default AboutPage