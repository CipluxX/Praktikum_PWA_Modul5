// src/pages/Login.js

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  // Fetch users on component mount
  useEffect(() => {
    fetch('https://reqres.in/api/users?page=2')
      .then((response) => response.json())
      .then((data) => setUsers(data.data))
      .catch((error) => console.error('Error fetching users:', error));
  }, []);

  // Check if user is already logged in
  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn === 'true') {
      navigate('/movie');
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Simple validation
    if (!firstName || !lastName) {
      setError('Please fill in all fields');
      return;
    }

    // Check if entered credentials match any user from the API
    const user = users.find(
      (user) => user.first_name.toLowerCase() === firstName.toLowerCase() && user.last_name.toLowerCase() === lastName.toLowerCase()
    );

    if (user) {
      // Save login state
      localStorage.setItem('isLoggedIn', 'true');
      // Redirect to movie page
      navigate('/movie');
    } else {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h1 className="login-title">Kelompok 34</h1>
        <p className="login-subtitle">Please login to continue</p>
        
        {error && <div className="error-message">{error}</div>}
        
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="Enter your first name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Enter your last name"
            />
          </div>
          
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
