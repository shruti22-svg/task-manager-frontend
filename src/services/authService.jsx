import api from './api'

const authService = {
  // Register new user
register: async (userData) => {
  try {
    console.log('📤 Sending registration data:', userData)  // ADD THIS
    const response = await api.post('/auth/register', userData)
    console.log('✅ Registration response:', response.data)  // ADD THIS
    
    if (response.data.token) {
      localStorage.setItem('token', response.data.token)
      localStorage.setItem('user', JSON.stringify(response.data.user))
    }
    
    return { success: true, data: response.data }
  } catch (error) {
    console.error('❌ Registration error:', error)  // ADD THIS
    console.error('❌ Error response:', error.response?.data)  // ADD THIS
    return { 
      success: false, 
      error: error.response?.data?.message || error.message || 'Registration failed' 
    }
  }
},

  // Login user
  login: async (credentials) => {
    try {
      const response = await api.post('/auth/login', credentials)
      
      // Save token and user to localStorage
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
        localStorage.setItem('user', JSON.stringify(response.data.user))
      }
      
      return { success: true, data: response.data }
    } catch (error) {
      return { 
        success: false, 
        error: error.message || 'Login failed' 
      }
    }
  },

  // Logout user
  logout: () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  },

  // Get current user
  getCurrentUser: () => {
    const userStr = localStorage.getItem('user')
    return userStr ? JSON.parse(userStr) : null
  },

  // Get token
  getToken: () => {
    return localStorage.getItem('token')
  },

  // Check if user is authenticated
  isAuthenticated: () => {
    return !!localStorage.getItem('token')
  }
}

export default authService