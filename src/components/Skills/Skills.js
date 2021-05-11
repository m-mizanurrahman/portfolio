import React from 'react';

const Skills = () => {
    return (
        <div className="m-5">
            <h1 className="text-center mt-5 mb-5 text-white">PROGRAMMING SKILLS</h1>

            <div class="card-group">
                <div class="card m-1">
                    <div class="card-body">
                        <h5 class="card-title">Expertise</h5>
                        <li>React. </li>
                        <li>Javascript </li>
                        <li>HTML, CSS, Bootstrap </li>

                    </div>
                </div>
                <div class="card m-1">
                    <div class="card-body">
                        <h5 class="card-title">Comfortable</h5>
                        <li>Firebase</li>
                        <li>Mongodb, Heroku</li>
                        <li>NodeJS, ExpressJs, Netlify</li>
                    </div>
                </div>

                <div class="card m-1">
                    <div class="card-body">
                        <h5 class="card-title">Tools</h5>
                        <li>Git</li>
                        <li>VSCode</li>
                        <li>Chrome Dev Tool</li>

                    </div>
                </div>


            </div>



            {/* /*********************************** Animated Progress and Skill bar ****************************** */}
            {/* <section className="mh-skills" id="mh-skills">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <div className="mh-skills-inner">
                                <div className="mh-professional-skill">
                                    <h3>Technical Skills</h3>
                                    <div className="each-skills">
                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="name">React</div>
                                                    <div className="percentage-num">86%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={{width:'86%'}}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="name">Java Script</div>
                                                    <div className="percentage-num">76%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={{width:'76%'}}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="name">Bootstrap</div>
                                                    <div className="percentage-num">66%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={{width:'66%'}}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="name">CSS</div>
                                                    <div className="percentage-num">88%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={{width:'88%'}}></div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="candidatos">
                                            <div className="parcial">
                                                <div className="info">
                                                    <div className="name">HTML</div>
                                                    <div className="percentage-num">90%</div>
                                                </div>
                                                <div className="progressBar">
                                                    <div className="percentagem" style={{width:'90%'}}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="col-sm-12 col-md-6">
                            <div className="mh-professional-skills"></div>
                            <h3>Professional Skills</h3>
                            <ul className="mh-professional-progress">
                                <li>
                                    <div className="mh-progress mh-progress-circle" data-progress="95"></div>
                                    <div className="pr-skill-name">Communication</div>
                                </li>
                                <li>
                                    <div className="mh-progress mh-progress-circle" data-progress="55"></div>
                                    <div className="pr-skill-name">Team Work</div>
                                </li>
                                <li>
                                    <div className="mh-progress mh-progress-circle" data-progress="86"></div>
                                    <div className="pr-skill-name">Project Management</div>
                                </li>
                                <li>
                                    <div className="mh-progress mh-progress-circle" data-progress="60"></div>
                                    <div className="pr-skill-name">Creativity</div>
                                </li>


                            </ul>
                        </div>



                    </div>
                </div>
            </section> */}

            {/* <div class="container">
                <h2>Animated Progress Bar</h2>
                <p>The .active class animates the progress bar:</p>
                <div class="progress">
                    <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="40" aria-valuemin="0" aria-valuemax="100" style={{width:'80%'}}>
                        100%
                    </div>
                </div>
            </div> */}


        </div>
    );
};

export default Skills;

{/* <script src="./circle-progress.js"></script> */ }
{/* <script src="https://code.jquery.com/jquery-3.5.1.js"></script> */ }