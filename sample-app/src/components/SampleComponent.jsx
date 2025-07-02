import AnotherComponent from "./AnotherComponent";

const SampleComponent = () => {
  return (
    <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
      <h1>Sample Component</h1>
      <p>This is a sample component for demonstration purposes.</p>
      <AnotherComponent />
    </div>
  );
}

export default SampleComponent;