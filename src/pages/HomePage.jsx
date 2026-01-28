import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { useTasks } from '../context/TaskContext'
import { useTheme } from '../context/ThemeContext'

function HomePage() {
  const { user, isAuthenticated } = useAuth()
  const { tasks, fetchTasks } = useTasks()
  const { theme } = useTheme()
  
  // Fetch tasks if authenticated
  useEffect(() => {
    if (isAuthenticated) {
      fetchTasks()
    }
  }, [isAuthenticated]) // eslint-disable-line react-hooks/exhaustive-deps
  
  // ... rest of code (no changes to return statement)
}

export default HomePage