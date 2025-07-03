import axios from 'axios';
import { useState, useEffect, use } from 'react'
import AddTask from './AddTask';

const Tasks = () => {
  const [tasks, setTasks] = useState([])

 

  useEffect(() => {

    const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/tasks/all')
      if(res.status !== 200) {
        throw new Error('Network response was not ok')
      }
      setTasks(res.data)
    } catch (error) {
      console.error('Error fetching tasks:', error)
    }
  }
    fetchTasks()
  })


  return (
    <>
      <h2>List of Tasks</h2>
      {
        tasks && tasks.length > 0 ? (
          <ol>
            {
              tasks.map(task => (
                <li key={task.id} style={{ border: '1px solid blue', margin: '10px' }}>
                  <p>Task Name: {task.title}</p>
                  <p>Task Status: {task.completed ? 'Done' : 'Not yet Done'}</p>
                </li>
              ))
            }
          </ol>
        ) : (
          <p>Loading...</p>
        )
      }
      <hr />
      <h3>Add Task</h3>
      <AddTask />
    </>
  )
}

export default Tasks;