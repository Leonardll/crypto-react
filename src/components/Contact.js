/* eslint-disable react/no-unescaped-entities */
import {FaLink, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
//import { AiOutlineTwitter } from 'react-icons/ai';
//import { AiOutlineTwitter } from 'react-icons/ai';

function Contact  () {
    return (
      <section className=" mt-3 contact bg-light footer text-center" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <h4 className="text-uppercase">Location</h4>
                        <p className="lead mb-0">
                            London  
                                                     
                            Barcelona    
                        </p>
                    </div>
                    <div className="col-lg-4 mb-3 mb-lg-0">
                        <h4 className="text-uppercase">Around the Web</h4>                       
                        <a 
                        className="btn btn-outline-primary text-primary btn-social mx-1" 
                        href="https://my-landing-page-52061.web.app/"><FaLink size={30} className="fab fa-fw fa-link"/></a>
                        <a 
                        className="btn btn-outline-primary text-primary btn-social mx-1" 
                        href="https://www.linkedin.com/in/leonardlator44548614b/">                        
                        <FaLinkedin size={30} className="fab fa-fw fa-linkedin-in" /></a>
                        <a 
                        className="btn btn-outline-primary text-primary btn-social mx-1" href="https://github.com/Leonardll">
                        < FaGithub  size={30} className="fab fa-fw fa-dribbble" /></a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase">About Freelancer</h4>
                        <p className="lead mb-0">
                            "Find a work you love and you won't have to work a day in your life"  Confusius         
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;