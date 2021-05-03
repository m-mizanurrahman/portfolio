import React from 'react';
import mrahman from '../../images/mrahman.png'

const AboutMe = () => {
    return (
        <div className="d-flex text-center m-5 p-5">
            <div className="mx-5">
                <h1>Hello <br/> I am Mizanur Rahman</h1>
                <h3>Junior React Js Developer</h3>
                <button>
                           <a href="https://drive.google.com/uc?export=download&id=1tjF4RjhYgxc_j72IkNOwha6JLX0Vtm0g">Download Resume</a>
                        </button>
            </div>
            <div className="mx-5">
                <img src={mrahman} alt="h"/>
            </div>
            
        </div>
    );
};

export default AboutMe;