import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/about/About.css'
import Image from '../../images/ChocoXAfter.jpg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GiBranchArrow } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);


function SkillsSubtitles() {
    // Accessing global context values
    const { display_body, dispatch } = useContext(GlobalContext);
    const titleRef = useRef(null);
    let mouseX = 0;
    let mouseY = 0;


        // useEffect(() => {

        //         gsap.set('.cursor', { xPercent: -50, yPercent: -50 });
        //         const title = titleRef.current;

        //         const handleMouseMove = (e) => {
        //             mouseX = e.clientX;
        //             mouseY = e.clientY;
        //             gsap.to('.cursor', { x: mouseX, y: mouseY, duration: 0.5 });
        //         };

        //         const handleMouseEnter = () => {
        //             gsap.to('.hand', {
        //                 scale: 1,
        //                 opacity: 1,
        //                 top: '-75px',
        //                 left: '-75px',
        //                 rotate: 0,
        //                 ease: 'elastic.out(1, 0.3)',
        //                 duration: 1
        //             });
        //         };

        //         const handleMouseMoveTitle = () => {
        //             gsap.to('.hand', { x: mouseX, y: mouseY, duration: 1 });
        //         };

        //         const handleMouseLeave = () => {
        //             gsap.to('.hand',{
        //                 scale: 0,
        //                 opacity: 0,
        //                 top: '10',
        //                 left: '40',
        //                 rotate: 45,
        //                 duration: 0.2
        //             });
        //         };

        //         window.addEventListener('mousemove', handleMouseMove);
        //         title.addEventListener('mouseenter', handleMouseEnter);
        //         title.addEventListener('mousemove', handleMouseMoveTitle);
        //         title.addEventListener('mouseleave', handleMouseLeave);

        //         return () => {
        //             window.removeEventListener('mousemove', handleMouseMove);
        //             title.removeEventListener('mouseenter', handleMouseEnter);
        //             title.removeEventListener('mousemove', handleMouseMoveTitle);
        //             title.removeEventListener('mouseleave', handleMouseLeave);
        //         };
        // }, []); // Run once on component mount



    return (
        <>
        {/* <div class="cursor"></div>
        <div class="hand">
            <GiBranchArrow color="black" className="hand-arrow"/>
        </div> */}
            <div ref={titleRef}  className="skills-subtitles-container">
                <h5 className="skills-subtitle ">Using</h5>
                <h5 className="skills-subtitle">All</h5>
                <h5 className="skills-subtitle">These</h5>
            </div>
        </>
    );
}

export default SkillsSubtitles;