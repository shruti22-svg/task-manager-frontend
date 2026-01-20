import { useState } from 'react'

function ValidatedForm() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  
  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'username':
        if (value.length < 3) {
          return 'Username must be at least 3 characters'
        }
        if (!/^[a-zA-Z0-9_]+$/.test(value)) {
          return 'Username can only contain letters, numbers, and underscores'
        }
        return ''
        
      case 'email':
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          return 'Please enter a valid email'
        }
        return ''
        
      case 'password':
        if (value.length < 6) {
          return 'Password must be at least 6 characters'
        }
        return ''
        
      case 'confirmPassword':
        if (value !== formData.password) {
          return 'Passwords do not match'
        }
        return ''
        
      default:
        return ''
    }
  }
  
  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target
    
    // Update form data
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    
    // Validate and update errors
    const error = validateField(name, value)
    setErrors(prev => ({
      ...prev,
      [name]: error
    }))
  }
  
  // Handle blur (when user leaves field)
  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({
      ...prev,
      [name]: true
    }))
  }
  
  // Handle submit
  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validate all fields
    const newErrors = {}
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key])
      if (error) newErrors[key] = error
    })
    
    // Mark all fields as touched
    const allTouched = {}
    Object.keys(formData).forEach(key => {
      allTouched[key] = true
    })
    setTouched(allTouched)
    
    // If there are errors, don't submit
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      alert('Please fix the errors before submitting')
      return
    }
    
    // Success!
    console.log('Form submitted:', formData)
    alert('Registration successful!')
    
    // Reset form
    setFormData({
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    setErrors({})
    setTouched({})
  }
  
  return (
    <div style={{
      border: '2px solid #2ecc71',
      padding: '20px',
      margin: '20px 0',
      borderRadius: '8px',
      maxWidth: '500px'
    }}>
      <h2>Registration Form (with Validation)</h2>
      
      <form onSubmit={handleSubmit}>
        {/* Username */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Username *
          </label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: touched.username && errors.username 
                ? '2px solid #e74c3c' 
                : '1px solid #ddd'
            }}
          />
          {touched.username && errors.username && (
            <p style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
              {errors.username}
            </p>
          )}
        </div>
        
        {/* Email */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: touched.email && errors.email 
                ? '2px solid #e74c3c' 
                : '1px solid #ddd'
            }}
          />
          {touched.email && errors.email && (
            <p style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
              {errors.email}
            </p>
          )}
        </div>
        
        {/* Password */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Password *
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: touched.password && errors.password 
                ? '2px solid #e74c3c' 
                : '1px solid #ddd'
            }}
          />
          {touched.password && errors.password && (
            <p style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
              {errors.password}
            </p>
          )}
        </div>
        
        {/* Confirm Password */}
        <div style={{ marginBottom: '15px' }}>
          <label style={{ display: 'block', marginBottom: '5px' }}>
            Confirm Password *
          </label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            onBlur={handleBlur}
            style={{
              width: '100%',
              padding: '8px',
              borderRadius: '4px',
              border: touched.confirmPassword && errors.confirmPassword 
                ? '2px solid #e74c3c' 
                : '1px solid #ddd'
            }}
          />
          {touched.confirmPassword && errors.confirmPassword && (
            <p style={{ color: '#e74c3c', fontSize: '14px', marginTop: '5px' }}>
              {errors.confirmPassword}
            </p>
          )}
        </div>
        
        <button type="submit">
          Register
        </button>
      </form>
    </div>
  )
}

export default ValidatedForm