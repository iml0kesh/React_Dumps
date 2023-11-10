import user from "./user.json";
import "./user.css";
import { UserCardComponent } from "./UserCardComponent";
function App() {
  return (
    <>
      <UserCardComponent name={user.name} phoneNumber={user.phoneNumber} age={user.age} address={user.address}/>
    </>
  )
}

export default App
