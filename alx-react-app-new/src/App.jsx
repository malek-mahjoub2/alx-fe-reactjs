
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
const App = () => {
  const userData = {
    name: 'John Doe',
    age: 30,
    bio: 'A software developer based in San Francisco.',
  };

  return (
    <div className="App">
        <h1>Welcome to the Counter App</h1>
        <Counter />
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