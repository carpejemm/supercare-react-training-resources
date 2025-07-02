import { useEffect } from 'react';

const ToggleOn = () => {
  // This useEffect will run only when ToggleOn component is destroyed
  useEffect(() => {
    return () => {
      console.log("ToggleOn component is destroyed");
    };
  }, []);
  return (
    <>
      Toggle On Component
    </>
  );
}

export default ToggleOn;