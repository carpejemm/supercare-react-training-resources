import { useState, useCallback, useMemo } from "react";
import ChildComponent from "./ChildComponent";

const ExpensiveCalculation = ({ num }) => {
  console.log("Calculating...");
  let total = 0;
  for (let i = 0; i < 1e7; i++) {
    total += i;
  }
  return <h2>Total: {total + num}</h2>;
}

const ReactUseCallbackUseMemo = () => {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  // const handleClick = () => {
  //   console.log("Button clicked!");
  // };

  const handleClick = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  const memoidResult = useMemo(() => {
    console.log('useMemo: Calculating results')
    let total = 0;
    for (let i = 0; i < 1e7; i++) {
      total += i;
    }

    return total + num
  }, [num]);

  return (
    <div>
      <h1>React useCallback and useMemo Hooks</h1>
      <p>
        The <code>useCallback</code> and <code>useMemo</code> hooks are React hooks that help optimize performance by memoizing functions and values, respectively. They prevent unnecessary
        re-creations of functions and values on every render, which can be particularly useful in components that render frequently or have expensive calculations.
      </p> 

      <h2>useCallback</h2>
      <h3>Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>+</button>
      <ChildComponent onClickButton={handleClick}/>

      <h2>useMemo</h2>
      <h3>Num: {num}</h3>
      <input 
        type="number"
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value, 10) || 0)}
      />
      {/* <ExpensiveCalculation num={num} /> */}
      <h3>Memoized Result: {memoidResult}</h3>
    </div>
  );
}

export default ReactUseCallbackUseMemo;