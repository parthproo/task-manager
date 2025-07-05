import React, { useState } from 'react';
import './Login.css';

function Login({ setUsername }) {
  const [username, setLocalUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim()) {
      localStorage.setItem('username', username.trim());
      setUsername(username.trim()); // this updates App state
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="checkmark">✔️</div>
        <h1>Welcome to TaskTracker</h1>
        <p>Your personal productivity companion</p>
        <form onSubmit={handleSubmit}>
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setLocalUsername(e.target.value)}
          />
          <button type="submit">Get Started</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
