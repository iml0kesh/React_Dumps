import { useState } from "react";


let INITIAL_VALUE = ["A", "B", "C"];

function App() {
  
  const [array, setArray] = useState(INITIAL_VALUE)

  function removeFirstElement() {
    setArray(currentArray => {
      return currentArray.slice(1)
    })
  }

  function removeSpecificLetter(letter) {
    setArray(currentArray => {
      return currentArray.filter(element => element !== letter)
    })
  }

  function addLetterToStart(letter) {
    setArray(currentArray => {
      return [letter, ...currentArray];
    })
  }

  function addLetterToEnd(letter) {
    setArray(currentArray => {
      return [...currentArray, letter]
    })
  }

  function clear() {
    setArray([])
  }

  function reset() {
    setArray(INITIAL_VALUE)
  }

  return (
    <>
      <button onClick={removeFirstElement}>Remove First Element</button>
      <br />
      <button onClick={() => removeSpecificLetter("B")}>Remove Specific Letter</button>
      <br />
      <button onClick={() => addLetterToStart("B")}>Add Letter Start</button>
      <br />
      <button onClick={() => addLetterToEnd("B")}>Add Letter End</button>
      <br />
      <button onClick={clear}>Clear</button>
      <br />
      <button onClick={reset}>Reset</button>
      {array.join(", ")}

    </>
  )
}

export default App;
