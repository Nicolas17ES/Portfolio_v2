import GlobalContext from '../../context/GlobalContext'
import { useContext } from 'react'
import '../../pages/about/About.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import SkillsTable from './SkillsList'
import SkillsSider from './SkillsSider'
import SkillsSubtitles from './SkillsSubtitles'


gsap.registerPlugin(ScrollTrigger);


function Skills() {
    // Accessing global context values
    const { display_body, dispatch } = useContext(GlobalContext);


     useGSAP(() => {
      if (display_body) {
        const anim = gsap.from('.skills-animated-line', {
          scrollTrigger: {
            trigger: '.line-title',
            start: 'top 90%',
            end: 'bottom top', 
            toggleActions: 'restart pause resume reset',
            onEnter: () => anim.play(),
            onLeave: () => anim.pause(0), // Reset the animation to its initial state when leaving
            onEnterBack: () => anim.play(),
            onLeaveBack: () => anim.pause(0), // Optionally reset on leaving back
          },
          width: '10%', // Initial width
          opacity: 0.2,
          duration: .5,
          ease: 'none',
          onComplete: () => {
          gsap.to('.skills-animated-line', { width: '100%', duration: 0.5 }); // Animate width to 100%
          },
        });
      }
    }, [display_body]);



  const setOverlay = (value) => {
    if(value === -1){
      dispatch({
        type: 'SET_OVERLAY',
        payload: 0,
      })
      setTimeout(() => {
        dispatch({
          type: 'SET_OVERLAY',
          payload: value,
        })
      }, 1000)
    } else {
      dispatch({
        type: 'SET_OVERLAY',
        payload: value,
      })
    }
  }

 useGSAP(() => {

  gsap.set('.line-title', { opacity: 0 }); // Initially hide the element

  const anim = gsap.fromTo('.line-title',
    { y: 30, opacity: 0 },
    {
      y: 0,
      opacity: 1,
      paused: true,
      duration: .7,
      ease: 'power2.inOut',
      scrollTrigger: {
        trigger: '.line-title',
        start: 'top 90%',
        end: 'bottom top',
        toggleActions: 'restart pause resume reset',
        onEnter: () => anim.play(),
        onLeave: () => anim.pause(0), // Reset the animation to its initial state when leaving
        onEnterBack: () => anim.play(),
        onLeaveBack: () => anim.pause(0), // Optionally reset on leaving back
      }
    });

}, [display_body]);

// <div onMouseEnter={() => setOverlay(1)} onMouseLeave={() => setOverlay(-1)}  className="skills-box">
    

    

    return (
        <>
          <div className="animated-line-titles">
            <h4 className="line-title animate-from-below">What can I do?</h4>
            <div className="line-arrows line-title"><SkillsTable/></div>
          </div>
            <hr className="skills-animated-line"></hr>
            <div className="skills-container">
                <SkillsSubtitles/>
                {/* <ViewMoreSkills/> */}
            </div>
            <div className="skills-slider-container">
              <SkillsSider/>
            </div>
            
        </>
    );
}

export default Skills;