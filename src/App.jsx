import Welcome from './components/layout/Welcome'
import Counter from './components/common/Counter'
import TaskList from './components/tasks/TaskList'
import TaskCard from './components/tasks/TaskCard'

function App() {
  return (
    <div style={{ padding: '20px'}}>
      <h1>Task Manager App</h1>
      <Welcome />
      
      <Counter />
      
      <TaskList />
        
        <TaskCard 
        title="Learn React"
        description="Complete React tutorial"
        status="in-progress"
        priority="high"
        />
      
      <TaskCard 
        title="Build Project"
        description="Create task manager app"
        status="pending"
        priority="medium"
      />
      <TaskCard
        title="Deploy App"
        description="Deploy to production"
        status="pending"
        priority="low"
      />
    </div>
  )
}

export default App