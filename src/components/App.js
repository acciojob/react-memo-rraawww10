import React, { useState, useMemo } from "react";
import UseMemoComponent from "./UseMemo";
import ReactMemoComponent from "./ReactMemo";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");

  const addTodo = () => {
    setTodos([...todos, "New todo"]);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const submitTodo = () => {
    if (inputValue.length > 5) {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const memoizedTodos = useMemo(() => todos, [todos]);

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={addTodo}>Add todo</button>
      <button onClick={increment}>Increment</button>
      <p>Count: {count}</p>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter task"
      />
      <button onClick={submitTodo}>Submit</button>
      <UseMemoComponent todos={memoizedTodos} />
      <ReactMemoComponent todos={todos} />
    </div>
  );
};

export default App;
