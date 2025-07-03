import axios from 'axios';
import { useState, useEffect } from 'react';

const UserComponent = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const response  = await axios.get('https://jsonplaceholder.typicode.com/users');
      if (response.status !== 200) {
        throw new Error('Network response was not ok');
      }
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  })

  return (
    <>
      <h2>List of Users</h2>
      {
        users && users.length > 0 ? (
          <p>
            {
              users.map(user=> (
                <div key={user.id} style={{ border: '1px solid blue' }}>
                  <p>Name: {user.name}</p>
                  <p>Username: {user.username}</p>
                  <p>Email: {user.email}</p>
                </div>
              ))
            }
          </p> 
        ) : (
          <p>Loading...</p>
        )
      }
    </>
  )
}

export default UserComponent;