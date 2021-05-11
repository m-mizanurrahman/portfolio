import React from 'react';
import Typed from "react-typed";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 


const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>Hello, I Am Mizanur Rahman</h1>
                <Typed
                    className="typed-text"
                    strings={["Junior React Js Developer", "Junior Full-Stack Developer", "Junior Front-End Developer", "Junior Back-End Developer"]}
                    typeSpeed={40}
                    backSpeed={60}
                    loop
                />
                <a href="https://drive.google.com/uc?export=download&id=1JXb1FHaKsks_HoabEnD6814HL1M_m3uh" className="btn-main-offer">Download Resume</a>
                <div>
                <a className="m-2" target="_blank" href="https://github.com/m-mizanurrahman"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="m-2" target="_blank" href="https://www.linkedin.com/in/mizanurrohman/"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
            </div>
            
        </div>
    );
};

export default Header;