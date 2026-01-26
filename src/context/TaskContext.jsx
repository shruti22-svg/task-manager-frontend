import { createContext, useContext, useReducer, useEffect } from 'react'

// Create Context
const TaskContext = createContext()

// Initial State
const initialState = {
  tasks: [],
  loading: false,
  error: null,
  filter: 'all' // 'all', 'pending', 'in-progress', 'completed'
}

// Reducer
function taskReducer(state, action) {
  switch (action.type) {
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
        loading: false
      }
    
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      }
    
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task.id === action.payload.id ? action.payload : task
        )
      }
    
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task.id !== action.payload)
      }
    
    case 'SET_FILTER':
      return {
        ...state,
        filter: action.payload
      }
    
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      }
    
    case 'SET_ERROR':
      return {
        ...state,
        error: action.payload,
        loading: false
      }
    
    default:
      return state
  }
}

// Provider
export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState)
  
  // Load tasks from localStorage on mount
  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks')
    if (storedTasks) {
      dispatch({ type: 'SET_TASKS', payload: JSON.parse(storedTasks) })
    } else {
      // Default tasks
      const defaultTasks = [
        {
          id: 1,
          title: 'Learn Context API',
          description: 'Master React Context API and useReducer',
          status: 'in-progress',
          priority: 'high',
          dueDate: '2026-01-25',
          createdAt: new Date().toISOString()
        },
        {
          id: 2,
          title: 'Build Full Stack App',
          description: 'Complete the task manager application',
          status: 'pending',
          priority: 'high',
          dueDate: '2026-02-01',
          createdAt: new Date().toISOString()
        }
      ]
      dispatch({ type: 'SET_TASKS', payload: defaultTasks })
    }
  }, [])
  
  // Save tasks to localStorage whenever they change
  useEffect(() => {
    if (state.tasks.length > 0) {
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }
  }, [state.tasks])
  
  // Actions
  const addTask = (task) => {
    const newTask = {
      ...task,
      id: Date.now(),
      createdAt: new Date().toISOString()
    }
    dispatch({ type: 'ADD_TASK', payload: newTask })
  }
  
  const updateTask = (taskId, updates) => {
    const task = state.tasks.find(t => t.id === taskId)
    if (task) {
      dispatch({ 
        type: 'UPDATE_TASK', 
        payload: { ...task, ...updates } 
      })
    }
  }
  
  const deleteTask = (taskId) => {
    dispatch({ type: 'DELETE_TASK', payload: taskId })
  }
  
  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter })
  }
  
  // Get filtered tasks
  const getFilteredTasks = () => {
    if (state.filter === 'all') {
      return state.tasks
    }
    return state.tasks.filter(task => task.status === state.filter)
  }
  
  const value = {
    tasks: state.tasks,
    filteredTasks: getFilteredTasks(),
    loading: state.loading,
    error: state.error,
    filter: state.filter,
    addTask,
    updateTask,
    deleteTask,
    setFilter
  }
  
  return (
    <TaskContext.Provider value={value}>
      {children}
    </TaskContext.Provider>
  )
}

// Custom hook
export function useTasks() {
  const context = useContext(TaskContext)
  
  if (context === undefined) {
    throw new Error('useTasks must be used within TaskProvider')
  }
  
  return context
}