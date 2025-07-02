import ReactUseContext from "./ReactUseContext";
import ReactUseEffect from "./ReactUseEffect";
import ReactUseReducer from "./ReactUseReducer";
import ReactUseCallbackUseMemo from "./ReactUseCallbackUseMemo";
import CustomHooks from "./custom-hooks/CustomHooks";

const ReactHooks = () => {
  return (
    <div>
      <h1>React Hooks</h1>
      <p>React Hooks are functions that let you use state and other React features without writing a class.</p>
      <ul>
        <li><strong>useState:</strong> Allows you to add state to functional components.</li>
        <li><strong>useEffect:</strong> Lets you perform side effects in function components.</li>
        <li><strong>useContext:</strong> Provides a way to pass data through the component tree without having to pass props down manually at every level.</li>
      </ul>

      <ReactUseEffect />
      <ReactUseContext />
      <ReactUseReducer />
      <ReactUseCallbackUseMemo />
      <CustomHooks />
    </div>
  );
}

export default ReactHooks;