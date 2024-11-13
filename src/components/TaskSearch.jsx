
import React from 'react';

const TaskSearch = ({ searchTask }) => {
  return (
    <input 
      type="text" 
      onChange={(e) => searchTask(e.target.value)} 
      placeholder="Search tasks..."
    />
  );
};

export default TaskSearch;
