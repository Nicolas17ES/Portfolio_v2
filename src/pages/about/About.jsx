import ButtonsBody from '../../components/buttonsBody/ButtonsBoody'
import './About.css'
import useBodyAnimation from '../../hooks/useBodyAnimation'; // Import your custom hook
import Test from '../../images/imagetest.jpg'
import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import {useInView} from 'react-intersection-observer'
import useSubtitleAnimation from '../../hooks/useSubtitleAnimation'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import Skills from '../../components/bodyContent/Skills'
import AnimatedIcon from '../../components/bodyContent/AnimatedIcon'
import ScreenOverlay from '../../components/shared/ScreenOverlay';
import SkillsSider from '../../components/bodyContent/SkillsSider';
import FotoCarro from '../../images/nicolas/FotoCarro.JPG'
import FotoBebida from '../../images/nicolas/FotoBebida.JPG'
import FotoGafas from '../../images/FotoGafas.png'
import SkillsList from '../../components/bodyContent/SkillsList';
import AboutFooter from '../../components/bodyContent/projectsContent/AboutFooter';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import { FaGithub, FaInstagram } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";

gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollTrigger);

function About() {



   // Get the current location from React Router
   const paragraphRefOne = useRef(null);
   const paragraphRefTwo = useRef(null);

   const {display_body, screenWidth, prevLocation, browser} = useContext(GlobalContext);

   // only render skilsl list when animations done: 
   const [renderSkills, setRenderSkills] = useState(false);
   const [titleAnimationFinished, setTitleAnimationFinished] = useState(false);
   const [subTitleAnimationFinished, setSubtitleAnimationFinished] = useState(false);


   useGSAP(() => {
    if (display_body && screenWidth > 600 && !titleAnimationFinished) {
        const paragraphs = document.querySelectorAll('.about-paragraph');
        paragraphs.forEach(paragraph => {
            const textContent = paragraph.textContent;
            const words = textContent.split(' '); // Split the text into words using white space as delimiter
            paragraph.innerHTML = ''; // Clear the content of the paragraph
            words.forEach((word, index) => {
                let wordClass = ''; // Initialize class variable

                // Check if the word matches any of the specified words
                if (["ideas", "to", "life", "user", "interfaces", "front-end", "back-end", "real-world", "hands-on"].includes(word)) {
                    wordClass = 'red'; // Assign the class 'red' if the word matches
                }

                if (index !== words.length - 1) {
                    paragraph.innerHTML += `<span class="${wordClass}">${word} </span>`; // Append each word as a separate span element with white space
                } else {
                    paragraph.innerHTML += `<span class="${wordClass}">${word}</span>`; // Append the last word without white space
                }
            });

            gsap.from(paragraph.children, {
                scrollTrigger: {
                    trigger: paragraph.children,
                    start: 'top 90%',
                    end: 'top 40%',
                    scrub: true,
                    markers: false
                },
                opacity: 0,
                stagger: 0.1,
                duration: 1,
                ease: 'back.out',
            });
        });
    } else if(display_body && screenWidth <= 600 && titleAnimationFinished){
      
      gsap.to(".about-paragraph", {
         opacity: 1,
         duration: 1,
         ease: 'power2.in'
       });
    }
}, [display_body, titleAnimationFinished, screenWidth]);

// Empty dependency array to run once on mount

console.log(browser)
useGSAP(() => {
   if(display_body && screenWidth > 600){
      gsap.from(".about-subtitle-1", {
         scrollTrigger: {
           trigger: ".about-subtitle-1",
           start: "bottom bottom",
           end: "bottom center+=150",
           scrub: 1,
         },
         x: -350,
         duration: 1,
       });
   } else if (display_body && screenWidth <= 600 && titleAnimationFinished){
      gsap.to(".about-subtitle-1", {
         opacity: 1,
         duration: 1,
         ease: 'power2.in',
         onComplete: () => {
            if(screenWidth <= 600){
               setSubtitleAnimationFinished(true)
            }
         }
       });
   }
 }, [display_body, titleAnimationFinished]);

useGSAP(() => {
   if(display_body && screenWidth > 600){
      gsap.from(".about-subtitle-2", {
         scrollTrigger: {
           trigger: ".about-subtitle-2",
           start: "bottom bottom",
           end: "bottom center+=150",
           scrub: 1,
         },
         x: -350,
         duration: 1,
       });
   } else if (display_body && screenWidth <= 600 && subTitleAnimationFinished){
      gsap.to(".skills-slider-container", {
         opacity: 1,
         duration: 1,
         ease: 'power2.in'
       });
      gsap.to(".about-subtitle-2", {
         opacity: 1,
         duration: 1,
         ease: 'power2.in',
         delay: .5
       });
   }
 }, [display_body, screenWidth, subTitleAnimationFinished]);




  

   useGSAP(() => {
      if(display_body){
          gsap.from('.about-title-container', {
          xPercent: -150,
          duration: 1.4,
          ease: 'Power3.easeOut',
          delay: .3,
          onComplete: () => {
            if(screenWidth <= 600){
               setTitleAnimationFinished(true)
            }
         }
        })
         gsap.from('.about-title', {
            y: 200,
            duration: 1.5,
            ease: 'Power3.easeOut',
            delay: .7,
          })
         gsap.from('.about-title-word', {
            y: 200,
            duration: 1.5,
            ease: 'Power3.easeOut',
            stagger: 0.3,
            delay: .7,
          })
      }       
   }, [display_body]);

//     // ANIMATION TO LOAD THE IMAGE OVERLAY ON MOUNBT
    useEffect(() => {        
      const imageRevealReset = CSSRulePlugin.getRule(".image-about-wrap::before");
      gsap.to(imageRevealReset, { duration: 0, cssRule: { width: "100%" } });
      
      // Your animation setup
      const imageReveal = CSSRulePlugin.getRule(".image-about-wrap::before");
      let tl = gsap.timeline({defaults: { ease: 'Power1.easeOut'}})
                  .to(imageReveal, { duration: (prevLocation === '/music' || prevLocation === '/projects') ? 5.3 : 1.1, delay: (prevLocation === '/music' || prevLocation === '/projects') ? 5.6 : 1, cssRule: { width: "0%" }, onComplete: () => {setRenderSkills(true)} });
      
      // Cleanup function to kill the animation when the component unmounts or conditions change
      return () => {
         setRenderSkills(false)
        tl.kill(); // This will kill the timeline, stopping all animations in it
      };
  }, []);

  useEffect(() => {
   if(display_body){
      setTimeout(() => {
         ScrollTrigger.refresh()
      }, 500);
   }
  }, [display_body]);

  
  if(display_body){
     return (
        <div  className="body-container">
            {/* <ScreenOverlay/> */}
            <section className="about-image-container">
               
               <div className="about-title-container" style={{borderTop: '1px solid rgb(var(--black))'}}>
                  <h2 className="about-title">Nicolas</h2>
               {screenWidth > 550 && (
                   <span className="about-title-word">{(browser === 'Safari') ? 'Software Engineer' : <SkillsList/>}</span> 
               )}
               </div>
               <div className="about-title-container about-title-container-image">
                  <div className="image-about-wrap">
                  <img src={FotoBebida} alt="" className="foto-about"/>
                  </div>
                  <h2 className="about-title">Luque</h2>
               </div>
               <div className="about-title-container">
                  <h2 className="about-title">Rodriguez</h2>
                  <span className="about-title-word"><AnimatedIcon/></span>
               </div>
            </section>
            <section className="about-content-container">   
               <h3  className={`about-subtitle about-subtitle-1`}>Behind the Keyboard </h3>
               <p ref={paragraphRefOne} className="about-paragraph about-paragraph-1">"As a self-taught developer specializing in both <span className="red">front-end</span> and <span className="red">back-end</span> technologies, I've honed my skills through <span className="red">real-world</span> experience and dedicated mentorship at Aulart. My journey in this dynamic field has been shaped by <span className="red">hands-on</span> projects and insightful guidance from industry experts." </p>
            </section>
            <section className="about-content-container about-content-container-2">
            <div className="skills-slider-container">
              <SkillsSider/>
            </div>
            </section>
            <section className="about-content-container about-content-container-3">
               <h3  className={`about-subtitle about-subtitle-2`}>Embarking on Web Adventures</h3>
               <p ref={paragraphRefTwo} className="about-paragraph about-paragraph-2">"With a passion for innovation and a keen eye for detail, I bring  <span className="red">ideas to life</span>  in pixels and code. From crafting seamless <span className="red">user interfaces</span> to architecting robust systems, I ensure that every <span className="red">digital creation</span> is as functional as it is beautiful."</p>
            </section>
            {screenWidth > 500 && <AboutFooter/>}
            {screenWidth <= 800 && (
               <div className="socials-mobile-container">
                  <a href="https://github.com/Nicolas17ES" rel="noreferrer" target="_blank" className="inner-socials-mobile">
                        <FaGithub size={30} className='github-mobile-icon'/> Github
                    </a>
                    <a href="https://www.instagram.com/sonido__club/"  rel="noreferrer" target="_blank"  className="inner-socials-mobile">
                       <FaInstagram/> Instagram
                    </a>
                    <a href="mailto:luque.nicolas1994@gmail.com" className="inner-socials-mobile">
                        <IoMdMail /> Mail
                    </a>
               </div>

            )}
         </div> 

   );
  }
}

export default About;