import React, { useState } from 'react';

function Login({ handleLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    // Simple validation
    if (username === 'admin' && password === 'password') {
      handleLogin();
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div>
      <h2>Login Page</h2>
      <form onSubmit={submitHandler}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
