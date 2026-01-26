import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './context/ThemeContext'
import { AuthProvider } from './context/AuthContext'
import { TaskProvider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <AuthProvider>
    <ThemeProvider>
      <TaskProvider>
        <App />
       </TaskProvider>
    </ThemeProvider>
   </AuthProvider>
  </React.StrictMode>,
)