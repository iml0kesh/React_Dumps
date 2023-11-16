import { useEffect, useState } from "react"

function App() {
  const [age, setAge] = useState(0);
  
  useEffect(() => {
    console.log("Age Changed to", age);
  },[age])

  return (
    <div>
      <button onClick={() => setAge(currentAge => currentAge + 1)}>+</button>
      {age}
      <button onClick={() => setAge(currentAge => currentAge - 1)}>-</button>
    </div>
  )
}

export default App
