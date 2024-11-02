
import React from 'react'
import Header from './components/Header';
import WelcomeMessage from './components/WelcomeMessage';
import MainContent from './MainContent';
import Footer from './components/Footer';
import UserProfile from './components/UserProfile';

const App = () => {
    return (
        <div className="App"> 
            <UserProfile 
                name="John Doe" 
                age={30} 
                bio="A software developer based in San Francisco." 
            />
            <Header />
            <WelcomeMessage />
            <MainContent />
            <Footer />
        </div>
        
    );
};

export default App;