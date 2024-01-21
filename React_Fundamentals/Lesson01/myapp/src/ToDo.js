import { useState } from "react";

const ToDo = () => {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const generateId = () => {
    return Math.floor(Math.random() * 10);
  };

  const handleSubmit = () => {
    setTodos((todos) =>
      todos.concat({
        text: input,
        id: generateId(),
      })
    );
    setInput("");
  };

  const removeTodo = (id) => {
    setTodos((todos) => todos.filter((t) => t.id !== id));
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="New ToDo"
        />

        <button onClick={handleSubmit}>Submit</button>
      </div>

      <ul>
        {todos.map(({ text, id }) => {
          return (
            <li key={id}>
              <span>{text}</span>
              <span>
                <button onClick={() => removeTodo(id)}>X</button>
              </span>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ToDo;
