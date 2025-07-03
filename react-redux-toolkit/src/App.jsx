import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import './App.css'
import { addTodo } from './todosSlice'

function App() {
  const [text, setText] = useState('')
  const todos = useSelector((state) => state.todos)

  const dispatch = useDispatch()

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <>
      <h1>React Redux Toolkit</h1>
      <p>Welcome to the React Redux Toolkit example!</p>
      {/* Add your components here */}
      <hr />
      {/* Create input and a button to add todos. */}
      <input 
        type="text" 
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a todo"
      />
      <button onClick={handleAddTodo}>Add Todo</button>
      <hr />
      {/* Display the list of todos */}
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </>
  )
}

export default App

// Step 1: Wrap the App component with the Provider component from react-redux.
// Step 2: Import the store from store.js and pass it to the Provider component.
// Step 3: Create a store.js file that uses configureStore from @reduxjs/toolkit.
// Step 4: Create store in store.js that uses todosReducer from todosSlice.js.
// Step 5: Create a todosSlice.js file that uses createSlice from @reduxjs/toolkit.
// Step 6: Define a todosSlice with an initial state and a reducer to add todos
