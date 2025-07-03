import { useState, useEffect } from 'react'
import './App.css'

import UserComponent from './components/UserComponent'
import Tasks from './components/Tasks'

function App() {
  const [users, setUsers] = useState([])

  const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    if(!response.ok) {
      throw new Error('Network response was not ok')
    }
    const data = await response.json()
    setUsers(data)
  }

  useEffect(() => {
    fetchData()
  })



  return (
    <>
      {/* <h2>List of Users</h2> */}
      {/* {
        users.length > 0 ? (
          <ul>
            {
              users.map(user => (
                <>
                  <p>Name: {user.name}</p>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                </>
                
              ))
            }
          </ul>
        ) : (
          <p>Loading...</p>
        )
      } */}
      <hr />
      {/* <UserComponent /> */}
      <Tasks />
    </>
  )
}

export default App
