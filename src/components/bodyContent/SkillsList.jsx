import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/about/About.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import SplitTextJS from "split-text-js";
import { GiBranchArrow } from "react-icons/gi";

gsap.registerPlugin(ScrollTrigger);


function SkillsList() {
    // Accessing global context values
    const { display_body, dispatch } = useContext(GlobalContext);
    const skillsNames = ['Creative Development', 'Front Engineering', 'Backend Development', 'Mobile Development', 'UI/UX Design', 'Database Management', 'API Integration', 'API Development'];

    useGSAP(() => {
        const titles = gsap.utils.toArray(".single-skill");
        const tlx = gsap.timeline({ repeat: -1, repeatDelay: 0 });

        titles.forEach((title, index) => {
        const splitTitle = new SplitTextJS(title);

        tlx.from(splitTitle.chars, {
            opacity: 0,
            y:30,
            rotateX: -20,
            duration: 1, 
        }, "<");
            tlx.to(splitTitle.chars, {
            opacity: 1, // Fade in to full visibility
            duration: 1, // Duration of staying fully visible
        }, "<.5")

        tlx.to(splitTitle.chars, {
            opacity: 0,
            y: -30,
            rotateX: 20,
            duration: 1,
        }, "<1");
        });
    }, );
    

    return (
            <div className="skills-list-container">
                <p className="skills-list-title">I can do this</p>
                <GiBranchArrow size={34} className="skills-arrow" />
                <div className="skills-list-animation">
                    
                    {skillsNames.map((name, index) => (
                        <p key={index} className='single-skill'>
                                ({name})
                            </p>  
                    
                    ))}
                </div>
            </div>

    );
}

export default SkillsList;