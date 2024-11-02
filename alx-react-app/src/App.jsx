import React from 'react';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

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
      <WelcomeMessage />
      <MainContent />
      <Footer />
    </div>
  );
};

export default App;