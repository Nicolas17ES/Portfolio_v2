import './NavBars.css'
import {  useContext} from 'react'
import GlobalContext from '../../context/GlobalContext'
import { PiPlanet } from "react-icons/pi";
import { GiCoffin } from "react-icons/gi";
import { GiCrystalize } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function Footer() {

  const {display_body, lateral_navbar, display_header, hide_nav, shrink_body, navbar_location, boxes_animations_finsished, screenWidth, display_footer} = useContext(GlobalContext);


  useGSAP(() => {
    if(!display_footer){
      gsap.to('.footer-container', {
        opacity: 0,
        duration: 2, // Duration of the animation
        ease: 'power2.inOut' // Easing function for smooth animation
      });
    } else {
      gsap.to('.footer-container', {
        opacity: 1,
        delay: .5,
        duration: 2, // Duration of the animation
        ease: 'power2.inOut' // Easing function for smooth animation
      });
    }
  }, [display_footer])

  console.log('footer', display_footer)

if(!display_footer) return null;


if(display_body){
  return (
        <footer className={`${
              (lateral_navbar && display_header && !hide_nav && !shrink_body) ? 'footer-container' :
              (hide_nav && !shrink_body) ? 'footer-container-expand' :
              shrink_body ? 'footer-container-shrink' : null
            }`}>
            <p className="footer-block"><GiCoffin className='footer-icon'/>Porftolio V.0.2</p>
            <p className="footer-block"><span className="footer-light"></span>{screenWidth >= 600 ? 'AVAILABLE 4 FREELANCE WORKS' : 'AVAILABLE'}</p>
            <p className="footer-block"><PiPlanet  className='footer-icon'/>BARCELONA, SP.</p>
            <p className="footer-block"><GiCrystalize className='footer-icon'/> ALL RIGHTS RSRVD</p>
        </footer>
    
    )
}
}

export default Footer