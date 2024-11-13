

import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [taskTitle, setTaskTitle] = useState('');
  const [priority, setPriority] = useState('Medium');

  const handleAddTask = () => {
    if (taskTitle.trim()) {
      addTask({ title: taskTitle, priority, completed: false });
      setTaskTitle('');
    }
  };

  return (
    <div>
      <input 
        type="text" 
        value={taskTitle} 
        onChange={(e) => setTaskTitle(e.target.value)} 
        placeholder="Add a new task"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default TaskInput;
