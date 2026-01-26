import { createContext, useState, useContext, useEffect } from 'react'

// Create Context
const AuthContext = createContext()

// Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  
  // Check if user is logged in (on mount)
  useEffect(() => {
    const storedUser = localStorage.getItem('user')
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setLoading(false)
  }, [])
  
  // Login function
  const login = (email, password) => {
    // For now, fake authentication
    // Later we'll connect to real backend
    
    if (email && password) {
      const userData = {
        id: Date.now(),
        email: email,
        name: email.split('@')[0],
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`
      }
      
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return { success: true }
    }
    
    return { success: false, error: 'Invalid credentials' }
  }
  
  // Register function
  const register = (name, email, password) => {
    // Fake registration
    // Later we'll connect to real backend
    
    if (name && email && password) {
      const userData = {
        id: Date.now(),
        email: email,
        name: name,
        avatar: `https://ui-avatars.com/api/?name=${name}&background=random`
      }
      
      setUser(userData)
      localStorage.setItem('user', JSON.stringify(userData))
      return { success: true }
    }
    
    return { success: false, error: 'Registration failed' }
  }
  
  // Logout function
  const logout = () => {
    setUser(null)
    localStorage.removeItem('user')
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

// Custom hook
export function useAuth() {
  const context = useContext(AuthContext)
  
  if (context === undefined) {
    throw new Error('useAuth must be used within AuthProvider')
  }
  
  return context
}