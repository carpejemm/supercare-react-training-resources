import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Navbar = () => {

  const { name, age } = useContext(UserContext);

  return (
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
      <div>
        <p>User: {name}</p>
        <p>Age: {age}</p>
      </div>
    </nav>
  );
}

export default Navbar;