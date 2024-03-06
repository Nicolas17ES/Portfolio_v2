import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/about/About.css'
import Image from '../../images/ChocoXAfter.jpg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitTextJS from "split-text-js";
import ReactCurvedText from 'react-curved-text';


gsap.registerPlugin(ScrollTrigger);

const ViewMoreSkills = () => {
    const { display_body, dispatch } = useContext(GlobalContext);

    const displayCarousel = () => {
        gsap.to('.curved-text-container', {
            scale: 0, // Increase size by 50%
            duration: 1, // Animation duration to enlarge
            ease: 'power1.out', // Smoothing effect
            onComplete: () => {
                dispatch({
                    type:'SET_CAROUSEL',
                    payload: true,
                })
            }
        });
        
    }


   useGSAP(() => {
    if(display_body){
        gsap.to('.curved-text-container', {
            duration: 13, // Duration of the rotation
            rotation: 360, // Rotates a full 360 degrees
            ease: "none", // For a smooth, linear animation
            repeat: -1, // Infinite loop
          });
    }
   }, [display_body])

    const enlargeCircle = () => {
        gsap.to('.inner-circle-curved', {
            scale: 1.5, // Increase size by 50%
            duration: 0.5, // Animation duration to enlarge
            ease: 'power1.out', // Smoothing effect
        });
    };

    const shrinkCircle = () => {
        gsap.to('.inner-circle-curved', {
            scale: 1, // Return to original size
            duration: 0.5, // Animation duration to shrink
            ease: 'power1.out', // Smoothing effect
        });
    };
       
   
  return (
      <div className="view-more-skills">
        <div onClick={displayCarousel} className="curved-text-container" onMouseEnter={enlargeCircle} onMouseLeave={shrinkCircle}>
          <ReactCurvedText
            width={300}
            height={300}
            cx={150}
            cy={150}
            rx={88}
            ry={88}
            startOffset={50}
            reversed={false}
            text={`see more \u00A0 \u00A0 \u00A0   see more  \u00A0 \u00A0 \u00A0   see more  \u00A0 \u00A0 \u00A0   see more`}
            // textProps={{ style: { fontSize: 20} }} // Customize text color and other properties here
        />
       <div className="inner-circle-curved">
            <div className="inner-inner-circle-curved"></div>
       </div>
      </div>
      </div>
       
    );
};

export default ViewMoreSkills;
