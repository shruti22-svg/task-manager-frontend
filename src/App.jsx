import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import TasksPage from './pages/TasksPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ThemeSwitcher from './components/common/ThemeSwitcher'
import ProtectedRoute from './components/common/ProtectedRoute'
import { useTheme } from './context/ThemeContext'

function App() {
  const { theme } = useTheme()
  
  const themeStyles = {
    light: {
      backgroundColor: '#f5f5f5',
      color: '#333'
    },
    dark: {
      backgroundColor: '#1a1a1a',
      color: '#f5f5f5'
    }
  }
  
  return (
    <BrowserRouter>
      <div style={{ 
        minHeight: '100vh', 
        ...themeStyles[theme],
        transition: 'all 0.3s'
      }}>
        <ThemeSwitcher />
        <Navbar />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route 
              path="/tasks" 
              element={
                <ProtectedRoute>
                  <TasksPage />
                </ProtectedRoute>
              } 
            />

            <Route path="/tasks" element={<TasksPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App