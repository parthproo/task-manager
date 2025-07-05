import React from 'react';
import './TaskItem.css';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-main">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
        />
        <div className="task-details">
          <h4>{task.title}</h4>
          {task.description && <p>{task.description}</p>}
          <span>{new Date(task.createdAt).toLocaleString()}</span>
        </div>
      </div>
      <button className="delete-btn" onClick={() => onDelete(task.id)}>🗑️</button>
    </div>
  );
}

export default TaskItem;
