import React, { useState } from 'react';
import './LogIn.css';
// import { useNavigate } from 'react-router-dom';

export default function LogIn({login}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
//   const navigate = useNavigate();
  const users =[
    {
        username: "chat@gmail.com",
        password: "chat@1234"
    },
    {
        username: "ai@gmail.com",
        password: "12345678"
    },
    {
        username: "page@gmail.com",
        password: "page123456"
    },
    {
        username: "ken@gmail.com",
        password: "kenError123"
    }
  ]
  function getUser(username){
    for(const user of users){
        if(user.username === username){
            return user;
        }
    }
    return null;

  }

  const handleLogin = (e) => {
    e.preventDefault();

    if (password.length < 8 || password.length > 12) {
      setPassword('');
      setError('Password must be between 8 and 12 characters long.');
      return;
    }
    const user = getUser(username)
    if(user){
        if(user.password === password){
            login(username);
            setError('');

        }else{
            setError("incorrect password")
        }
    }else{
        setError("user not found")
    }
    
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Login-ChatAi</h1>
      {error && <div className="error">{error}</div>}
      <div>
        <input
          type="email"
          placeholder="Username/Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div className="password-input-container">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="button"
            className={`show-password-button ${showPassword ? 'show' : ''}`}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
}
