import { useState } from 'react';
import Items from './Items.jsx';

const ChildComponent = (props) => {
  {/* State */}
  // points - variable to hold the points
  // const points = 0
  // setPoints - function to update the points
  // const setPoints = (points) => {
  //   points = points + 1
  // }
  // Using useState hook to manage state in functional components
  // 0 - initial value of points
  const [points, setPoints] = useState(0);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const isLogin = false; // Example boolean for conditional rendering
  const fullName = 'Mary Laguda'; // Example full name for demonstration

  {/* Props */}

  // destructuring props to get firstName and lastName
  const { fName, lName } = props;

  const addPoint = () => {
    // Function to add a point
    // setPoints is a function that updates the state
    // add additional logic here if needed
    alert('Point added!');
    setPoints(points + 1);
  };

  const handleNameChange = (event) => {
    // Function to handle name change
    // event.target.value is the new value of the input field
    console.log(event.target.value);
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    // Function to handle email change
    // event.target.value is the new value of the input field
    console.log(event.target.value);
    setEmail(event.target.value);
  };

  return (
    <div style={{ border: '1px solid blue', padding: '20px', marginTop: '20px' }}>
      <h2>Child Component</h2>
      <p>This is a child component that can be used to display additional information.</p>
      <p>It can also be used to render dynamic content based on the application's state.</p>
      <p>Child components can be nested within parent components to create a hierarchical structure.</p>

      {/* Props */}
      <p> First Name: {fName} </p>
      <p> Last Name: {lName}</p>
      <Items fullName={`${fName} ${lName}`}/>

      {/* State */}
      <p>Points: {points}</p>
      <button onClick={addPoint}>Add Point</button>

      {/* Events and Two way binding */}
      <form>
        <label>Enter your name:</label>
        {/* Two way binding - input field */}
        {/* onChange event to update the state */}
        <input 
          type="text"
          onChange={handleNameChange}
          value={name} // value is set to name state
        />
        <br />
        <br />
        <label>Enter your email:</label>
        <input 
          type="text" 
          onChange={handleEmailChange} // inline function to log the value
          value={email} // value is set to email state
        />


        <p>Name: {name}</p>
        <p>Email: {email}</p>
      </form>
    
      {/* Conditonals */}
      <p>Email: {email && 'Has email'}</p>
      
      {
        isLogin ? 
          <p>{fullName}</p>
        : <button onClick={() => alert('Login to see your full name')}>Login</button>
      }
      
    
    
    
    </div>


  );
} 

export default ChildComponent;