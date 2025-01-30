import React, { useState, useEffect } from 'react';
import UseMemo from './UseMemo';
import ReactMemo from './ReactMemo';

function App() {
  const [tasks, setTasks] = useState([]);
  const [counter, setCounter] = useState(0);
  const [customTask, setCustomTask] = useState('');

  const handleAddTodo = () => {
    setTasks([...tasks, 'New todo']);
  };

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleInputChange = (e) => {
    setCustomTask(e.target.value);
  };

  const handleSubmit = () => {
    if (customTask.length > 5) {
      setTasks([...tasks, customTask]);
      setCustomTask('');
    } else {
      alert('Task must have more than 5 characters.');
    }
  };

  return (
    <div>
      <button onClick={handleAddTodo}>Add todo</button>
      <button onClick={handleIncrement}>Increment</button>
      <input
        type="text"
        value={customTask}
        onChange={handleInputChange}
        placeholder="Enter custom task"
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>
        <h3>Tasks:</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </div>
      <h4>Counter: {counter}</h4>
      <UseMemo tasks={tasks} />
      <ReactMemo tasks={tasks} />
    </div>
  );
}

export default App;
