import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import ProjectsMainTitle from './ProjectsMainTitle';
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function KeepScrolling({version, margin}) {

    // State and context for managing cursor visibility, animations, and global app state.
    const { screenWidth} = useContext(GlobalContext);

    useEffect(() => {
      // Animate scroll boxes with a stagger effect
      gsap.fromTo(`.render-scrollbox-2`, 
          { opacity: 0 }, 
          { opacity: 1, duration: .7,}
      );
      gsap.fromTo(`.render-scrollbox-1`, 
          { opacity: 0 }, 
          { opacity: 1, duration: .7, delay: .4}
      );
  
      // Animate the "SCROLL" text after the scroll boxes
      gsap.fromTo(".scroll-text", 
          { opacity: 0 },
          { opacity: 1, duration: .7, delay: 0.8 } // Delay should account for stagger duration
      );
  
      // The rest of your useEffect code for ScrollTrigger setup remains unchanged
  }, [version]);
  

    useEffect(() => {
        gsap.to(`.scroll-boxes-3-${version}`, {
          scrollTrigger: {
            trigger: `.collectives-scroll-bar-${version}`, // Assuming you want the entire body's scroll to control the progress.
            start: "bottom center+=400",
            end: "bottom center+=100",
            scrub: true, 
            onUpdate: self => {
              gsap.set(`.collectives-scroll-bar-${version}`, {
                height: self.progress * (screenWidth > 780 ? '130' : '50') + "px",
              });
            }
          },
          ease: "none",
        });
      
        // Cleanup if component unmounts
        return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
      }, []);

      useGSAP(() => {
        gsap.to(`.scroll-boxes-3-${version}`, {
          scrollTrigger: {
            trigger: `.scroll-boxes-3-${version}`,
            start: "bottom center+=250",
            end: "bottom center+=0",
            scrub: 1,
          },
          backgroundColor: '#eb5939', // Ensure the initial color is set in your CSS for a smooth transition
          duration: .5,
          rotation: 360,
        });
      }, []);
      

    return (
        <div style={{marginTop: margin ? margin : null}} className="project-body">
            <div style={{top: '-25px'}} className="collectives-scroll-bar-container">
                <span className={`collectives-scroll-bar-3 collectives-scroll-bar-${version}`}></span>
                <span className="scroll-text">SCROLL</span>
                <span className={`scroll-boxes-3 render-scrollbox-1 scroll-boxes-3-${version}`}></span>
                <span className={`scroll-boxes-3 render-scrollbox-2 scroll-boxes-3-${version}`}></span>
            </div>
        </div>
    )
}

export default KeepScrolling