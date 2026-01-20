import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    priority: 'medium',
    status: 'pending',
    dueDate: ''
  })
  
  const [errors, setErrors] = useState({})
  
  const handleChange = (e) => {
    const { name, value } = e.target
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Clear error for this field
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }))
    }
  }
  
  const validate = () => {
    const newErrors = {}
    
    if (!formData.title.trim()) {
      newErrors.title = 'Title is required'
    } else if (formData.title.length < 3) {
      newErrors.title = 'Title must be at least 3 characters'
    }
    
    if (!formData.description.trim()) {
      newErrors.description = 'Description is required'
    }
    
    if (!formData.dueDate) {
      newErrors.dueDate = 'Due date is required'
    }
    
    return newErrors
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    const newErrors = validate()
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      return
    }
    
    // Create task object
    const newTask = {
      id: Date.now(), // Simple ID for now
      ...formData,
      createdAt: new Date().toISOString()
    }
    
    // Call parent function
    onAddTask(newTask)
    
    // Reset form
    setFormData({
      title: '',
      description: '',
      priority: 'medium',
      status: 'pending',
      dueDate: ''
    })
    
    alert('Task added successfully!')
  }
  
  return (
    <div style={{
      border: '2px solid #3498db',
      padding: '20px',
      borderRadius: '8px',
      marginBottom: '30px',
      backgroundColor: 'white'
    }}>
      <h2>➕ Add New Task</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Title */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Task Title *
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter task title"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: errors.title ? '2px solid #e74c3c' : '1px solid #ddd',
              fontSize: '14px'
            }}
          />
          {errors.title && (
            <p style={{ color: '#e74c3c', fontSize: '12px', marginTop: '5px' }}>
              {errors.title}
            </p>
          )}
        </div>
        
        {/* Description */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
            Description *
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Enter task description"
            rows="3"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '4px',
              border: errors.description ? '2px solid #e74c3c' : '1px solid #ddd',
              fontSize: '14px',
              fontFamily: 'inherit'
            }}
          />
          {errors.description && (
            <p style={{ color: '#e74c3c', fontSize: '12px', marginTop: '5px' }}>
              {errors.description}
            </p>
          )}
        </div>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr 1fr 1fr', 
          gap: '15px',
          marginBottom: '15px'
        }}>
          {/* Priority */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Priority
            </label>
            <select
              name="priority"
              value={formData.priority}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '14px'
              }}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          
          {/* Status */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Status
            </label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: '1px solid #ddd',
                fontSize: '14px'
              }}
            >
              <option value="pending">Pending</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>
          </div>
          
          {/* Due Date */}
          <div>
            <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
              Due Date *
            </label>
            <input
              type="date"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '10px',
                borderRadius: '4px',
                border: errors.dueDate ? '2px solid #e74c3c' : '1px solid #ddd',
                fontSize: '14px'
              }}
            />
            {errors.dueDate && (
              <p style={{ color: '#e74c3c', fontSize: '12px', marginTop: '5px' }}>
                {errors.dueDate}
              </p>
            )}
          </div>
        </div>
        
        <button 
          type="submit"
          style={{
            backgroundColor: '#2ecc71',
            color: 'white',
            padding: '12px 30px',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
            fontWeight: 'bold'
          }}
        >
          Add Task
        </button>
      </form>
    </div>
  )
}

export default TaskForm