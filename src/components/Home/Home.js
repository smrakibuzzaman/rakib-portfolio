import React from 'react';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Introduction from '../Introduction/Introduction';
import Projects from '../Projects/Projects';
import Resume from '../Resume/Resume';

const Home = () => {
    return (
        <div id="home" >
            <Introduction/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
};

export default Home;