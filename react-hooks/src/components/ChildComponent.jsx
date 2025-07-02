import { memo } from "react";
// memo is a higher-order component (HOC) that prevents unnecessary re-renders of the component by memoizing it.
const ChildComponent = memo(({ onClickButton }) => {
  console.log("Child Component rendered");
  return (
    <div>
      <h2>Child Component</h2>
      <p>This is a child component.</p>
      <button onClick={onClickButton}>
        Click Me
      </button>
    </div>
  );
})

export default ChildComponent;