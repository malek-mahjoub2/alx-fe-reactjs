import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
  const [username, setUsername] = useState('');
  const [location, setLocation] = useState(''); // Added location state
  const [minRepos, setMinRepos] = useState(''); // Added minimum repositories state
  const [users, setUsers] = useState([]); // Changed user to users for multiple results
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Modify the fetchUserData to search for users by additional criteria
  const fetchUserData = async (username, location, minRepos) => {
    try {
      const query = `${username ? `+in:login ${username}` : ''} ${location ? `+location:${location}` : ''} ${minRepos ? `+repos:>=${minRepos}` : ''}`;
      const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
      return response.data.items; // Return the list of users
    } catch (err) {
      throw new Error('Failed to fetch user data');
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    setUsers([]); // Clear previous results
    setError('');
    setLoading(true);

    try {
      const usersData = await fetchUserData(username, location, minRepos); // Pass parameters
      setUsers(usersData); // Update users state with the returned data
    } catch (err) {
      setError('Looks like we cant find any users');
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
          className="search-input border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
        <input
          type="text"
          placeholder="Location (e.g., San Francisco)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="search-input border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
        <input
          type="number"
          placeholder="Minimum repositories count"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="search-input border rounded px-2 py-1 focus:outline-none focus:ring focus:ring-blue-500 focus:ring-opacity-50"
        />
        <button
          type="submit"
          className="search-button bg-blue-500 text-white rounded px-4 py-2 hover:bg-blue-700"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p className="error-message">{error}</p>}

      {users.length > 0 && (
        <div className="users-list">
          {users.map((user) => (
            <div key={user.id} className="user-info">
              <img src={user.avatar_url} alt={user.login} className="user-avatar" />
              <h2>{user.login}</h2>
              <p>{user.location ? user.location : 'Location not provided'}</p>
              <p>{user.public_repos} Repositories</p>
              <a href={user.html_url} target="_blank" rel="noopener noreferrer">
                View Profile
              </a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
