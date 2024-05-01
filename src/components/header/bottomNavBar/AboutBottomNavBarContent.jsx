import './BottomContent.css'
import GlobalContext from '../../../context/GlobalContext'
import { useContext, useState, useEffect } from 'react';
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

function AboutBottomNavBarContent() {

 const { navbar_location, browser } = useContext(GlobalContext);
 const [expand, setExpand] = useState(null)

 useEffect(() => {
     if(navbar_location !== 'about'){
         setExpand(null)
     }
    return () => {
        setExpand(null);
    }
}, [navbar_location])


useGSAP(() => {
    // Animation to fade in content smoothly
    gsap.fromTo('.contact-social-container', 
      { opacity: 0 },
      { opacity: 1, duration: 3.5, ease: 'expo.inOut' }
    );
  }, []);

console.log(browser)
    return (
         <>
            <div className="contact-social-container">
                <div onMouseEnter={() => setExpand(1)} onMouseLeave={() => setExpand(11)}  className="contact-social-original">
                    <a href="https://github.com/Nicolas17ES" rel="noreferrer" target="_blank" className="inner-socials">
                        <FaGithub size={30}/> Github
                    </a>
                </div>
             
                {browser !== 'Safari' && (
                    <div onMouseEnter={() => setExpand(1)} onMouseLeave={() => setExpand(11)} className={`contact-social-opposite ${expand === 1 ? 'expand-height' : expand === 11 ? 'shrink-height' : null}`}>
                        <a href="https://github.com/Nicolas17ES" rel="noreferrer" target="_blank" className="inner-socials inner-socials-opposite scrolling-text">
                            <div className="text-wrapper">
                                <span>Where I break things, then fix them.</span>
                                <span>Where I break things, then fix them.</span> 
                            </div>
                        </a>
                    </div>
                )}
            </div> 
            <div className="contact-social-container">
                <div onMouseEnter={() => setExpand(2)} onMouseLeave={() => setExpand(22)}  className="contact-social-original">
                     <a href="https://www.instagram.com/sonido__club/"  rel="noreferrer" target="_blank"  className="inner-socials">
                       <FaInstagram/> Instagram
                    </a>
                </div>
                {browser !== 'Safari' && (
                <div onMouseEnter={() => setExpand(2)} onMouseLeave={() => setExpand(22)} className={`contact-social-opposite ${expand === 2 ? 'expand-height' : expand === 22 ? 'shrink-height' : null}`}>
                    <a href="https://www.instagram.com/sonido__club/"  rel="noreferrer"  target="_blank" className="inner-socials inner-socials-opposite scrolling-text">
                        <div className="text-wrapper">
                            <span>The colorful side of my monochrome coding life.</span>
                            <span>The colorful side of my monochrome coding life.</span> 
                        </div>
                    </a>
                </div>
                 )}
            </div> 
            <div className="contact-social-container">
                <div onMouseEnter={() => setExpand(3)} onMouseLeave={() => setExpand(33)}  className="contact-social-original">
                     <a href="mailto:luque.nicolas1994@gmail.com" className="inner-socials">
                        <IoMdMail /> Mail
                    </a>
                </div>
                {browser !== 'Safari' && (
                    <div onMouseEnter={() => setExpand(3)} onMouseLeave={() => setExpand(33)}  className={`contact-social-opposite ${expand === 3 ? 'expand-height' : expand === 33 ? 'shrink-height' : null}`}>
                        <a hhref="mailto:luque.nicolas1994@gmail.com"  rel="noreferrer" target="_blank" className="inner-socials inner-socials-opposite scrolling-text">
                            <div className="text-wrapper">
                                <span>{"Say Hi! And drop me a line :)."}</span>
                                <span>{"Say Hi! And drop me a line :)."}</span> 
                            </div>
                        </a>
                    </div> 
                     )}
            </div> 
            <div className="contact-social-container">
                <div onMouseEnter={() => setExpand(4)} onMouseLeave={() => setExpand(44)}  className="contact-social-original">
                     <a href="https://www.linkedin.com/in/nicolas-luque-rodriguez/"  rel="noreferrer" target="_blank"  className="inner-socials">
                        <CiLinkedin /> LinkedIn
                    </a>
                </div>
                {browser !== 'Safari' && (
                    <div onMouseEnter={() => setExpand(4)} onMouseLeave={() => setExpand(44)}  className={`contact-social-opposite ${expand === 4 ? 'expand-height' : expand === 44 ? 'shrink-height' : null}`}>
                         <a href="https://www.linkedin.com/in/nicolas-luque-rodriguez/"  rel="noreferrer"  target="_blank" className="inner-socials inner-socials-opposite scrolling-text">
                            <div className="text-wrapper">
                                <span>My professional saga, in endorsements.</span>
                                <span>My professional saga, in endorsements.</span> 
                            </div>
                        </a>
                    </div> 
                     )}
            </div> 
        </>
    )
}

export default AboutBottomNavBarContent
