import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTasksFromStorage, saveTasksToStorage } from '../utils/localStorage';
import './TaskDashboard.css';
import TaskFilter from './TaskFilter';
import TaskForm from './TaskForm';
import TaskItem from './TaskItem';

function TaskDashboard({ setUsername }) {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  const username = localStorage.getItem('username');

  useEffect(() => {
    const storedTasks = getTasksFromStorage();
    setTasks(storedTasks);
  }, []);

  const handleAddTask = (newTask) => {
    const updated = [newTask, ...tasks];
    setTasks(updated);
    saveTasksToStorage(updated);
  };

  const handleToggle = (id) => {
    const updated = tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updated);
    saveTasksToStorage(updated);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      const updated = tasks.filter(task => task.id !== id);
      setTasks(updated);
      saveTasksToStorage(updated);
    }
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  const handleLogout = () => {
    localStorage.removeItem('username');
    setUsername('');
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Welcome back, {username}! 👋</h2>
        <p>Let's get things done today</p>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      <TaskForm onAddTask={handleAddTask} />
      <TaskFilter filter={filter} setFilter={setFilter} tasks={tasks} />

      <div className="task-list">
        {filteredTasks.length > 0 ? (
          filteredTasks.map(task => (
            <TaskItem
              key={task.id}
              task={task}
              onToggle={handleToggle}
              onDelete={handleDelete}
            />
          ))
        ) : (
          <div className="no-tasks">
            <p>📝</p>
            <h4>No tasks found</h4>
            <p>Add your first task to get started!</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default TaskDashboard;
