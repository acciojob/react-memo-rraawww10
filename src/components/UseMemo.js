import React, { useMemo } from 'react';

function UseMemo({ tasks }) {
  const memoizedTasks = useMemo(() => {
    return tasks.filter((task) => task.includes('todo'));
  }, [tasks]);

  return (
    <div>
      <h3>Memoized Tasks:</h3>
      <ul>
        {memoizedTasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}

export default UseMemo;
