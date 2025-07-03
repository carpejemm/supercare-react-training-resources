import { useState } from 'react'
import axios from 'axios'

const AddTask = () => {
  const [text, setText] = useState('')

  const handleOnChangeInput = event => {
    const newTask = event.target.value;
    setText(newTask)
  }

  const handleAddNewTask = async () => {
    const params = {
      title: text
    }
    const response = await axios.post('http://localhost:8000/api/v1/tasks/add', params)
    console.log(response)
    setText('')
  }

  return (
    <>
      <input 
        type="text" 
        value={text}
        onChange={handleOnChangeInput}
      />
      <button onClick={handleAddNewTask}>Add New Task</button>
    </>
  )
}

export default AddTask