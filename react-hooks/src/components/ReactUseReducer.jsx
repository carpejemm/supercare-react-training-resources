import { useReducer, useState } from "react";

const initialTodos = [
  { id: 1, title: "Learn React", completed: false },
  { id: 2, title: "Learn useReducer", completed: false },
];

const reducerFunction = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      { const newTodo = {
        id: state.length + 1,
        title: action.payload,
        completed: false
      }
      return [...state, newTodo]; }
    case "REMOVE_TODO":
      return state.filter(todo => todo.id !== action.payload);
  }
}

const ReactUseReducer = () => {

  // useReducer hook to manage todos state
  const [todos, dispatch] = useReducer(reducerFunction, initialTodos);
  const [newTask, setNewTask] = useState("");

  const handleOnChangeInput = (e) => {
    const newTask = e.target.value;
    setNewTask(newTask);
  };

  const handleAddTask = () => {
    if (newTask.trim() === "") return;
    dispatch({ type: "ADD_TODO", payload: newTask });
    setNewTask("");
  };

  return (
    <div className="react-use-reducer">
      <h1>React useReducer Hook</h1>
      <p>
        The <code>useReducer</code> hook is a React hook that allows you to
        manage complex state logic in functional components. It is an alternative
        to the <code>useState</code> hook and is particularly useful when you have
        state that depends on previous state or when you need to manage multiple
        state variables that are related to each other.  
      </p> 

      <h2>Example: Todo List</h2>
      {
        todos.map(todo => (
          <div key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => dispatch({ type: "REMOVE_TODO", payload: todo.id })}>
              Remove
            </button>
          </div>
        ))
      }

      {/* Create input for new todo and button to add todo */}
      <input 
        type="text" 
        value={newTask} 
        onChange={(e) => handleOnChangeInput(e)}
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default ReactUseReducer;