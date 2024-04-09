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
    const { dispatch } = useContext(GlobalContext);

    useEffect(() => {
        gsap.to(`.scroll-boxes-3-${version}`, {
          scrollTrigger: {
            trigger: `.collectives-scroll-bar-${version}`, // Assuming you want the entire body's scroll to control the progress.
            start: "bottom center+=400",
            end: "bottom center+=100",
            scrub: true, 
            onUpdate: self => {
              gsap.set(`.collectives-scroll-bar-${version}`, {
                height: self.progress * 130 + "px",
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

    console.log(margin)
    return (
        <div style={{marginTop: margin ? margin : null}} className="project-body">
            <div style={{top: '-25px'}} className="collectives-scroll-bar-container">
                <span className={`collectives-scroll-bar-3 collectives-scroll-bar-${version}`}></span>
                <span className="scroll-text">SCROLL</span>
                <span className={`scroll-boxes-3 scroll-boxes-3-${version}`}></span>
                <span className={`scroll-boxes-3 scroll-boxes-3-${version}`}></span>
            </div>
        </div>
    )
}

export default KeepScrolling