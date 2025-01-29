import React, { useState, useMemo } from "react";
import UseMemoComponent from "./UseMemoComponent";
import ReactMemoComponent from "./ReactMemoComponent";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState([]);

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

  const addSkill = () => {
    if (inputValue.length > 0) {
      setSkills([...skills, inputValue]);
      setInputValue("");
    }
  };

  const memoizedTodos = useMemo(() => todos, [todos]);

  return (
    <div>
      <h1>Todo List</h1>
      <button id="add-todo" onClick={addTodo}>Add todo</button>
      <button id="increment" onClick={increment}>Increment</button>
      <p id="count">Count: {count}</p>
      <input
        id="task-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter task"
      />
      <button id="submit-todo" onClick={submitTodo}>Submit</button>
      <button id="add-skill" onClick={addSkill}>Add Skill</button>
      <UseMemoComponent todos={memoizedTodos} />
      <ReactMemoComponent todos={todos} />
    </div>
  );
};

export default App;
