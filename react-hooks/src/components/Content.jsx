import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Content = () => {

  const { user, setUser } = useContext(UserContext);

  return (
    <div>
      <h1>Content Component</h1>
      <p>This is the content of the page.</p>
      <p>User: {user.name}</p>
      <p>Age: {user.age}</p>
      <button onClick={() => setUser({ ...user, age: user.age + 1 })}>
        Increment Age
      </button>
    </div>
  );
}

export default Content;