import { useState, useEffect } from 'react';
import ToggleOff from './ToggleOff';
import ToggleOn from './ToggleOn';

const ReactUseEffect = () => {
  const [name, setName] = useState('Justin Bieber');
  const [address, setAddress] = useState('Bacoor Cavite');
  const [age, setAge] = useState(18);
  const [toggle, setToggle] = useState(false);

  // useEffect is a hook that lets you perform side effects in function components
  // It runs after the component renders and can be used for tasks like data fetching, subscriptions
  // useEffect(() => {
  //   console.log("Component mounted");
  //   // change the value of name after 2 seconds
  //   // setTimeout(() => {
  //   //   setName("Jem Laguda");
  //   // }, 2000);

  //   setName("Jem Laguda");
  // })

  // this useEfect will run only depedning on the dependency array
  useEffect(() => {
    console.log("This effect runs only when 'name' changes");
  }, [age, address]); // This effect runs only when 'name' changes

  

  return (
    <div>
      <h1>React useEffect Hook</h1>
      <p>
        The useEffect hook is used to perform side effects in functional components. It runs after the component renders and can be used for tasks like data fetching, subscriptions, or manually changing the DOM.
      </p>
      <p>
        The useEffect hook takes two arguments: a function that contains the side effect code and an optional dependency array that determines when the effect should run.
      </p>
      <p>{name}</p>
      <p>{address}</p>
      <p>{age}</p>
      <button onClick={() => setName('Mary')}>Change name</button>
      <button onClick={() => setAddress('Makati City')}>Change address</button>
      <button onClick={() => setAge(age + 1)}>Change age</button>


      <p>Toggle: {toggle ? <ToggleOn /> : <ToggleOff />}</p>
      <button onClick={() => setToggle(!toggle)}>toggle</button>
    </div>
  );
}

export default ReactUseEffect;