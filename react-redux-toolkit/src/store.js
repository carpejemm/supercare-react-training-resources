import { configureStore } from '@reduxjs/toolkit'
import todosReducer from './todosSlice'

const store = configureStore({
  reducer: {
    todos: todosReducer,
    // users: usersReducer, // Assuming you have a usersReducer defined in usersSlice.js
  }
})

export default store 