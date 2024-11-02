
import React from 'react';
import ReactDOM from 'react-dom/client';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
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