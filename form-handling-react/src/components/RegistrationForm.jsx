import React, { useState } from 'react';

const RegistrationForm = () => {
  // State for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  // State to track errors
  const [errors, setErrors] = useState({
    username: '',
    email: '',
    password: ''
  });

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Clear previous errors
    setErrors({
      username: '',
      email: '',
      password: ''
    });

    // Basic validation for all fields
    let formIsValid = true;
    let newErrors = {};

    // Username validation
    if (!username) {
      formIsValid = false;
      newErrors.username = 'Username is required';
    }

    // Email validation
    if (!email) {
      formIsValid = false;
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      formIsValid = false;
      newErrors.email = 'Email is invalid';
    }

    // Password validation
    if (!password) {
      formIsValid = false;
      newErrors.password = 'Password is required';
    } else if (password.length < 6) {
      formIsValid = false;
      newErrors.password = 'Password must be at least 6 characters';
    }

    if (!formIsValid) {
      setErrors(newErrors);
      return;  // If form is invalid, stop here and show errors
    }

    // Proceed with form submission (API call or whatever you need)
    console.log('Form submitted:', { username, email, password });
  };

  return (
    <div>
      <h1>Registration Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {errors.username && <p style={{ color: 'red' }}>{errors.username}</p>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
        </div>

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
