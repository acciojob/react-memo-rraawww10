import React, { useState, useEffect, useMemo } from 'react';
import UseMemoComponent from './UseMemoComponent';
import ReactMemoComponent from './ReactMemoComponent';

const App = () => {
  // ... existing code ...

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
