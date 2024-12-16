import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchUserData = async (username) => {
    try {
      const response = await axios.get(`https://api.github.com/users/${username}`);
      return response.data;
    } catch (err) {
      throw new Error('Failed to fetch user data');
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    setUser(null);
    setError('');
    setLoading(true);

    try {
      const userData = await fetchUserData(username);
      setUser(userData);
    } catch (err) {
      setError('Looks like we cant find the user');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Enter GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {user && (
        <div className="user-info">
          <img src={user.avatar_url} alt={user.login} className="user-avatar" />
          <h2>{user.name}</h2>
          <p>{user.bio}</p>
          <a href={user.html_url} target="_blank" rel="noopener noreferrer">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default Search;