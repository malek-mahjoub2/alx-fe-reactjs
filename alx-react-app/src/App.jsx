
import React from 'react';
import Header from './Header';
import WelcomeMessage from './components/WelcomeMessage';
import MainContent from './MainContent';
import Footer from './Footer';
import ReactDOM from 'react-dom/client';

const App = () => {
    return (
        <div className="App">   
            <Header />
            <WelcomeMessage />
            <MainContent />
            <Footer />
        </div>
        
    );
};

export default App;