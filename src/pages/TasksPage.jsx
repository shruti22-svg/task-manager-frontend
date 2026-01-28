import { useEffect } from 'react'
import TaskList from '../components/tasks/TaskList'
import { useTasks } from '../context/TaskContext'
import { useTheme } from '../context/ThemeContext'
import ErrorMessage from '../components/common/ErrorMessage'

function TasksPage() {
  const { fetchTasks, loading, error, clearError } = useTasks()
  const { theme } = useTheme()
  
  useEffect(() => {
    fetchTasks()
  }, []) // eslint-disable-line react-hooks/exhaustive-deps
  
  // ... loading state ...
  
  return (
    <div style={{ padding: '20px' }}>
      <ErrorMessage message={error} onClose={clearError} />
      
      <h1 style={{ color: theme === 'light' ? '#333' : '#ecf0f1' }}>
        📋 My Tasks
      </h1>
      <p style={{ 
        color: theme === 'light' ? '#666' : '#bdc3c7',
        marginBottom: '20px' 
      }}>
        Manage all your tasks in one place
      </p>
      
      <TaskList />
    </div>
  )
}

export default TasksPage