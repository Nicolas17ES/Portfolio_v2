import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/about/About.css'
import Image from '../../images/ChocoXAfter.jpg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitTextJS from "split-text-js";

gsap.registerPlugin(ScrollTrigger);

function SkillsSider() {
    const { display_carousel, dispatch } = useContext(GlobalContext);


    const [namesArray, setNamesArray] = useState([
        'ReactJS', 'MongoDB', 'Mysql', 'GSAP', 'NodeJS', 'HTML5', 'CSS3',
        'Javascript', 'Wordpress', 'PHP', 'ExpressJS', 'RestAPI'
    ]);

    useEffect(() => {
        if (display_carousel) {
            gsap.from('.logos-container', {
                scale: 0,
                duration: 1.5, // Adjust duration as needed
                ease: 'power3.out', // Adjust easing as needed
            });
        }
    }, [display_carousel]); // Dependency array ensures effect runs only when display_carousel changes


    

    if(display_carousel){
        return (
            <div className="logos-container">
                 <div className="logos">
                 <div className="logos-slider">
                     <div className="logos-slide">
                         {namesArray.map((name, index) => (
                             <p key={index} className="slider-skill">{name}</p>
                         ))}
                     </div>
                     <div className="logos-slide">
                         {namesArray.map((name, index) => (
                             <p key={index} className="slider-skill">{name}</p>
                         ))}
                     </div>
                 </div>
             </div>
            </div>
         );
    }
}

export default SkillsSider;
