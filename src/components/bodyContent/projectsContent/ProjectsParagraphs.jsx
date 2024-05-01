import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


// The Projects component displays project sections and handles animations based on mouse movements.
function ProjectsParagraphs() {


    // State and context for managing cursor visibility, animations, and global app state.
    const { display_resumes, navbar_location, dispatch, projects_resumes_animation_finished, screenWidth} = useContext(GlobalContext);
    const [value, setValue] = useState(null);
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
        { pargraphOne: screenWidth > 600 ? 'At Aulart, peak times like Black Friday and major artist releases push our platform to the limits. Recognizing the need for a seamless user experience, we envisioned a transformation. The goal? To migrate high-traffic WooCommerce pages to React, enhancing site speed and user satisfaction during crucial moments.' : 'During peak events like Black Friday, we transformed Aulart by migrating key WooCommerce pages to React, significantly boosting site speed and user satisfaction at critical times.' },
        { pargraphOne: screenWidth > 600 ? 'Aulart Tools was developed to transform and automate Aulart content processes, starting with subtitles. It quickly evolved, incorporating tools for automated translations, content editing, and media management using APIs like OpenAI Whisper and DeepL. The project focused on minimizing manual work from days to hours enhancing efficiency and content quality across platforms, thus significantly boosting productivity and streamlining workflows within the company.' : 'Aulart Tools, using APIs like OpenAI Whisper and DeepL, automated and streamlined subtitle creation, translations, and content management, reducing manual efforts from days to hours and enhancing productivity and content quality.' },
        { pargraphOne: screenWidth > 600 ? 'In our drive for self-sufficiency, Aulart entrusted me with developing an in-house alternative to the popular LinkInBio service. This project aimed to centralize our online content, offering a streamlined gateway for our audience to access various resources, from new releases to educational material.' : 'I developed an in-house LinkInBio alternative to centralize and streamline access to Aulart\'s resources, from new releases to educational materials, enhancing user engagement and self-sufficiency.' },
    ];


    useEffect(() => {
        // Check if the target paragraph is rendered
        let wordClass = ''; 
        if (introTag2.current && value !== null && display_resumes) {
            // Split text into characters
            const characters = introTag2.current.textContent.split(" ").map((char) => {
                if (["peak", "limits.", "migrate", "pages", "enhancing", "site", "speed", "times", "platform", "satisfaction", "automate", "content", "processes", "enhancing", "translations", "editing,", "media", "management", "minimizing", "manual", "work", "efficiency", "quality", "in-house", "LinkInBio", "centralize", "online"].includes(char)) {
                    wordClass = 'red'; // Assign the class 'red' if the word matches
                    return `<span style="position: relative;" class="gsap-char ${wordClass}">${char} </span>`;
                } else {
                    return `<span style="position: relative;" class="gsap-char">${char} </span>`;
                }
                // Wrap each character in a span, replace space with a non-breaking space for correct spacing
                
            }).join("");

            
    
            // Set the innerHTML of the paragraph to the new string with spans
            introTag2.current.innerHTML = characters;
    
            // Animate with GSAP
            animateWithGSAP();
        }
    }, [introTag2, value, display_resumes]); // Empty dependency array to run once on mount
    

    const animateWithGSAP = () => {
        gsap.fromTo(".gsap-char", { opacity: 0 }, {
            delay: screenWidth >= 700 ? 2 : 1.1,
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
            gsap.fromTo(".projects-paragraphs-title", { opacity: 0, x: -350 }, {
                delay: screenWidth >= 700 ? 1.7 : .5,
                x: 0,
                duration: .6,
                ease: "linear"
            });
        }
    }, [value, display_resumes]);

    useGSAP(() => {
        if(projects_resumes_animation_finished){
              if(screenWidth > 700){
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
              } else {
                dispatch({
                    type: 'SET_BOXES_ANIMATION_FINSIHED',
                    payload: true,
                })
              }
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
         {(display_resumes && screenWidth > 700) && (
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