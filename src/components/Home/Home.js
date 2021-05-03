import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Contact from '../Contact/Contact';
import Navbar from '../Navbar/Navbar';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
            <AboutMe></AboutMe>
            <Skills></Skills>
            <Projects></Projects><br/>
            <Contact></Contact>
        </div>
    );
};

export default Home;