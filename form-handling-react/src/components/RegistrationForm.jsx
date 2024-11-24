import React, { useState } from 'react';

const RegistrationForm = () => {
  // Define state for form inputs
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic form validation
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }

    setError('');
    // Proceed with form submission (for example, send data to an API)
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
            value={username}  // Controlled input
            onChange={(e) => setUsername(e.target.value)}  // Update state on change
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}  // Controlled input
            onChange={(e) => setEmail(e.target.value)}  // Update state on change
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}  // Controlled input
            onChange={(e) => setPassword(e.target.value)}  // Update state on change
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
