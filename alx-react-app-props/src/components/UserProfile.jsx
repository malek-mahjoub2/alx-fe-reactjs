import React, { useContext } from 'react';
import UserContext from '../UserContext'; // Import UserContext

function UserProfile() {
  // Use useContext to get the userData from UserContext
  const userData = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;