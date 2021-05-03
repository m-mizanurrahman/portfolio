import React from 'react';
import { Link } from 'react-router-dom';
// import logo from '../../../images/icon.png'


const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-light ">
            <div class="container-fluid">
                <a class="navbar-brand logo" href="#">
                    <img style={{ height: '50px' }} src="" alt="" />
                    <h6>Mizanur</h6>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li className="nav-item active">
                            <Link className="nav-link mr-5" to="/">Home</Link>
                        </li>
                        <li>
                            <a target="_blank" href="https://medium.com/reactjslover">blog</a><br/>
                        </li>
                        {/* <li>
                            <Link className="nav-link mr-5" to="../../../public/files/Rahman_Mizanur_Resume_2021.pdf" target="_blank" download>Download</Link>
                        </li> */}
                        


                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;