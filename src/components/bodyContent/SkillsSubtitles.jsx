import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/about/About.css'
import Image from '../../images/ChocoXAfter.jpg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { GiBranchArrow } from "react-icons/gi";
import { IoIosArrowRoundForward } from "react-icons/io";


gsap.registerPlugin(ScrollTrigger);


function SkillsSubtitles() {
    // Accessing global context values
    const { display_body, dispatch } = useContext(GlobalContext);
    const titleRef = useRef(null);


   



    return (
        <>
        {/* <div class="cursor"></div>
        <div class="hand">
            <GiBranchArrow color="black" className="hand-arrow"/>
        </div> */}
            <div ref={titleRef}  className="skills-subtitles-container">
                <h5 className="skills-subtitle">Using all these</h5>
                {/* <h5 className="skills-subtitle">All</h5>
                <h5 className="skills-subtitle">These</h5> */}
            </div>
        </>
    );
}

export default SkillsSubtitles;