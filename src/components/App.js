import React, { useState, useMemo } from "react";
import UseMemoComponent from "./UseMemoComponent";
import ReactMemoComponent from "./ReactMemoComponent";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [skills, setSkills] = useState([]);

  const addTodo = () => {
    setTodos((prevTodos) => [...prevTodos, "New todo"]);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const submitTodo = () => {
    if (inputValue.length > 5) {
      setTodos((prevTodos) => [...prevTodos, inputValue]);
      setInputValue("");
    }
  };

  const addSkill = () => {
    if (inputValue.length > 5) {
      setSkills((prevSkills) => [...prevSkills, inputValue]);
      setInputValue("");
    }
  };

  const memoizedTodos = useMemo(() => todos, [todos]);

  return (
    <div>
      <h1>Todo List</h1>
      
      <h2>React.useMemo</h2>
      <h3>My todos</h3>
      <ul id="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
      <button id="add-todo" onClick={addTodo}>Add Todo</button>

      <p>
        Count: <span id="count">{count}</span>
        <button id="increment" onClick={increment}>+</button>
      </p>

      <h3>Expensive Calculation</h3>
      <UseMemoComponent todos={memoizedTodos} />

      <h2>React.memo</h2>
      <input
        id="task-input"
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter task"
      />
      <button id="submit-todo" onClick={submitTodo}>Submit</button>
      <button id="add-skill" onClick={addSkill}>Add Skill</button>

      <ul id="skills-list">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>

      <ReactMemoComponent skills={skills} />
    </div>
  );
};

export default App;
