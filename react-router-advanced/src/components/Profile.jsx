import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Define the nested components
const ProfileDetails = () => {
  return (
    <div>
      <h3>Profile Details</h3>
      {/* Add your profile details content here */}
    </div>
  );
};

const ProfileSettings = () => {
  return (
    <div>
      <h3>Profile Settings</h3>
      {/* Add your profile settings content here */}
    </div>
  );
};

const Profile = () => {
  return (
    <div>
      <h2>User Profile</h2>
      <nav>
        <Link to="details">Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>
      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
};

export default Profile;