import { FaFacebook, FaLinkedin, FaGithub } from 'react-icons/fa';
import { AiOutlineTwitter } from 'react-icons/ai';
//import { AiOutlineTwitter } from 'react-icons/ai';
//import { AiOutlineTwitter } from 'react-icons/ai';

function Contact  () {
    return (
      <section className=" bg-light m-5 footer text-center" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            
                            Clark, MO 65243
                        </p>
                    </div>
                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a 
                        className="btn btn-outline-primary text-primary btn-social mx-1" href="#!">
                        < FaFacebook size={30} className="fab fa-fw fa-facebook-f" /></a>
                        <a 
                        className="btn btn-outline-primary text-primary btn-social mx-1" 
                        href="#!"><AiOutlineTwitter size={30} className="fab fa-fw fa-twitter"/></a>
                        <a 
                        className="btn btn-outline-primary text-primary btn-social mx-1" 
                        href="#!">                        
                        <FaLinkedin size={30} className="fab fa-fw fa-linkedin-in" /></a>
                        <a 
                        className="btn btn-outline-primary text-primary btn-social mx-1" href="#!">
                        < FaGithub  size={30} className="fab fa-fw fa-dribbble" /></a>
                    </div>
                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by
                            <a href="http://startbootstrap.com">Start Bootstrap</a>                            
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;