import React from 'react';
import mrahman from '../../images/mrahman.png'

const AboutMe = () => {
    return (
        // <div className="container m-5">
        //     <div className="row">
        //         <div className="col">
        //             <h3 className="mb-3">Work Experience</h3>
        //             <h4>Creative </h4>
        //             <div><strong>2021-Current</strong></div>
        //             Frond end and back end Developer doing a number of projects using HTML, CSS, JavaScript, React.
        //             <ul className="list-group list-group-flush">
        //                 <li>Developing Web Apps</li>
        //                 <li>Developing Web Apps</li>
        //                 <li>Developing Web Apps</li>
        //             </ul>
        //         </div>
        //         <div className="col">
        //             <h3 className="mb-3"> Skills</h3>
        //         </div>
        //     </div>
        // </div>
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