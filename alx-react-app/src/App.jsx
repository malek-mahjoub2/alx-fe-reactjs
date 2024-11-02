
import React from 'react'
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import MainContent from './MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

const App = () => {
    const userData = {
        name: "Alice",
        age: 25,
        bio: "Loves hiking and photography",
    };
    return (
        <div className="App"> 
            <UserProfile {...userData} />  
            <Header />
            <WelcomeMessage />
            <MainContent />
            <Footer />
        </div>
        
    );
};

export default App;