import React from "react";
import {TodoList} from "./TodoList";
import {Name} from "./Name";

import { TodoListComponent } from "./TodoListComponent";

function App() {
  return (
    <TodoListComponent isComplete={true}>
      Item 1
    </TodoListComponent>  
  )
}

export default App
