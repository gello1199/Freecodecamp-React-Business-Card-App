import React from 'react';
import Info from './components/Info';
import About from './components/About';
import Footer from './components/Footer';
import Interests from './components/Interests';

const App = () => {
    return (
        <div>
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    );
}

export default App;

// components for
// info (photo, name, buttons, etc.)
// about
// interests
// footer
