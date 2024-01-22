import { useRef, createContext, useEffect, useReducer, useState } from "react";
import CompA from "./CompA";
import Counter from "./Counter";
import ToDo from "./ToDo";
import Meals from "./Meals";
import Calculator from "./Calculator";

function ReactForm() {
  const [userName, setUserName] = useState("");
  const handleChange = (e) => {
    setUserName(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`You typed: ${userName}`);
    setUserName("");
  };
  return (
    <>
      <h1>Form Demo</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={userName} onChange={handleChange}></input>
      </form>
    </>
  );
}

// 1. Render on load
// 2. Anytime we do (side Effect)
// 3. Dependency List ([])
function ReactUseEffect() {
  const [value, setValue] = useState(0);
  useEffect(() => {
    console.log("Hello");
  });
  return (
    <>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>click me</button>
    </>
  );
}

// CreateContext();
export const Data = createContext();

function ReactCreateContext() {
  const name = "Lokesh";
  return (
    <>
      <Data.Provider value={name}>
        <CompA />
      </Data.Provider>
    </>
  );
}
// -----------------------------------------//

function App() {
  return (
    <>
      {/* <Counter /> */}
      {/* <ToDo /> */}
      {/* <Meals /> */}
      <Calculator />
    </>
  );
}
export default App;
