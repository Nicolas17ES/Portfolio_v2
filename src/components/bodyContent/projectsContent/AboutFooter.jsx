import '../../../pages/about/About.css'
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import FotoGafas from '../../../images/FotoGafas.png'
import FotoCarro from '../../../images/nicolas/FotoCarro.JPG'
import { ReactComponent as Smiley }  from '../../../assets/Smiley.svg'
import { ReactComponent as Kid2 }  from '../../../assets/Kid2.svg'
import GlobalContext from '../../../context/GlobalContext';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

function AboutFooter() {

    // State and context for managing cursor visibility, animations, and global app state.
    const { dispatch, display_resumes, projects_resumes_animation_finished} = useContext(GlobalContext);

    const svgRef = useRef();
    const svgRef2 = useRef();

    useEffect(() => {
        // GSAP animation to draw the SVG
        gsap.fromTo(svgRef.current, {
        strokeDashoffset: 300, // This value should be the length of your path
        }, {
        strokeDashoffset: 0,
        duration: 4,
        ease: "power1.out"
        });
    }, []);

    useEffect(() => {
        // GSAP animation to draw the SVG
        gsap.fromTo(svgRef2.current, {
        strokeDashoffset: 700, // This value should be the length of your path
        }, {
        strokeDashoffset: 0,
        duration: 6,
        ease: "power1.out"
        });
    }, []);

    return (
        <div className="about-bottom">
            <Smiley ref={svgRef}/>
            <section className="about-footer-conteiner">
            <div className="about-footer-block">
                <p className="about-block-text">SAY</p>
                <span className="about-block-line"></span>
                <p className="about-block-text">HI</p>
            </div>
            <div className="footer-main">
                <img src={FotoCarro} alt="" className="about-footer-image" />
            </div>
            <div className="about-footer-block">
                <p className="about-block-text">gud</p>
                <span className="about-block-line"></span>
                <p className="about-block-text">bye</p>
            </div>
        </section>
        <Kid2 ref={svgRef2}/>
        </div>
    )
}

export default AboutFooter