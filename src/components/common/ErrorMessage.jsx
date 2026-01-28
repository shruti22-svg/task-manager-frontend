import { useTheme } from '../../context/ThemeContext'

function ErrorMessage({ message, onClose }) {
  const { theme } = useTheme()
  
  if (!message) return null
  
  return (
    <div style={{
      position: 'fixed',
      top: '80px',
      right: '20px',
      maxWidth: '400px',
      backgroundColor: theme === 'light' ? '#fee' : '#c0392b',
      color: theme === 'light' ? '#c33' : 'white',
      padding: '15px 20px',
      borderRadius: '8px',
      border: `2px solid ${theme === 'light' ? '#fcc' : '#e74c3c'}`,
      boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
      zIndex: 1000,
      animation: 'slideIn 0.3s ease-out'
    }}>
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'start',
        gap: '15px'
      }}>
        <div>
          <strong style={{ display: 'block', marginBottom: '5px' }}>
            ❌ Error
          </strong>
          <p style={{ margin: 0, fontSize: '14px' }}>
            {message}
          </p>
        </div>
        
        {onClose && (
          <button
            onClick={onClose}
            style={{
              backgroundColor: 'transparent',
              border: 'none',
              color: 'inherit',
              fontSize: '20px',
              cursor: 'pointer',
              padding: '0',
              lineHeight: '1'
            }}
          >
            ×
          </button>
        )}
      </div>
      
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default ErrorMessage