import React, { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import TaskDashboard from './components/TaskDashboard';

function App() {
  const [username, setUsername] = useState(localStorage.getItem('username') || '');
  const navigate = useNavigate();

  useEffect(() => {
    if (username) {
      navigate('/dashboard');
    } else {
      navigate('/');
    }
  }, [username, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Login setUsername={setUsername} />} />
      <Route path="/dashboard" element={<TaskDashboard setUsername={setUsername} />} />
    </Routes>
  );
}

export default App;
