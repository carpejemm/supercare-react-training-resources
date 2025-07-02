import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Footer = () => {
  const { name, age } = useContext(UserContext);

  return (
    <footer>
      <p>&copy; 2023 Your Company. All rights reserved.</p>
      <p>Follow us on social media!</p>
      <p>
        User: {name} | Age: {age}
      </p>
    </footer>
  );
}

export default Footer;