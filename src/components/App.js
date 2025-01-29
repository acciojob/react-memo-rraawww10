import React, { useState, useEffect, useMemo } from 'react';
import UseMemoComponent from './UseMemoComponent';
import ReactMemoComponent from './ReactMemoComponent';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [counter, setCounter] = useState(0);
  const [newTodo, setNewTodo] = useState('');

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const handleNewTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const addTodo = () => {
    if (newTodo.length > 5) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

  // Calculate expensive calculation using useMemo
  const expensiveCalculation = useMemo(() => {
    console.log('Expensive Calculation'); 
    return todos.length * 1000; 
  }, [todos]); 

  return (
    <div>
      <h1>Todo List</h1>
      <button onClick={incrementCounter}>Increment Counter: {counter}</button>
      <br />
      <input 
        type="text" 
        value={newTodo} 
        onChange={handleNewTodoChange} 
        placeholder="Enter new todo (min 6 characters)" 
      />
      <button onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <h2>UseMemo Component</h2>
      <UseMemoComponent expensiveCalculation={expensiveCalculation} />

      <h2>React.memo Component</h2>
      <ReactMemoComponent todos={todos} /> 
    </div>
  );
};

export default App;
