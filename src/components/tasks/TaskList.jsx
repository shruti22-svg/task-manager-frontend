import { useState } from 'react'
import TaskCard from './TaskCard'
import TaskForm from './TaskForm'

function TaskList() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: 'Learn React',
      description: 'Complete React tutorial and build projects',
      status: 'in-progress',
      priority: 'high',
      dueDate: '2026-01-25',
      createdAt: '2026-01-19'
    },
    {
      id: 2,
      title: 'Build Portfolio',
      description: 'Create a professional portfolio website',
      status: 'pending',
      priority: 'medium',
      dueDate: '2026-02-01',
      createdAt: '2026-01-19'
    },
    {
      id: 3,
      title: 'Job Applications',
      description: 'Apply to 5 companies this week',
      status: 'pending',
      priority: 'high',
      dueDate: '2026-01-22',
      createdAt: '2026-01-19'
    }
  ])
  
  const handleAddTask = (newTask) => {
    setTasks(prev => [...prev, newTask])
  }
  
  const handleDeleteTask = (taskId) => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      setTasks(prev => prev.filter(task => task.id !== taskId))
    }
  }
  
  return (
    <div>
      <TaskForm onAddTask={handleAddTask} />
      
      <h2>My Tasks ({tasks.length})</h2>
      
      {tasks.length === 0 ? (
        <div style={{
          padding: '40px',
          textAlign: 'center',
          backgroundColor: '#f8f9fa',
          borderRadius: '8px',
          color: '#666'
        }}>
          <p style={{ fontSize: '48px' }}>📝</p>
          <h3>No tasks yet!</h3>
          <p>Add your first task using the form above.</p>
        </div>
      ) : (
        tasks.map((task) => (
          <TaskCard 
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
          />
        ))
      )}
    </div>
  )
}

export default TaskList