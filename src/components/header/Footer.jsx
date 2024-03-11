import './NavBars.css'
import { useEffect, useState, useContext} from 'react'
import GlobalContext from '../../context/GlobalContext'
import { PiPlanet } from "react-icons/pi";
import { GiCoffin } from "react-icons/gi";
import { GiCrystalize } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function Footer() {

  const {display_body, lateral_navbar, display_header, hide_nav, shrink_body} = useContext(GlobalContext);

  useGSAP(() => {
    if(display_body){
      gsap.from('.footer-container', {
        opacity: 0,
        duration: 2, // Duration of the animation
        ease: 'power2.inOut' // Easing function for smooth animation
      });
    }
  }, [display_body])



if(display_body){
  return (
        <footer className={`${
              (lateral_navbar && display_header && !hide_nav && !shrink_body) ? 'footer-container' :
              (hide_nav && !shrink_body) ? 'footer-container-expand' :
              shrink_body ? 'footer-container-shrink' : null
            }`}>
            <p className="footer-block"><GiCoffin className='footer-icon'/>Porftolio V.0.2</p>
            <p className="footer-block"><span className="footer-light"></span>AVAILABLE FOR FREELANCE WORKS</p>
            <p className="footer-block"><PiPlanet  className='footer-icon'/>BARCELONA, SP.</p>
            <p className="footer-block"><GiCrystalize className='footer-icon'/> ALL RIGHTS RESERVED</p>
        </footer>
    
    )
}
}

export default Footer