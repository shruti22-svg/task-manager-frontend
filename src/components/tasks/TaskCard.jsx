function TaskCard({ title, description, status, priority }) {
  return (
    <div style={{
      border: '1px solid #ddd',
      padding: '15px',
      margin: '10px 0',
      borderRadius: '8px'
    }}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Status:</strong> {status}</p>
      <p><strong>Priority:</strong> {priority}</p>
    </div>
  )
}

export default TaskCard
