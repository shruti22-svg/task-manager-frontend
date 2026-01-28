import { createContext, useState, useContext, useEffect } from 'react'
import authService from '../services/authService'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Check if user is logged in (on mount)
  useEffect(() => {
    const currentUser = authService.getCurrentUser()
    if (currentUser) {
      setUser(currentUser)
    }
    setLoading(false)
  }, [])
  
  // Register function
  const register = async (name, email, password) => {
  const result = await authService.register({
    username: name,  // ✅ CORRECT - backend expects "username"
    email,
    password
  })
    setLoading(false)
    
    if (result.success) {
      setUser(result.data.user)
      return { success: true }
    } else {
      return { success: false, error: result.error }
    }
  }
  
  // Login function
  const login = async (email, password) => {
    setLoading(true)
    
    const result = await authService.login({
      email,
      password
    })
    
    setLoading(false)
    
    if (result.success) {
      setUser(result.data.user)
      return { success: true }
    } else {
      return { success: false, error: result.error }
    }
  }
  
  // Logout function
  const logout = () => {
    authService.logout()
    setUser(null)
  }
  
  // Update user
  const updateUser = (updates) => {
    const updatedUser = { ...user, ...updates }
    setUser(updatedUser)
    localStorage.setItem('user', JSON.stringify(updatedUser))
  }
  
  const value = {
    user,
    loading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
    updateUser
  }
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  
  return context
}