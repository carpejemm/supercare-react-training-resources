import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: ['Buy groceries', 'Walk the dog'],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
  }
})

export const { addTodo } = todosSlice.actions
export default todosSlice.reducer