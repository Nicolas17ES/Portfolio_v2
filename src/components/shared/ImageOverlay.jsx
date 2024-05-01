import GlobalContext from '../../context/GlobalContext'
import { useContext } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);


function ImageOverlay() {
    // Accessing global context values
    const { display_image_overlay } = useContext(GlobalContext);
  
  useGSAP(() => {
    if(display_image_overlay){
        const tlx = gsap.timeline();
        tlx.from('.image-overlay-top', {
            left: '-100%', // Move the overlay to the final position (0) on the x-axis
            width: "100%",
            duration: 1, // Duration of the animation
            ease: 'Expo.easeInOut', // Easing function for smooth animation
        }, "<");
        tlx.to('.image-overlay-top', {
            left: '0%', // Move the overlay to the final position (0) on the x-axis
            width: "100%",
            duration: 1, // Duration of the animation
            ease: 'Expo.easeInOut', // Easing function for smooth animation
        }, "<1");
    }
  }, [display_image_overlay]);


  useGSAP(() => {
    if(display_image_overlay){
        const tlx = gsap.timeline();
        tlx.from('.image-overlay-bottom', {
            left: '100%', // Move the overlay to the final position (0) on the x-axis
            width: "100%",
            duration: 1, // Duration of the animation
            ease: 'Expo.easeInOut', // Easing function for smooth animation
        }, "<");
        tlx.to('.image-overlay-bottom', {
            left: '0%', // Move the overlay to the final position (0) on the x-axis
            width: "100%",
            duration: 1, // Duration of the animation
            ease: 'Expo.easeInOut', // Easing function for smooth animation
        }, "<1");
    }
  }, [display_image_overlay]);
    
    

    if(display_image_overlay){
        return (
            <div className="carousel-image-overlay-container">
                <div className="carousel-image-overlay image-overlay-top">
                </div>
                <div className="carousel-image-overlay image-overlay-bottom">
                </div>
            </div>
        );
    }
}

export default ImageOverlay;