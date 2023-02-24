import './App.css';

import Main from "./components/Main";

//import the hook
import { useToggle } from './hooks/toggleHook';


function App() {

  const {isVisible, handleToggle } = useToggle(false);

  /**
   *  Use the handleToggle to change the value 
   *  inside the state of the custom toggle hook
   *  and use the returned state from it
   *  to make the functionality work on this component 
   */


  return (
    <div className="App">

      <button onClick={() => handleToggle()}>Toggle Component</button>

      {!isVisible && <Main/>}
     
    </div>
  );
}

export default App;
