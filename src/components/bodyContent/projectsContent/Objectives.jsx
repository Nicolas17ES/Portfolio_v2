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
    const { navbar_location, dispatch } = useContext(GlobalContext);
    const [value, setValue] = useState(null);

    useEffect(() => {
        if(navbar_location === 'aulart-shop'){
            setValue(0)
        } else if(navbar_location === 'aulart-tools'){
            setValue(1)
        } else  if(navbar_location === 'linkinbio'){
            setValue(2)
        }
    },[navbar_location])


    const data = [
            {
                objective: 'The crux of the project was balancing fidelity to the original design with the need for speed. We meticulously recreated each element, ensuring brand consistency while embedding efficiency into every line of code. Navigating the intricacies of WooCommerce data and integrating it into a React environment tested our adaptability and technical prowess.',
                impact: 'Post-launch, we observed a dramatic improvement in site responsiveness—landing pages now load in under 0.5 seconds, a significant leap from the previous 3-second lag. This optimization led to an enhanced browsing experience, keeping users engaged and reducing bounce rates during high-traffic events.',
                role: 'Leading the charge, I spearheaded the redesign of these critical landing pages. My task was to not just translate WooCommerce to React, but to do so in a way that captured the essence of Aulart while significantly boosting performance.',
                stack: ' Leveraged React for the frontend overhaul, interfaced with Wordpress database for seamless product integration, and deployed on Google Cloud Platform for robust, scalable hosting. A bespoke Node.js server was crafted for specific back-end tasks, ensuring a smooth data flow.',
            },
            {
                objective: 'Aulart Tools was born from a quest to enhance our content creation process. What started as a subtitle optimization tool soon expanded into a multifaceted platform. Leveraging OpenAI Whisper and DeepL, it streamlined subtitle accuracy, translated content, and even automated landing page creation from masterclass transcripts.',
                impact: 'The transformation was nothing short of miraculous. Processes that once took days were now condensed into hours without sacrificing quality. Aulart Tools became an indispensable asset, enhancing the creative potential and efficiency of our team.',
                role: 'Leading the Aulart Tools initiative, I had to work closely with various teams in order tofine-tuned the tool to suit our unique workflow needs, enhancing productivity and fostering innovation from within.',
                stack: 'Integrating APIs like OpenAI, DeepL, and Dacast was a complex yet rewarding challenge. The development honed my large-scale project management skills, as we built Aulart Tools on Node.js and launched it on Google Cloud Platform, marking a significant leap in our technological capability.',
            },{
                objective: 'In our drive for self-sufficiency, Aulart entrusted me with developing an in-house alternative to the popular LinkInBio serviceto streamline access to Aulart diverse online content, enhancing user engagement and operational efficiency by centralizing links to new releases and educational materials.',
                impact: 'This in-house LinkInBio solution helped us cut down our operational costs while providing us with unparalleled flexibility in managing our online presence. Its introduction marked a pivotal step in our digital strategy, allowing for rapid content updates and fostering a closer connection with our audience.',
                role: 'From conceptualization to deployment, I crafted a flexible and user-friendly platform that empowered our marketing team with direct control over content updates, ensuring our links always led to the most relevant and engaging material.',
                stack: 'Leveraging the robustness of Node.js for the backend and the agility of React for the frontend, the project was brought to life with a keen focus on scalability and ease of use. Hosted on Amazon Web Services, it guaranteed reliability and seamless accessibility worldwide.',
            },
        ]


        if(value === null) return null;

    return (
        <section className="projects-objectives-container">
            <div className="objectives-block">
                <span className="objectives-number"><div className="objectives-number-span">0</div><div className="objectives-number-span">1</div></span>
                <h5 className="objectives-subtitle">Objectives</h5>
                <p className="objectives-paragraph">{data[value].objective}</p>
            </div>
            <div className="objectives-block">
                <span className="objectives-number">02</span>
                <h5 className="objectives-subtitle">Impact</h5>
                <p className="objectives-paragraph">{data[value].impact}</p>
            </div>
            <div className="objectives-block">
                <span className="objectives-number">03</span>
                <h5 className="objectives-subtitle">Role</h5>
                <p className="objectives-paragraph">{data[value].role}</p>
            </div>
            <div className="objectives-block">
                <span className="objectives-number">04</span>
                <h5 className="objectives-subtitle">Stack</h5>
                <p className="objectives-paragraph">{data[value].stack}</p>
            </div>
        </section>
    )
}

export default Objectives
