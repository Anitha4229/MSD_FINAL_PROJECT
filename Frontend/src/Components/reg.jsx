import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../assets/styles.css';

const Register = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhoneno] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setErrorMessage('Passwords do not match.');
      return;
    }

    const userData = { name, email, phoneno, password };

    try {
      const response = await fetch('https://msd-final-project-1.onrender.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registration Successful! Redirecting to login page...');
        navigate('/login');
      } else {
        setErrorMessage(data.message || 'Registration failed. Please try again.');
      }
    } catch (error) {
      setErrorMessage('Error: ' + error.message);
    }
  };

  

  return (
    <div className="container">
      <h2>Create Account</h2>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input type="text" value={phoneno} onChange={(e) => setPhoneno(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Confirm Password:</label>
          <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
        </div>
        <button type="submit">Register</button>
        {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      </form>
    </div>
  );
};

export default Register;
