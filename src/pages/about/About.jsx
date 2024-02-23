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
gsap.registerPlugin(ScrollTrigger);

function About() {

   useEffect(() => {
      gsap.registerPlugin(ScrollTrigger);
   }, []);

   // add ref to check if element is in view
   const {ref: refSubtitle1, inView: inView1} = useInView({ threshold: 0.5 });
   const {ref: refSubtitle2, inView: inView2} = useInView({ threshold: 0.5 });
   const {ref: refParagraph1, inView: inViewParagraph1} = useInView({ threshold: 0.5 });

   // Get the current location from React Router
   const location = useLocation();
   const navigate = useNavigate();
   const pathname = location.pathname.substring(1); // Removes the leading slash

   const {display_body, navbar_location} = useContext(GlobalContext);

   // add ref to the body
   const bodyRef = useRef(null);
   useBodyAnimation(bodyRef, navbar_location, pathname, navigate);

   const data = {
      location: 'about',
      buttons: [
         {name: '<about>'},
         {name: '<contact>'}
      ]
   }

  


   useSubtitleAnimation(display_body, inView1, ".about-subtitle-1");
   useSubtitleAnimation(display_body, inView2, ".about-subtitle-2");

   useGSAP(() => {
      if (display_body) {
         const titles = gsap.utils.toArray('.about-paragraph');
         console.log("text", titles)
         titles.forEach(title => {
            const text = new SplitTextJS(title, { type: "words" });
            gsap.from(text.chars, {
               scrollTrigger: {
                  trigger: title,
                  start: 'top 80%',
                  end: 'top 20%',
                  scrub: true,
                  markers: false
               },
               opacity: 0.2,
               stagger: 0.1,
               duration: 1,
               ease: 'back.out',
            })
         });
      }
   }, [display_body]);

  

   useGSAP(() => {
      if(display_body){
         const titles = gsap.utils.toArray(".about-title");
         titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);
            const tlx = gsap.timeline({ repeat: 0, repeatDelay: 0 });

            tlx.from(splitTitle.chars, {
                  opacity: 0,
                  y: 400,
                  stagger: 0.07,
                  duration: 1,
               }, "<0");

               tlx.to(splitTitle.chars, {
                  y: -30,
                  stagger: 0.07,
                  duration: 1,
                  ease: 'power2',
               }, "<");

               // Add a bounce effect after the letters move up
               tlx.to(splitTitle.chars, {
                  opacity: 1,
                  y: 0, // Move letters up a bit more
                  duration: .5,
                  stagger: 0.06,
                  ease: 'power2',               
                  // Apply bounce easing
               }, "<1"); // Add to the end of the previous animation
         });
      }       
   }, [display_body]);


// style={{backgroundImage: `url(${Test})`}}
// <div className="overlay"></div>
  if(display_body){
     return (
        <div ref={bodyRef} className="body-container">
            <section className="about-image-container">
               
               <div className="about-title-container">
                  <h2 className="about-title">Nicolas</h2>
                  <span className="about-title-word">Developer</span>
               </div>
               <div className="about-title-container">
                  <span className="about-title-word">Lover</span>
                  <h2 className="about-title">Luque</h2>
               </div>
               <div className="about-title-container">
                  <h2 className="about-title">Rodriguez</h2>
                  <span className="about-title-word">Sexy Bitch</span>
               </div>
            </section>
            <section className="about-content-container">   
               <h3 ref={refSubtitle1} className={`about-subtitle about-subtitle-1 ${inView1 ? 'in-view' : 'not-in-view'}`}>Behind the Keyboard</h3>
               <p ref={refParagraph1} className="about-paragraph">I'm a <span className="red">frontend</span> and <span className="red">backend</span> developer dedicated to crafting digital experiences that resonate. With a passion for innovation and a keen eye for detail, I bring  <span className="red">ideas to life</span>  in pixels and code.</p>
            </section>
            <section className="about-content-container">
               <h3 ref={refSubtitle2} className={`about-subtitle about-subtitle-2 ${inView2 ? 'in-view' : 'not-in-view'}`}>Embarking on Web Adventures</h3>
               <p className="about-paragraph">I specialize in bridging the gap between frontend elegance and backend brilliance. From crafting seamless <span className="red">user interfaces</span> to architecting robust systems, I ensure that every <span className="red">digital creation</span> is as functional as it is beautiful.</p>
            </section>
         </div> 

   );
  }
}

export default About;