import './Contact.css'
import useBodyAnimation from '../../hooks/useBodyAnimation'; // Import your custom hook

import GlobalContext from '../../context/GlobalContext'
import {  useContext, useRef } from 'react'
import { useLocation,   useNavigate } from 'react-router-dom';





function Contact() {

    const {dispatch, navbar_location} = useContext(GlobalContext);
    

    // Get the current location from React Router
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname.substring(1); // Removes the leading slash
    // add ref to the body
    const bodyRef = useRef(null);

    useBodyAnimation(bodyRef, navbar_location, pathname, navigate);
    

  return (
      <div ref={bodyRef} className="body-container">
        {/* <ButtonsBody data={data}/> */}
        {/* <div className="contact-container">
            
            <h3 className="contact-title">CONTACT</h3>
            <div className="contact-socials-container">
                <div className="mail-container"> 
                    <span className="title">Mail</span>
                    <a
                        target="_blank"
                        className="mail-effect"
                        href="mailto:luque.nicolas1994@gmail.com"
                    >
                      <FaArrowUpLong className="mail-effect-arrow"/>  luque.nicolas1994@gmail.com
                    </a>
                </div>
                <div className="mail-container"> 
                    <span className="title">Github</span>
                    <a
                        className="mail-effect"
                        target="_blank"
                        href="https://github.com/Nicolas17ES?tab=repositories"
                    >
                       <FaArrowUpLong className="mail-effect-arrow"/>  Nicolas17
                    </a>
                </div>
                <div className="mail-container">
                    <span className="title">Instagram</span>
                    <a
                        className="mail-effect"
                        target="_blank"
                        href=""
                    >
                        <FaArrowUpLong className="mail-effect-arrow"/>  BlaBlablublu
                    </a>
                </div>

            </div>
        </div> */}
         
      </div>
  );
}

export default Contact;