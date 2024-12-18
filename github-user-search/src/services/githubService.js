import axios from 'axios';
export const searchUsers = async (username, location, minRepos) => {
  let query = `q=${username}`;
  if (location) {
    query += `+location:${location}`;
  }
  if (minRepos) {
    query += `+repo:${minRepos}`;
  }

  
  const response = await axios.get(`https://api.github.com/search/users?q=${query}`);
  return response.data.items;
};
export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    throw new Error('Error fetching user data');
  }
  
};
