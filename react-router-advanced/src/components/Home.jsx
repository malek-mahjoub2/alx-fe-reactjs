import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>Welcome to the React Router App</h1>
      <button onClick={() => setIsAuthenticated(!isAuthenticated)}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Home;
