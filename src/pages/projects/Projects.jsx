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



    // THE NEXT 3 GSAPS ARE CORRESPONDING ANIMATIONS FOR EACH SECTION
    //SECTION 1
    const sectionRef = useRef(null); 
    const imageRef = useRef(null);
    console.log("project_index_hovered", project_index_hovered)
console.log("view_projects_cursor", view_projects_cursor)
console.log("sectionRef.current ", sectionRef.current)
console.log("imageRef.current", imageRef.current)

    useEffect(() => {
        if (sectionRef.current && imageRef.current) {

          const section = sectionRef.current;
          const image = imageRef.current;

          
    
          const onMouseEnter = () => {
            // Animation from scale 0 to 1 and from left to right
            gsap.fromTo(image, { scale: 0, xPercent: -100, opacity: 0 }, { scale: 1, xPercent: 120, yPercent: -10, duration: 0.7, ease: 'power1.out', opacity: 1 });
          };
    
          const onMouseLeave = () => {
            // Optionally, add an animation for when the mouse leaves
            gsap.fromTo(image, { scale: 1, xPercent: 120, yPercent: -20, ease: 'power1.out', opacity: 1 }, { scale: 0, duration: 0.7, xPercent: -100, opacity: 0, yPercent: 0 });
          };
    
          section.addEventListener('mouseenter', onMouseEnter);
          section.addEventListener('mouseleave', onMouseLeave);
    
          return () => {
            section.removeEventListener('mouseenter', onMouseEnter);
            section.removeEventListener('mouseleave', onMouseLeave);
          };
        }
      }, [view_projects_cursor]);



    // SECTION 2
    const sectionRefBio = useRef(null); 
    const imageRefBio = useRef(null);


    useEffect(() => {
        if (sectionRefBio.current && imageRefBio.current) {
          const section = sectionRefBio.current;
          const image = imageRefBio.current;
    
          const onMouseEnter = () => {
            // Animation from scale 0 to 1 and from left to right
            gsap.fromTo(image, { scale: 0,  xPercent: 320, yPercent: -200, opacity: 0 }, { scale: 1, xPercent: 320, yPercent: -40, duration: 0.7, ease: 'power1.out', opacity: 1 });
          };
    
          const onMouseLeave = () => {
            // Optionally, add an animation for when the mouse leaves
            gsap.fromTo(image, { scale: 1, xPercent: 320, yPercent: -40, ease: 'power1.out', opacity: 1 }, { scale: 0,  xPercent: 320, yPercent: -200, duration: 0.7, opacity: 0 });
          };
    
          section.addEventListener('mouseenter', onMouseEnter);
          section.addEventListener('mouseleave', onMouseLeave);
    
          return () => {
            section.removeEventListener('mouseenter', onMouseEnter);
            section.removeEventListener('mouseleave', onMouseLeave);
          };
        }
      }, [view_projects_cursor]);



    // SECTION 3
    const sectionRefTools = useRef(null); 
    const imageRefTools = useRef(null); 
    useEffect(() => {
        if (sectionRefTools.current && imageRefTools.current) {
          const section = sectionRefTools.current;
          const image = imageRefTools.current;
    
          const onMouseEnter = () => {
            // Animation from scale 0 to 1 and from left to right
            gsap.fromTo(image, { scale: 0, xPercent: 300, opacity: 0 }, { scale: 1, xPercent: 120, yPercent: 5, duration: 0.7, ease: 'power1.out', opacity: 1 });
          };
    
          const onMouseLeave = () => {
            // Optionally, add an animation for when the mouse leaves
            gsap.fromTo(image, { scale: 1, xPercent: 120, yPercent: 5, ease: 'power1.out', opacity: 1 }, { scale: 0, duration: 0.7, xPercent: -100, opacity: 0, yPercent: 0 });
          };
    
          section.addEventListener('mouseenter', onMouseEnter);
          section.addEventListener('mouseleave', onMouseLeave);
    
          return () => {
            section.removeEventListener('mouseenter', onMouseEnter);
            section.removeEventListener('mouseleave', onMouseLeave);
          };
        }
      }, [view_projects_cursor]);


    if(display_body){
        return (
            <div ref={bodyRef} className="body-container">
                {/* <ButtonsBody data={data}/> */}
                <div className="projects-list-container">
                    <section
                        ref={sectionRef}
                        className="single-project-container"
                        onMouseEnter={() => setCursorVisible(true, 1)} 
                        onMouseLeave={() => setCursorVisible(false, null)}
                    >
                        <div className="porject-title-container">
                        <h3 className="project-title"><span className="project-number">[01]</span>Shoop Aulart</h3>
                        </div>
                        <img ref={imageRef} src={AulartHome} alt="" className="project-image" />
                    </section>
                    <section
                        ref={sectionRefBio} 
                        className="single-project-container"
                        onMouseEnter={() => setCursorVisible(true, 2)} 
                        onMouseLeave={() => setCursorVisible(false, null)}
                    >
                        
                        <div className="porject-title-container">
                        < h3 className="project-title"><span className="project-number">[02]</span>Link_In_Bio</h3>
                        </div>
                        <img ref={imageRefBio} src={LinkInBio} alt="" className="project-image-bio" />
                    </section>
                    <section 
                        style={{borderBottom: '1px solid rgb(var(--black))'}}
                        ref={sectionRefTools}
                        className="single-project-container"
                        onMouseEnter={() => setCursorVisible(true, 3)} 
                        onMouseLeave={() => setCursorVisible(false, null)}
                    >
                        <div className="porject-title-container">
                        <h3 className="project-title"><span className="project-number">[03]</span>Tools Aulart</h3>
                        </div>
                        <img ref={imageRefTools} src={AulartTools2} alt="" className="project-image" />
                    </section>
                    
                </div>
            </div>
        )
    }
}

export default Projects
