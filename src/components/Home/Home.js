import React from 'react';
import Header from '../Header/Header';
import Projects from "../Projects/Projects";
import Blogs from "../Blogs/Blogs";
import Contact from "../Contact/Contact";
import Skills from "../Skills/Skills";
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <div id="home" className="">
            {/* <h1>Home page</h1> */}
            <Header />
            <Projects />
            <Skills />
            <Blogs />
            <Contact />
            <Footer/>

        </div>
    );
};

export default Home;