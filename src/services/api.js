import axios from 'axios'

// Create axios instance with default config
const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json'
  },
  timeout: 10000 // 10 second timeout
})

// Request interceptor - runs before every request
api.interceptors.request.use(
  (config) => {
    // Get token from localStorage
    const token = localStorage.getItem('token')
    
    // If token exists, add to headers
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    
    console.log('🚀 API Request:', config.method.toUpperCase(), config.url)
    return config
  },
  (error) => {
    console.error('❌ Request Error:', error)
    return Promise.reject(error)
  }
)

// Response interceptor - runs after every response
api.interceptors.response.use(
  (response) => {
    console.log('✅ API Response:', response.config.url, response.status)
    return response
  },
  (error) => {
    console.error('❌ Response Error:', error.response?.status, error.response?.data)
    
    // Handle specific errors
    if (error.response) {
      // Server responded with error
      const { status, data } = error.response
      
      switch (status) {
        case 401:
          // Unauthorized - token expired or invalid
          console.log('🔒 Unauthorized - redirecting to login')
          localStorage.removeItem('token')
          localStorage.removeItem('user')
          window.location.href = '/login'
          break
          
        case 403:
          // Forbidden
          console.log('🚫 Forbidden - you don\'t have permission')
          break
          
        case 404:
          // Not found
          console.log('🔍 Resource not found')
          break
          
        case 500:
          // Server error
          console.log('💥 Server error')
          break
      }
      
      return Promise.reject(data)
    } else if (error.request) {
      // Request made but no response
      console.log('📡 No response from server')
      return Promise.reject({ message: 'No response from server. Please check your connection.' })
    } else {
      // Something else happened
      console.log('⚠️ Error:', error.message)
      return Promise.reject({ message: error.message })
    }
  }
)

export default api