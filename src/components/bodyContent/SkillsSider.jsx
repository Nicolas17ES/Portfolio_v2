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
    const [namesArray, setNamesArray] = useState([
        'ReactJS', 'MongoDB', 'Mysql', 'GSAP', 'NodeJS', 
        'Javascript', 'Wordpress', 'PHP', 'ExpressJS', 'RestAPI'
    ]);

    

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

export default SkillsSider;
