
import React from 'react';
import { UserContext } from './components/UserContext';
import UserProfile from './components/UserProfile';
import UserContext from './components/UserContext';

function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile/>
    </UserContext.Provider>
  );
}

export default App;
