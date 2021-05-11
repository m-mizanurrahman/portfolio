import React from 'react';
import review from '../../images/project-1/review.png'
import services from '../../images/project-1/services.png'
import banar from '../../images/project-1/banar.png'
import transport from '../../images/project-2/transport.png'
import search from '../../images/project-2/search.png'
import result from '../../images/project-2/result.png'
import home from '../../images/project-3/Home.png'
import member from '../../images/project-3/member.png'
import detail from '../../images/project-3/detail.png'


const Projects = () => {
    return (
        <div className="m-5">
            <div>
                <h1 className="text-center mt-5 mb-5 text-white">PROJECTS</h1>
            </div>
            <div className=" ">
                <div class="card m-2" >
                    <div class="row">
                        <div class="col-md-6">
                            {/* <img src="..." alt="..." /> */}
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class=" carousel-inner">
                                    <div class="carousel carousel-item active">
                                        <img className="" src={review} class="d-block w-40" alt="..." />
                                    </div>
                                    <div class="carousel carousel-item">
                                        <img className="" src={services} class="d-block w-40" alt="..." />
                                    </div>
                                    <div class="carousel carousel-item">
                                        <img className="" src={banar} class="d-block w-40" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Creative It Academy Website | <a target="_blank" href="https://a-assignment-11.web.app/">Live Site</a> | <a target="_blank" href="https://github.com/m-mizanurrahman/creative-it-academy">Client</a> | <a target="_blank" href="https://github.com/m-mizanurrahman/creative-it-academy-server.git">Server</a></h5>
                                {/* <h4>Features:</h4> */}
                                <ul className="">
                                    <li>Users can buy service after signing in by google account </li>
                                    <li>Customers can give dynamic review which are shown in home page </li>
                                    <li>An admin can add and delete services dynamically </li>
                                    <li>Only an admin can add new admin</li>
                                    <li>Payment method is implemented</li>
                                </ul>
                                <h5>Technologies: html, css, js, react, firebase, github, heroku, bootstrap</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="">
                <div class="card m-2" >
                    <div class="row">
                        <div class="col-md-6">
                            {/* <img src="..." alt="..." /> */}
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class=" carousel-inner">
                                    <div class="carousel carousel-item active">
                                        <img className="" src={transport} class="d-block w-40" alt="..." />
                                    </div>
                                    <div class="carousel carousel-item">
                                        <img className="" src={search} class="d-block w-40" alt="..." />
                                    </div>
                                    <div class="carousel carousel-item">
                                        <img className="" src={result} class="d-block w-40" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Transport Luxury Website | <a target="_blank" href="https://react-auth-77304.web.app/">Live Site</a> | <a target="_blank" href="https://github.com/m-mizanurrahman/luxury-transport">Client</a> | </h5>
                                {/* <h4>Features:</h4> */}
                                <ul className="">
                                    <li>In Home page you see different types of transport</li>
                                    <li>Customers can find specific transport after login</li>
                                    <li>User can find different option for each transport with respect to cost </li>
                                    <li>Google Map is Visible</li>
                                </ul>
                                <h5>Technologies: html, css, js, react, netlify, github, bootstrap</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="">
                <div class="card m-2" >
                    <div class="row">
                        <div class="col-md-6">
                            {/* <img src="..." alt="..." /> */}
                            <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-indicators">
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                </div>
                                <div class=" carousel-inner">
                                    <div class="carousel carousel-item active">
                                        <img className="" src={home} class="d-block w-40" alt="..." />
                                    </div>
                                    <div class="carousel carousel-item">
                                        <img className="" src={member} class="d-block w-40" alt="..." />
                                    </div>
                                    <div class="carousel carousel-item">
                                        <img className="" src={detail} class="d-block w-40" alt="..." />
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card-body">
                                <h5 class="card-title">Sports World Website | <a target="_blank" href="https://loving-ride-9170c7.netlify.app/">Live Site</a> | <a target="_blank" href="https://github.com/m-mizanurrahman/sports-world">Client</a> | </h5>
                                {/* <h4>Features:</h4> */}
                                <ul className="">
                                    <li>In Home page you see different teams</li>
                                    <li>Customers can find details of a league</li>
                                    <li>Icon and banner are shown in detail page</li>
                                </ul>
                                <h5>Technologies: html, css, js, react, netlify, github,  bootstrap</h5>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;