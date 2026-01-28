import { createContext, useContext, useReducer, useEffect } from 'react'
import taskService from '../services/taskService'

const TaskContext = createContext()

// Initial State
const initialState = {
  tasks: [],
  loading: false,
  error: null,
  filter: 'all'
}

// Reducer
function taskReducer(state, action) {
  switch (action.type) {
    case 'SET_TASKS':
      return {
        ...state,
        tasks: action.payload,
        loading: false,
        error: null
      }
    
    case 'ADD_TASK':
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
        error: null
      }
    
    case 'UPDATE_TASK':
      return {
        ...state,
        tasks: state.tasks.map(task =>
          task._id === action.payload._id ? action.payload : task
        ),
        error: null
      }
    
    case 'DELETE_TASK':
      return {
        ...state,
        tasks: state.tasks.filter(task => task._id !== action.payload),
        error: null
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
  
  // Load tasks from backend
  const fetchTasks = async () => {
    dispatch({ type: 'SET_LOADING', payload: true })
    
    const result = await taskService.getAllTasks()
    
    if (result.success) {
      dispatch({ type: 'SET_TASKS', payload: result.data })
    } else {
      dispatch({ type: 'SET_ERROR', payload: result.error })
    }
  }
  
  // Actions
  const addTask = async (taskData) => {
    dispatch({ type: 'SET_LOADING', payload: true })
    
    const result = await taskService.createTask(taskData)
    
    if (result.success) {
      dispatch({ type: 'ADD_TASK', payload: result.data })
      return { success: true }
    } else {
      dispatch({ type: 'SET_ERROR', payload: result.error })
      return { success: false, error: result.error }
    }
  }
  
  const updateTask = async (taskId, updates) => {
    const result = await taskService.updateTask(taskId, updates)
    
    if (result.success) {
      dispatch({ type: 'UPDATE_TASK', payload: result.data })
      return { success: true }
    } else {
      dispatch({ type: 'SET_ERROR', payload: result.error })
      return { success: false, error: result.error }
    }
  }
  
  const deleteTask = async (taskId) => {
    const result = await taskService.deleteTask(taskId)
    
    if (result.success) {
      dispatch({ type: 'DELETE_TASK', payload: taskId })
      return { success: true }
    } else {
      dispatch({ type: 'SET_ERROR', payload: result.error })
      return { success: false, error: result.error }
    }
  }
  
  const setFilter = (filter) => {
    dispatch({ type: 'SET_FILTER', payload: filter })
  }
  
  const clearError = () => {
    dispatch({ type: 'SET_ERROR', payload: null })
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
    fetchTasks,
    addTask,
    updateTask,
    deleteTask,
    setFilter,
    clearError
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