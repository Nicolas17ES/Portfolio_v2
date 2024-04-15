import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);


// The Projects component displays project sections and handles animations based on mouse movements.
function Objectives() {

    // State and context for managing cursor visibility, animations, and global app state.
    const { title_animation_finshed, dispatch, display_resumes } = useContext(GlobalContext);
   useGSAP(() => {
    const tl = gsap.timeline();
        tl.from('.objectives-number-span', {
            opacity: 0,
            y: 160,
            rotateX: -60,
            duration: .8,
            stagger: 0.45,
            ease: 'power1.inOut'
        })
        tl.from('.objectives-subtitle', {
            opacity: 0,
            y: 160,
            duration: 1,
            stagger: 0.45,
            ease: 'power1.inOut'
        })
   }, [])

    return (
        <section className="projects-objectives-container">
            <div className="objectives-block">
                <span className="objectives-number"><div className="objectives-number-span">0</div><div className="objectives-number-span">1</div></span>
                <h5 className="objectives-subtitle">Objectives</h5>
                <p className="objectives-paragraph">Post-launch, we observed a dramatic improvement in site responsiveness—landing pages now load in under 0.5 seconds, a significant leap from the previous 3-second lag. This optimization led to an enhanced browsing experience, keeping users engaged and reducing bounce rates during high-traffic events.</p>
            </div>
            <div className="objectives-block">
                <span className="objectives-number">02</span>
                <h5 className="objectives-subtitle">Impact</h5>
                <p className="objectives-paragraph">The crux of the project was balancing fidelity to the original design with the need for speed. We meticulously recreated each element, ensuring brand consistency while embedding efficiency into every line of code. Navigating the intricacies of WooCommerce data and integrating it into a React environment tested our adaptability and technical prowess.</p>
            </div>
            <div className="objectives-block">
                <span className="objectives-number">03</span>
                <h5 className="objectives-subtitle">Role</h5>
                <p className="objectives-paragraph">Leading the charge, I spearheaded the redesign of these critical landing pages. My task was to not just translate WooCommerce to React, but to do so in a way that captured the essence of Aulart while significantly boosting performance.</p>
            </div>
        </section>
    )
}

export default Objectives
