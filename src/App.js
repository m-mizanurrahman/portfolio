import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Particles from "react-particles-js";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import AboutMe from "./components/AboutMe/AboutMe";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Projects from "./components/Projects/Projects";
import Blogs from "./components/Blogs/Blogs";
import Contact from "./components/Contact/Contact";
import Skills from "./components/Skills/Skills";

function App() {
  return (
    <Router>
      <Navbar />
      <Particles
        className="particles-canvas"
        params={{
          particles: {
            number: {
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            },
            shape: {
              type: "star",
              stroke: {
                width: 6,
                color: "#f9ab00"

              }
            }
          }
        }}
      />

      {/* <Header /> */}
      
      <Switch>
        <Route path="/about">
          <AboutMe />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/blogs">
          <Blogs />
        </Route>
        <Route path="/skills">
          <Skills />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>





    </Router>
  );
}

export default App;
