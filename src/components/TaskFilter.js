import React from 'react';
import './TaskFilter.css';

function TaskFilter({ filter, setFilter, tasks }) {
  const count = {
    all: tasks.length,
    pending: tasks.filter(task => !task.completed).length,
    completed: tasks.filter(task => task.completed).length
  };

  return (
    <div className="task-filter">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => setFilter('all')}
      >
        All Tasks <span>{count.all}</span>
      </button>
      <button
        className={filter === 'pending' ? 'active' : ''}
        onClick={() => setFilter('pending')}
      >
        Pending <span>{count.pending}</span>
      </button>
      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => setFilter('completed')}
      >
        Completed <span>{count.completed}</span>
      </button>
    </div>
  );
}

export default TaskFilter;
