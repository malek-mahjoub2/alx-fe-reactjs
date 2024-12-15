import React, { useState } from "react";
import axios from "axios";

const Search = () => {
  // State to manage the search query, user data, and API call status
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Function to handle form submission
  const handleSearch = async (e) => {
    e.preventDefault();

    // Clear previous data and reset error
    setUser(null);
    setError("");
    setLoading(true);

    try {
      // Make an API call to GitHub API to search for the user
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUser(response.data); // Set user data if the user is found
    } catch (err) {
      // If an error occurs (e.g., user not found), show the error message
      setError("Looks like we can't find the user");
    } finally {
      setLoading(false); // Stop the loading state
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

      {/* Display loading message */}
      {loading && <p>Loading...</p>}

      {/* Display error message if there's an issue */}
      {error && <p className="error-message">{error}</p>}

      {/* Display user data if found */}
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
