import { useState } from 'react'
import TaskCard from './TaskCard'

function TaskList() {
  // State: array of tasks
  const [tasks, setTaskscd] = useState([  
    {
      id: 1,
      title: 'Learn React',
      description: 'Complete React tutorial',
      status: 'in-progress',
      priority: 'high'
    },
    {
      id: 2,
      title: 'Build Project',
      description: 'Create task manager app',
      status: 'pending',
      priority: 'medium'
    },
    {
      id: 3,
      title: 'Deploy App',
      description: 'Deploy to production',
      status: 'pending',
      priority: 'low'
    }
  ])
  
  return (
    <div>
      <h2>My Tasks ({tasks.length})</h2>
      
      {tasks.map((task) => (
        <TaskCard 
          key={task.id}
          title={task.title}
          description={task.description}
          status={task.status}
          priority={task.priority}
        />
      ))}
    </div>
  )
}

export default TaskList