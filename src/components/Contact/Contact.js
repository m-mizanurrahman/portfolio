import React from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Footer from '../Footer/Footer';


export default function ContactUs() {

    function sendEmail(e) {
        e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

        emailjs.sendForm('gmail', 'template_2luv54x', e.target, 'user_Fo9OEmo7nDQXD47lM2XXq')
            .then((result) => {
                window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (
        <div>
            <div className="m-5 row text-center" >
                <h1 className="text-white mt-5 mb-5">CONTACT ME</h1>


                <div className="">
                    <form className="contact-form" onSubmit={sendEmail}>
                        <div class="mb-1">
                            {/* <label></label> */}
                            <input type="text" placeholder="Name" class="form-control" name="from_name" />
                        </div>
                        <div class="mb-1">
                            {/* <label>Email</label> */}
                            <input type="email" placeholder="Email" class="form-control" name="from_email" />
                        </div>
                        <div class="mb-1">
                            {/* <label>Subject</label> */}
                            <input type="text" placeholder="Subject" class="form-control" name="subject" />
                        </div>
                        <div class="mb-1">
                            {/* <label>Message</label> */}
                            <textarea placeholder="Message" class="form-control" name="html_message" />
                        </div>

                        <button type="submit" class="btn btn-primary ">Submit</button>
                    </form>
                </div>
            </div>
            <div>
            {/* <div>
                <a className="m-2" target="_blank" href="https://github.com/m-mizanurrahman"><FontAwesomeIcon icon={faGithub} /></a>
                <a className="m-2" target="_blank" href="https://www.linkedin.com/in/mizanurrohman/"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div> */}
            </div>
            {/* <div>
                <Footer/>
            </div> */}
        </div>


    );
}