import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';
import AulartLogo from '../../../images/aulart_logo.jpeg'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


// The Projects component displays project sections and handles animations based on mouse movements.
function ProjectsParagraphs() {


    // State and context for managing cursor visibility, animations, and global app state.
    const { display_resumes, navbar_location, dispatch, projects_resumes_animation_finished,} = useContext(GlobalContext);
    const [value, setValue] = useState(null);
    const introTag = useRef(null);
    const introTag2 = useRef(null);

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
            pargraphOne: 'At Aulart, peak times like Black Friday and major artist releases push our platform to the limits. Recognizing the need for a seamless user experience, we envisioned a transformation. The goal? To migrate high-traffic WooCommerce pages to React, enhancing site speed and user satisfaction during crucial moments.',
            pargraphTwo: 'Leading the charge, I spearheaded the redesign of these critical landing pages. My task was to not just translate WooCommerce to React, but to do so in a way that captured the essence of Aulart while significantly boosting performance.',
        },
        {
            pargraphOne: 'AULART SHOP',
            pargraphTwo: 'AULART SHOP',
        },
        {
            pargraphOne: 'AULART SHOP',
            pargraphTwo: 'AULART SHOP',
        },
    ]


    useEffect(() => {
        // Check if the target paragraph is rendered
        if (introTag2.current && value !== null && display_resumes) {
            // Split text into characters
            const characters = introTag2.current.textContent.split(" ").map((char) => {
                // Wrap each character in a span, replace space with a non-breaking space for correct spacing
                return `<span style="position: relative;" class="gsap-char">${char} </span>`;
            }).join("");
    
            // Set the innerHTML of the paragraph to the new string with spans
            introTag2.current.innerHTML = characters;
    
            // Animate with GSAP
            animateWithGSAP();
        }
    }, [introTag2, value, display_resumes]); // Empty dependency array to run once on mount
    

    const animateWithGSAP = () => {
        gsap.fromTo(".gsap-char", { opacity: 0 }, {
            delay: 2,
            opacity: 1,
            stagger: 0.048, // Adjust time between each letter appearing
            ease: "linear",
            onComplete: () => {
                dispatch({
                    type: 'SET_PROJECTS_RESUMES_ANIMATION_FINISHED',
                    payload: true,
                })
            }
        });
    };

    useGSAP(() => {
        if(value !== null && display_resumes){
            gsap.fromTo(".projects-paragraphs-title", { opacity: 0 }, {
                delay: 1.7,
                opacity: 1,
                duration: .6,
                ease: "linear"
            });
        }
    }, [value, display_resumes]);

    useGSAP(() => {
        if(projects_resumes_animation_finished){
              const boxes = document.querySelectorAll('.scroll-boxes-7');

              // Create a GSAP timeline for the animation
              const timeline = gsap.timeline({repeat: 0, yoyo: true, 
                onComplete: () => {
                    dispatch({
                        type: 'SET_BOXES_ANIMATION_FINSIHED',
                        payload: true,
                    })
                },
            });
              
              // Animate each box
              boxes.forEach((box, index) => {
                // Fade in the current box
                timeline.to(box, {opacity: 1, duration: 0.23}, `+=${index * 0.2}`);
                
                // If not the first box, fade out the previous box
                if (index > 0) {
                  timeline.to(boxes[index - 1], {opacity: 0, duration: 0.23}, `-=${0.2}`);
                }
              });
              
              // Ensure the last box fades out at the end
              timeline.to(boxes[boxes.length - 1], {opacity: 0, duration: 0.24});
        }
    }, [projects_resumes_animation_finished])

    useEffect(() => {
        return () => {
            dispatch({
                type: 'SET_PROJECTS_RESUMES_ANIMATION_FINISHED',
                payload: false,
            });
            dispatch({
                type: 'SET_BOXES_ANIMATION_FINSIHED',
                payload: false,
            });
    
        }
    }, [dispatch])
    

    if(value === null || !display_resumes) return null;
    
    return (
       <>
        <div className="projects-paragraphs-container">
            <h4 className="projects-paragraphs-title">Project Overview</h4>
            <p ref={introTag2} className="project-paragraph project-paragraph-two">{data[value].pargraphOne}</p>
         </div>
         <div className="display-resumes-bar-container" style={{marginTop: '30px', marginBottom: '0px'}}>
         {display_resumes && (
             <>
             <span className="scroll-boxes-7"></span>
             <span className="scroll-boxes-7"></span>
             <span className="scroll-boxes-7"></span>
             </>
         )}
         </div>
       </>

    )
}

export default ProjectsParagraphs