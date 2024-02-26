import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import SplitTextJS from "split-text-js";
gsap.registerPlugin(ScrollTrigger);


function ScreenOverlay() {
    // Accessing global context values
    const { display_overlay } = useContext(GlobalContext);
  
  useGSAP(() => {
    if(display_overlay === 1){
        const tlx = gsap.timeline();
        tlx.from('.overlay-top', {
            left: '-100%', // Move the overlay to the final position (0) on the x-axis
            width: "100%",
            duration: 1, // Duration of the animation
            ease: 'Expo.easeInOut', // Easing function for smooth animation
        }, "<");
        tlx.to('.overlay-top', {
            left: '0%', // Move the overlay to the final position (0) on the x-axis
            width: "100%",
            duration: 1, // Duration of the animation
            ease: 'Expo.easeInOut', // Easing function for smooth animation
        }, "<1");
    } else if (display_overlay === 0) {
        const tlx = gsap.timeline();
        tlx.from('.overlay-top', {
            left: '0%',
            width: '100%',
            duration: 0,
            ease: 'Expo.easeInOut',
        });
        tlx.to('.overlay-top', {
            left: '100%',
            width: '100%',
            duration: 1,
            ease: 'Expo.easeInOut',
        }, '+=0');
    }
  }, [display_overlay]);


  useGSAP(() => {
    if(display_overlay === 1){
        const tlx = gsap.timeline();
        tlx.from('.overlay-bottom', {
            left: '100%', // Move the overlay to the final position (0) on the x-axis
            width: "100%",
            duration: 1, // Duration of the animation
            ease: 'Expo.easeInOut', // Easing function for smooth animation
        }, "<");
        tlx.to('.overlay-bottom', {
            left: '0%', // Move the overlay to the final position (0) on the x-axis
            width: "100%",
            duration: 1, // Duration of the animation
            ease: 'Expo.easeInOut', // Easing function for smooth animation
        }, "<1");
    } else if (display_overlay === 0) {
        const tlx = gsap.timeline();
        tlx.from('.overlay-bottom', {
            left: '0%',
            width: '100%',
            duration: 0,
            ease: 'Expo.easeInOut',
        });
        tlx.to('.overlay-bottom', {
            left: '-100%',
            width: '100%',
            duration: 1,
            ease: 'Expo.easeInOut',
        }, '+=0');
    }
  }, [display_overlay]);
    
    

    if(display_overlay === 1 || display_overlay === 0){
        return (
            <div className="screen-overlay-container">
                <div className="screen-overlay overlay-top">
                </div>
                <div className="screen-overlay overlay-bottom">
                </div>
            </div>
        );
    }
}

export default ScreenOverlay;