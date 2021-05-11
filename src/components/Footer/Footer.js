import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
    return (
        <div className="text-center m-5" >
                <div class="container p-2">
                <div>
                <a className="m-2" target="_blank" href="https://github.com/m-mizanurrahman"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="m-2" target="_blank" href="https://www.linkedin.com/in/mizanurrohman/"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>

                </div>
                    <div class="text-center pb-3" >
                        
                    <h6 class="text-white" href=""> © 2021 Copyright Mizanur Rahman</h6>
                    </div>
        </div>

    );
};

export default Footer;