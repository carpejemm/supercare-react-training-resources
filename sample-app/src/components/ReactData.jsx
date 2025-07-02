// Parent Component: ReactData.jsx
// Child Component: ChildComponent.jsx

import ChildComponent from "./ChildComponent";

const ReactData = () => {
  const firstName = "Mary";
  const lastName = "Laguda";
  return (
    <div style={{ border: '1px solid red', padding: '20px', marginTop: '20px' }}>
      <h1>React Data</h1>
      <p>This component is used to display data in a React application.</p>
      <p>It can be used to render dynamic content based on the application's state.</p>
      <ChildComponent fName={firstName} lName={lastName}/>
    </div>
  );
}

export default ReactData;