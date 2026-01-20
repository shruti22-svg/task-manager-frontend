import TaskList from '../components/tasks/TaskList'

function TasksPage() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>📋 My Tasks</h1>
      <p style={{ color: '#666', marginBottom: '20px' }}>
        Manage all your tasks in one place
      </p>
      
      <TaskList />
    </div>
  )
}

export default TasksPage