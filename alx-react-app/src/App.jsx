import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';

const App = () => {
  const userData = {
    name: 'John Doe',
    age: 30,
    bio: 'A software developer based in San Francisco.',
  };

  return (
    <div className="App">
        <UserProfile
            name="Alice"
            age={25}
            bio="Loves hiking and photography"
        />
      <Header />
      
      <MainContent />
      <Footer />
      <WelcomeMessage />
      <Footer />
    </div>
  );
};

export default App;