import ButtonsBody from '../../components/buttonsBody/ButtonsBoody'
import './Projects.css'
import useBodyAnimation from '../../hooks/useBodyAnimation'; // Import your custom hook
import AulartHome from '../../images/AulartHome.png'
import AulartTools from '../../images/AulartTools.png'
import AulartTools2 from '../../images/AulartTools2.png'
import LinkInBio from '../../images/LinkInBio.jpg'

import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate } from 'react-router-dom';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

function Projects() {

     // Get the current location from React Router
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname.substring(1); // Removes the leading slash
    const [entered, setEntered] = useState(false)
    

    const {view_projects_cursor, display_body, navbar_location, dispatch, project_index_hovered} = useContext(GlobalContext);

    // add ref to the body
    const bodyRef = useRef(null);

    useBodyAnimation(bodyRef, navbar_location, pathname, navigate);


    const data = {
        location: 'about',
        buttons: [
            {name: '<Aulart_Tools>'},
            {name: '<Aulart_Shop>'},
            {name: '<linkTree>'}
        ]
    }


    // display the custom cursor
    const setCursorVisible = (value, index) => {
        dispatch({
            type: 'SET_PROJECT_INDEX_HOVERED',
            payload: index,
        })
        dispatch({
            type: 'SET_VIEW_PROJECTS_CURSOR',
            payload: value,
        })

        const sections = ['container-shoop', 'container-bio', 'container-tools'];
        sections.forEach((sectionClass, idx) => {
            const element = document.querySelector(`.${sectionClass}`);
            if (element) {
                // Only adjust z-index for the current section; reset others
                element.style.zIndex = (value && index === idx + 1) ? 1 : 'auto';
            }
        });
    }


    // ANIMATE CONTAINER ON MOUNT

    useGSAP(() => {
      if(display_body){
        gsap.from('.single-project-container', {
          xPercent: -150,
          duration: 1.4,
          ease: 'Power3.easeOut',
          stagger: 0.3,
          delay: .3,
          // onComplete: () => {
            
          // }
        })
        gsap.from('.project-title', {
          y: 200,
          duration: 1.5,
          ease: 'Power3.easeOut',
          stagger: 0.3,
          delay: .7,
        })
      }
    }, [display_body])



    // WE NEED TO CHECK IF ON MOUNT THE CURSOR IS ON TOP OF THE SECTION, SO WE CAN CALL THE ANIMATION OF HTE IMAGE AS ON MOUSE ENTER WONT BE TRIGGERED
    const [mousePosition, setMousePosition] = useState({ x: null, y: null });

    useEffect(() => {
      const updateMousePosition = ev => {
        setMousePosition({ x: ev.clientX, y: ev.clientY });
      };

      window.addEventListener('mousemove', updateMousePosition);

      return () => {
        window.removeEventListener('mousemove', updateMousePosition);
      };
    }, []);




    // THE NEXT 3 GSAPS ARE CORRESPONDING ANIMATIONS FOR EACH SECTION
    //SECTION 1

    useEffect(() => {
      
      const sectionElement = document.querySelector('.container-shoop');
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          const mouseX = mousePosition.x; 
          const mouseY = mousePosition.y;

          if (!entered && mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
            gsap.fromTo('.project-image', { scale: 0, xPercent: -100, opacity: 0}, { scale: 1, xPercent: 120, yPercent: -10, duration: 0.7, ease: 'power1.out', opacity: 1, delay: .75 });
          }
    
          const onMouseEnter = () => {
            setEntered(true)
            // Animation from scale 0 to 1 and from left to right
            gsap.fromTo('.project-image', { scale: 0, xPercent: -100, opacity: 0 }, { scale: 1, xPercent: 120, yPercent: -10, duration: 0.7, ease: 'power1.out', opacity: 1 });
          };
    
          const onMouseLeave = () => {
            // Optionally, add an animation for when the mouse leaves
            gsap.fromTo('.project-image', { scale: 1, xPercent: 120, yPercent: -20, ease: 'power1.out', opacity: 1 }, { scale: 0, duration: 0.7, xPercent: -100, opacity: 0, yPercent: 0 });
          };
    
          sectionElement.addEventListener('mouseenter', onMouseEnter);
          sectionElement.addEventListener('mouseleave', onMouseLeave);
    
          return () => {
            sectionElement.removeEventListener('mouseenter', onMouseEnter);
            sectionElement.removeEventListener('mouseleave', onMouseLeave);
          };
        }
      }, [view_projects_cursor]);



    // // SECTION 2
    useEffect(() => {

      const sectionElement = document.querySelector('.container-bio');
        if (sectionElement) {

          const rect = sectionElement.getBoundingClientRect();
          const mouseX = mousePosition.x; 
          const mouseY = mousePosition.y;

          if (!entered && mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
            gsap.fromTo('.project-image-bio', { scale: 0,  xPercent: 320, yPercent: -200, opacity: 0 }, { scale: 1, xPercent: 320, yPercent: -40, duration: 0.7, ease: 'power1.out', opacity: 1, delay: .75 });
          }
    
          const onMouseEnter = () => {
            setEntered(true)
            // Animation from scale 0 to 1 and from left to right
            gsap.fromTo('.project-image-bio', { scale: 0,  xPercent: 320, yPercent: -200, opacity: 0 }, { scale: 1, xPercent: 320, yPercent: -40, duration: 0.7, ease: 'power1.out', opacity: 1 });
          };
    
          const onMouseLeave = () => {
            // Optionally, add an animation for when the mouse leaves
            gsap.fromTo('.project-image-bio', { scale: 1, xPercent: 320, yPercent: -40, ease: 'power1.out', opacity: 1 }, { scale: 0,  xPercent: 320, yPercent: -200, duration: 0.7, opacity: 0 });
          };
    
          sectionElement.addEventListener('mouseenter', onMouseEnter);
          sectionElement.addEventListener('mouseleave', onMouseLeave);
    
          return () => {
            sectionElement.removeEventListener('mouseenter', onMouseEnter);
            sectionElement.removeEventListener('mouseleave', onMouseLeave);
          };
        }
      }, [view_projects_cursor]);



    // SECTION 3
    useEffect(() => {
      const sectionElement = document.querySelector('.container-tools');
        if (sectionElement) {

          const rect = sectionElement.getBoundingClientRect();
          const mouseX = mousePosition.x; 
          const mouseY = mousePosition.y;

          if (!entered && mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
            gsap.fromTo('.project-image-tools', { scale: 0, xPercent: 300, opacity: 0 }, { scale: 1, xPercent: 120, yPercent: 5, duration: 0.7, ease: 'power1.out', opacity: 1, delay: .75 });
          }
    
          const onMouseEnter = () => {
            setEntered(true)
            // Animation from scale 0 to 1 and from left to right
            gsap.fromTo('.project-image-tools', { scale: 0, xPercent: 300, opacity: 0 }, { scale: 1, xPercent: 120, yPercent: -15, duration: 0.7, ease: 'power1.out', opacity: 1 });
          };
    
          const onMouseLeave = () => {
            // Optionally, add an animation for when the mouse leaves
            gsap.fromTo('.project-image-tools', { scale: 1, xPercent: 120, yPercent: -15, ease: 'power1.out', opacity: 1 }, { scale: 0, duration: 0.7, xPercent: -100, opacity: 0, yPercent: 0 });
          };
    
          sectionElement.addEventListener('mouseenter', onMouseEnter);
          sectionElement.addEventListener('mouseleave', onMouseLeave);
    
          return () => {
            sectionElement.removeEventListener('mouseenter', onMouseEnter);
            sectionElement.removeEventListener('mouseleave', onMouseLeave);
          };
        }
      }, [view_projects_cursor]);


    if(display_body){
        return (
            <div ref={bodyRef} className="body-container">
                {/* <ButtonsBody data={data}/> */}
                <div className="projects-list-container">
                    <section
                        
                        className="single-project-container container-shoop"
                        onMouseEnter={() => setCursorVisible(true, 1)} 
                        onMouseLeave={() => setCursorVisible(false, null)}
                    >
                        <div className="porject-title-container">
                        <h3 className="project-title"><span className="project-number">[01]</span>Shoop Aulart</h3>
                        </div>
                        <img src={AulartHome} alt="" className="project-image" />
                    </section>
                    <section
                        
                        className="single-project-container container-bio"
                        onMouseEnter={() => setCursorVisible(true, 2)} 
                        onMouseLeave={() => setCursorVisible(false, null)}
                    >
                        
                        <div className="porject-title-container">
                        < h3 className="project-title"><span className="project-number">[02]</span>Link_In_Bio</h3>
                        </div>
                        <img  src={LinkInBio} alt="" className="project-image-bio" />
                    </section>
                    <section 
                        style={{borderBottom: '1px solid rgb(var(--black))'}}                     
                        className="single-project-container container-tools"
                        onMouseEnter={() => setCursorVisible(true, 3)} 
                        onMouseLeave={() => setCursorVisible(false, null)}
                    >
                        <div className="porject-title-container">
                        <h3 className="project-title"><span className="project-number">[03]</span>Tools Aulart</h3>
                        </div>
                        <img src={AulartTools2} alt="" className="project-image-tools" />
                    </section>
                    
                </div>
            </div>
        )
    }
}

export default Projects
