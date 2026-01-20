import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <div style={{
      padding: '40px',
      textAlign: 'center'
    }}>
      <h1 style={{ fontSize: '72px' }}>404</h1>
      <h2>Page Not Found</h2>
      <p style={{ color: '#666', marginTop: '20px' }}>
        The page you're looking for doesn't exist.
      </p>
      
      <Link to="/">
        <button style={{ marginTop: '20px' }}>
          Go Home
        </button>
      </Link>
    </div>
  )
}

export default NotFoundPage