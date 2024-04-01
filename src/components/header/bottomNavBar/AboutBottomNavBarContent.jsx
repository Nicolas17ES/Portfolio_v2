import './BottomContent.css'
import GlobalContext from '../../../context/GlobalContext'
import { useContext, useState, useEffect } from 'react';
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import gsap from "gsap";

function AboutBottomNavBarContent() {

 const { navbar_location, display_body, prevLocation } = useContext(GlobalContext);
 const [expand, setExpand] = useState(null)

 useEffect(() => {
     if(navbar_location !== 'about'){
         setExpand(null)
     }
    return () => {
        setExpand(null);
    }
}, [navbar_location])



useEffect(() => {
    const ctx = gsap.context(() => {
      if (display_body) {
        gsap.fromTo('.contact-social-container', 
          { opacity: 0, y: -100 }, 
          { opacity: 1, y: 0, duration: (prevLocation === '/music' || prevLocation === '/projects') ? 1 : .5, stagger: 0.2, delay: (prevLocation === '/music' || prevLocation === '/projects') ? 1.5 : 1.5 }
        );
      }
    });
  
    return () => ctx.revert();
  }, [display_body, navbar_location]);

  useEffect(() => {
    // This code runs when the component mounts or updates
  
    return () => {
      // Cleanup function: This code runs when the component unmounts
        gsap.to('.contact-social-container', {
            opacity: 0,
            y: -100,
            duration: 0.5,
            stagger: 0.2,
            delay: 0.5
        });
        };
    }, []);


    return (
         <>
            <div className="contact-social-container">
                <div onMouseEnter={() => setExpand(1)} onMouseLeave={() => setExpand(11)}  className="contact-social-original">
                    <a href="https://github.com/Nicolas17ES" rel="noreferrer" target="_blank" className="inner-socials">
                        <FaGithub size={30}/> Github
                    </a>
                </div>
             
                <div onMouseEnter={() => setExpand(1)} onMouseLeave={() => setExpand(11)} className={`contact-social-opposite ${expand === 1 ? 'expand-height' : expand === 11 ? 'shrink-height' : null}`}>
                    <a href="https://github.com/Nicolas17ES" rel="noreferrer" target="_blank" className="inner-socials inner-socials-opposite scrolling-text">
                        <div className="text-wrapper">
                            <span>Where I break things, then fix them.</span>
                            <span>Where I break things, then fix them.</span> 
                        </div>
                    </a>
                </div>
            </div> 
            <div className="contact-social-container">
                <div onMouseEnter={() => setExpand(2)} onMouseLeave={() => setExpand(22)}  className="contact-social-original">
                     <a href="https://www.instagram.com/sonido__club/"  rel="noreferrer" target="_blank"  className="inner-socials">
                       <FaInstagram/> Instagram
                    </a>
                </div>
                <div onMouseEnter={() => setExpand(2)} onMouseLeave={() => setExpand(22)} className={`contact-social-opposite ${expand === 2 ? 'expand-height' : expand === 22 ? 'shrink-height' : null}`}>
                    <a href="https://www.instagram.com/sonido__club/"  rel="noreferrer"  target="_blank" className="inner-socials inner-socials-opposite scrolling-text">
                        <div className="text-wrapper">
                            <span>The colorful side of my monochrome coding life.</span>
                            <span>The colorful side of my monochrome coding life.</span> 
                        </div>
                    </a>
                </div>
            </div> 
            <div className="contact-social-container">
                <div onMouseEnter={() => setExpand(3)} onMouseLeave={() => setExpand(33)}  className="contact-social-original">
                     <a href="mailto:luque.nicolas1994@gmail.com" className="inner-socials">
                        <IoMdMail /> Mail
                    </a>
                </div>
             
                    <div onMouseEnter={() => setExpand(3)} onMouseLeave={() => setExpand(33)}  className={`contact-social-opposite ${expand === 3 ? 'expand-height' : expand === 33 ? 'shrink-height' : null}`}>
                        <a hhref="mailto:luque.nicolas1994@gmail.com"  rel="noreferrer" target="_blank" className="inner-socials inner-socials-opposite scrolling-text">
                            <div className="text-wrapper">
                                <span>{"Say Hi! And drop me a line :)."}</span>
                                <span>{"Say Hi! And drop me a line :)."}</span> 
                            </div>
                        </a>
                    </div> 
            </div> 
            <div className="contact-social-container">
                <div onMouseEnter={() => setExpand(4)} onMouseLeave={() => setExpand(44)}  className="contact-social-original">
                     <a href="https://www.linkedin.com/in/nicolas-luque-rodriguez/"  rel="noreferrer" target="_blank"  className="inner-socials">
                        <CiLinkedin /> LinkedIn
                    </a>
                </div>
             
                    <div onMouseEnter={() => setExpand(4)} onMouseLeave={() => setExpand(44)}  className={`contact-social-opposite ${expand === 4 ? 'expand-height' : expand === 44 ? 'shrink-height' : null}`}>
                         <a href="https://www.linkedin.com/in/nicolas-luque-rodriguez/"  rel="noreferrer"  target="_blank" className="inner-socials inner-socials-opposite scrolling-text">
                            <div className="text-wrapper">
                                <span>My professional saga, in endorsements.</span>
                                <span>My professional saga, in endorsements.</span> 
                            </div>
                        </a>
                    </div> 
            </div> 
        </>
    )
}

export default AboutBottomNavBarContent
