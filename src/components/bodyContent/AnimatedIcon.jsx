import { GiPentarrowsTornado } from "react-icons/gi";
import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/about/About.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function AnimatedIcon() {
     const {display_body} = useContext(GlobalContext);

    useGSAP(() => {

        const anim = gsap.to('.animated-icon',{
            rotation: '360deg', // Rotate the icon 360 degrees clockwise
            duration: 1, // Duration of the animation in seconds
            scrollTrigger: {
                trigger: '.animated-icon',
                start: 'top 85%', // Start the animation when the top of the trigger hits the bottom of the viewport
                end: 'bottom top', // End the animation when the bottom of the trigger hits the top of the viewport
                toggleActions: 'restart pause resume reset',
                scrub: true,
            }
            });

        }, [display_body]);

        

    

    return (

       <GiPentarrowsTornado size={25} className="animated-icon"/>
    );
}

export default AnimatedIcon;