

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TaskList = ({ tasks, deleteTask, toggleComplete }) => {
  return (
    <ul>
      <AnimatePresence>
        {tasks.map((task, index) => (
          <motion.li
            key={index}
            initial={{ opacity: 0, y: -20 }}  
            animate={{ opacity: 1, y: 0 }}    
            exit={{ opacity: 0, y: 20 }}      
            transition={{ duration: 0.3 }}    
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            {task.title} - {task.priority}
            <button onClick={() => toggleComplete(index)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default TaskList;
