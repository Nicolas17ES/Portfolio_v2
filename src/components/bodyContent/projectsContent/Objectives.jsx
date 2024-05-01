import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext } from 'react'
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import {ScrollTrigger} from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);


// The Projects component displays project sections and handles animations based on mouse movements.
function Objectives() {

    // State and context for managing cursor visibility, animations, and global app state.
    const { navbar_location, screenWidth } = useContext(GlobalContext);
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
                objective: screenWidth > 600 ? 
                    'The crux of the project was balancing fidelity to the original design with the need for speed. We meticulously recreated each element, ensuring brand consistency while embedding efficiency into every line of code. Navigating the intricacies of WooCommerce data and integrating it into a React environment tested our adaptability and technical prowess.' : 
                    'Focused on balancing design fidelity with speed, we fine-tuned every element for brand consistency and efficient code. Integrating WooCommerce data into React showcased our adaptability and technical skill.',
                impact: screenWidth > 600 ? 
                    'Post-launch, we observed a dramatic improvement in site responsiveness—landing pages now load in under 0.5 seconds, a significant leap from the previous 3-second lag. This optimization led to an enhanced browsing experience, keeping users engaged and reducing bounce rates during high-traffic events.' : 
                    'After launch, site responsiveness soared with landing pages loading in less than 0.5 seconds—down from 3 seconds. This major speed boost enhanced user engagement and lowered bounce rates.',
                role: screenWidth > 600 ? 
                    'Leading the charge, I spearheaded the redesign of these critical landing pages. My task was not just to translate WooCommerce to React, but to do so in a way that captured the essence of Aulart while significantly boosting performance.' : 
                    'I led the redesign of key landing pages, efficiently translating WooCommerce to React to maintain Aularts identity and enhance performance.',
                stack: screenWidth > 600 ? 
                    'Leveraged React for the frontend overhaul, interfaced with Wordpress database for seamless product integration, and deployed on Google Cloud Platform for robust, scalable hosting. A bespoke Node.js server was crafted for specific back-end tasks, ensuring a smooth data flow.' : 
                    'Used React for the frontend, linked with Wordpress for product data, and used Google Cloud for hosting. Developed a custom Node.js server for optimized backend processes.'
            },
            {
                objective: screenWidth > 600 ? 
                    'Aulart Tools was born from a quest to enhance our content creation process. What started as a subtitle optimization tool soon expanded into a multifaceted platform. Leveraging OpenAI Whisper and DeepL, it streamlined subtitle accuracy, translated content, and even automated landing page creation from masterclass transcripts.' : 
                    'Born to enhance content creation, Aulart Tools evolved from a subtitle optimizer to a comprehensive platform using OpenAI Whisper and DeepL for improved subtitle accuracy, content translation, and automated landing page creation.',
                impact: screenWidth > 600 ? 
                    'The transformation was nothing short of miraculous. Processes that once took days were now condensed into hours without sacrificing quality. Aulart Tools became an indispensable asset, enhancing the creative potential and efficiency of our team.' : 
                    'Our transformation cut down processes from days to hours without losing quality, making Aulart Tools a vital asset for boosting team creativity and efficiency.',
                role: screenWidth > 600 ? 
                    'Leading the Aulart Tools initiative, I had to work closely with various teams in order to fine-tune the tool to suit our unique workflow needs, enhancing productivity and fostering innovation from within.' : 
                    'As the leader of the Aulart Tools project, I collaborated extensively with teams to tailor the tool to our workflow, boosting productivity and spurring internal innovation.',
                stack: screenWidth > 600 ? 
                    'Integrating APIs like OpenAI, DeepL, and Dacast was a complex yet rewarding challenge. The development honed my large-scale project management skills, as we built Aulart Tools on Node.js and launched it on Google Cloud Platform, marking a significant leap in our technological capability.' : 
                    'Integrating OpenAI, DeepL, and Dacast APIs, we enhanced Aulart Tools with Node.js and deployed on Google Cloud, significantly advancing our tech capabilities.'
            },{
                objective: screenWidth > 600 ? 
                    'In our drive for self-sufficiency, Aulart entrusted me with developing an in-house alternative to the popular LinkInBio service to streamline access to Aulart diverse online content, enhancing user engagement and operational efficiency by centralizing links to new releases and educational materials.' : 
                    'Tasked with creating an in-house LinkInBio alternative, I developed a centralized platform to enhance user engagement and streamline access to Aulart’s online content.',
                impact: screenWidth > 600 ? 
                    'This in-house LinkInBio solution helped us cut down our operational costs while providing us with unparalleled flexibility in managing our online presence. Its introduction marked a pivotal step in our digital strategy, allowing for rapid content updates and fostering a closer connection with our audience.' : 
                    'Our custom LinkInBio solution significantly reduced operational costs, increased management flexibility, and improved our digital strategy, enabling quicker updates and deeper audience connections.',
                role: screenWidth > 600 ? 
                    'From conceptualization to deployment, I crafted a flexible and user-friendly platform that empowered our marketing team with direct control over content updates, ensuring our links always led to the most relevant and engaging material.' : 
                    'I led the full lifecycle of a user-friendly platform that gave our marketing team direct control over dynamic content updates, aligning with audience interests.',
                stack: screenWidth > 600 ? 
                    'Leveraging the robustness of Node.js for the backend and the agility of React for the frontend, the project was brought to life with a keen focus on scalability and ease of use. Hosted on Amazon Web Services, it guaranteed reliability and seamless accessibility worldwide.' : 
                    'Using Node.js and React, I built a scalable and easy-to-use system, hosted on Amazon Web Services for dependable global accessibility.'
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
            {/* <div className="objectives-block">
                <span className="objectives-number">04</span>
                <h5 className="objectives-subtitle">Stack</h5>
                <p className="objectives-paragraph">{data[value].stack}</p>
            </div> */}
        </section>
    )
}

export default Objectives
