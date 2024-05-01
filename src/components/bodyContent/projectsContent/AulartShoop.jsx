import '../../../pages/projects/Projects.css'
import { useEffect } from 'react'

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function AulartShoop() {


    useEffect(() => {
        gsap.to(".scroll-boxes-3", {
          scrollTrigger: {
            trigger: ".collectives-scroll-bar-3", // Assuming you want the entire body's scroll to control the progress.
            start: "bottom center+=400",
            end: "bottom center+=100",
            scrub: true, 
            onUpdate: self => {
              gsap.set(".collectives-scroll-bar-3", {
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
        gsap.to(".scroll-boxes-3", {
          scrollTrigger: {
            trigger: ".scroll-boxes-3",
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
        <div className="project-body">
            <div style={{top: '-25px'}} className="collectives-scroll-bar-container">
                <span className="collectives-scroll-bar-3"></span>
                <span className="scroll-text">SCROLL</span>
                <span className="scroll-boxes-3"></span>
                <span className="scroll-boxes-3"></span>
            </div>
        </div>
    )
}

export default AulartShoop