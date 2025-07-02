import Navbar from "./Navbar";
import Content from "./Content";
import Footer from "./Footer";
import { UserProvider } from "../contexts/UserContext";

const ReactUseContext = () => {
  return (
    <>
      <h1>React Use Context</h1>
      <p>This component demonstrates the use of React's Context API.</p>
      <UserProvider>
        <Navbar />
        <Content />
        <Footer />
      </UserProvider>
    </>
  );
}

export default ReactUseContext;