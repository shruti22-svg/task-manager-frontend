import TaskCard from './TaskCard'
import TaskForm from './TaskForm'
import { useTasks } from '../../context/TaskContext'
import { useTheme } from '../../context/ThemeContext'

function TaskList() {
  const { filteredTasks, filter, setFilter, addTask, deleteTask, updateTask } = useTasks()
  const { theme } = useTheme()
  
  const handleAddTask = async (taskData) => {
  const result = await addTask(taskData)
  return result
}

const handleDeleteTask = async (taskId) => {
  if (window.confirm('Are you sure you want to delete this task?')) {
    await deleteTask(taskId)
  }
}

const handleUpdateTask = async (taskId, updates) => {
  await updateTask(taskId, updates)
}
  
  const filterButtonStyle = (filterType) => ({
    padding: '8px 16px',
    margin: '5px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: filter === filterType ? 'bold' : 'normal',
    backgroundColor: filter === filterType 
      ? (theme === 'light' ? '#3498db' : '#f39c12')
      : (theme === 'light' ? '#ecf0f1' : '#34495e'),
    color: filter === filterType 
      ? 'white' 
      : (theme === 'light' ? '#333' : '#ecf0f1')
  })
  
  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />
      
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '20px'
      }}>
        <h2 style={{ margin: 0 }}>
          My Tasks ({filteredTasks.length})
        </h2>
        
        <div>
          <button 
            onClick={() => setFilter('all')}
            style={filterButtonStyle('all')}
          >
            All
          </button>
          <button 
            onClick={() => setFilter('pending')}
            style={filterButtonStyle('pending')}
          >
            Pending
          </button>
          <button 
            onClick={() => setFilter('in-progress')}
            style={filterButtonStyle('in-progress')}
          >
            In Progress
          </button>
          <button 
            onClick={() => setFilter('completed')}
            style={filterButtonStyle('completed')}
          >
            Completed
          </button>
        </div>
      </div>
      
      {filteredTasks.length === 0 ? (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          backgroundColor: theme === 'light' ? '#f8f9fa' : '#2c3e50',
          borderRadius: '8px',
          color: theme === 'light' ? '#666' : '#bdc3c7'
        }}>
          <p style={{ fontSize: '48px' }}>📝</p>
          <h3>No tasks found!</h3>
          <p>
            {filter === 'all' 
              ? 'Add your first task using the form above.'
              : `No tasks with status: ${filter}`
            }
          </p>
        </div>
      ) : (
        filteredTasks.map((task) => (
          <TaskCard 
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
          />
        ))
      )}
    </div>
  )
}

export default TaskList