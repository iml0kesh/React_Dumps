import { useState } from "react"

export function Comp1() {
  let [name, setName] = useState("");
  let [age, setAge] = useState(0);

  return(
    <div>
      <input type="text" name="" id="" onChange={e => setName(e.target.value)}/>
      <br />
      <br />
      <button onClick={() => setAge(currentAge => currentAge + 1)}>+</button>
      {age}
      <button onClick={() => setAge(currentAge => currentAge - 1)}>-</button>
      <br />
      <br />
      my name is {name} and i am {age} years old
    </div>
  )
}