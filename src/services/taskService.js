import api from './api'

const taskService = {
  // Get all tasks
  getAllTasks: async () => {
    try {
      const response = await api.get('/tasks')
      return { success: true, data: response.data }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Failed to fetch tasks' 
      }
    }
  },

  // Get single task
  getTask: async (taskId) => {
    try {
      const response = await api.get(`/tasks/${taskId}`)
      return { success: true, data: response.data }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Failed to fetch task' 
      }
    }
  },

  // Create new task
  createTask: async (taskData) => {
    try {
      const response = await api.post('/tasks', taskData)
      return { success: true, data: response.data }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Failed to create task' 
      }
    }
  },

  // Update task
  updateTask: async (taskId, updates) => {
    try {
      const response = await api.put(`/tasks/${taskId}`, updates)
      return { success: true, data: response.data }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Failed to update task' 
      }
    }
  },

  // Delete task
  deleteTask: async (taskId) => {
    try {
      const response = await api.delete(`/tasks/${taskId}`)
      return { success: true, data: response.data }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Failed to delete task' 
      }
    }
  },

  // Get tasks by status
  getTasksByStatus: async (status) => {
    try {
      const response = await api.get(`/tasks?status=${status}`)
      return { success: true, data: response.data }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Failed to fetch tasks' 
      }
    }
  }
}

export default taskService