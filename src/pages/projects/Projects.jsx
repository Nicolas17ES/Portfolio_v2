import ButtonsBody from '../../components/buttonsBody/ButtonsBoody'
import './Projects.css'
import useBodyAnimation from '../../hooks/useBodyAnimation'; // Import your custom hook
import AulartHome from '../../images/AulartHome.png'
import AulartTools from '../../images/AulartTools.png'
import AulartTools2 from '../../images/AulartTools2.png'
import LinkInBio from '../../images/LinkBio.png'

import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, Link } from 'react-router-dom';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


// The Projects component displays project sections and handles animations based on mouse movements.
function Projects() {
    // Hooks for navigating and determining the current path.
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname.substring(1);

    // State and context for managing cursor visibility, animations, and global app state.
    const { view_projects_cursor, display_body, navbar_location, dispatch, mouse_position } = useContext(GlobalContext);

    // useRef hooks for DOM references to enable direct manipulation.
    const bodyRef = useRef(null);
    const listItemRefs = [useRef(null), useRef(null), useRef(null)];

    // useState hooks for local component state management.
    const [entered, setEntered] = useState(false); // Tracks if the mouse has entered a project section.
    const [mousePositionSection, setMousePositionSection] = useState({ x: 0, y: 0 }); // Local state for mouse position within a project section.
    const [imageAnimation, setImageAnimation] = useState({ state: false, index: null }); // Manages the state of image animations.
    const [blockAnimations, setBlockAnimations] = useState(false); // Manages the state of image animations.
    // const [initialAnimationFinished, setInitialAnimationFinished] = useState(false); // Manages the state of image animations.

    // Custom hook to apply animations to the body element based on navigation state.
    useBodyAnimation(bodyRef, navbar_location, pathname, navigate);

    // Function to toggle the visibility of the custom cursor and dispatch relevant actions to the global context.
    const setCursorVisible = (value, index) => {
        dispatch({ type: 'SET_PROJECT_INDEX_HOVERED', payload: index });
        dispatch({ 
            type: 'SET_VIEW_PROJECTS_CURSOR', 
            payload: {
                text: 'VIEW',
                value: value,
                background: true,
            }, 
        });

        // Adjusts z-index of project sections based on cursor interaction.
        const sections = ['container-shoop', 'container-bio', 'container-tools'];
        sections.forEach((sectionClass, idx) => {
            const element = document.querySelector(`.${sectionClass}`);
            if (element) {
                element.style.zIndex = (value && index === idx + 1) ? 1 : 'auto';
            }
        });
    };

    // GSAP animations applied on component mount.
    useGSAP(() => {
        if (display_body) {
            gsap.from('.single-project-container', {
                xPercent: -150,
                duration: 1.4,
                ease: 'Power3.easeOut',
                // stagger: 0.3,
                delay: .3,
                // onComplete: () => {
                //     setInitialAnimationFinished(true)
                // }
            });
            gsap.from('.project-title', {
                y: 200,
                duration: 1.5,
                ease: 'Power3.easeOut',
                // stagger: 0.3,
                delay: .7,
            });
        }
    }, [display_body]);

    // Function to handle mouse move within a project section, updating local state for mouse position.
    const handleMouseMove = (e, ref) => {
        const boundingRect = ref.current.getBoundingClientRect();
        const x = e.clientX - boundingRect.left;
        const y = e.clientY - boundingRect.top;
        setMousePositionSection({ x, y });
    };

    // Adds mouse move event listener to project sections dynamically based on mouse position at render time.
    useEffect(() => {
        const timer = setTimeout(() => {
            listItemRefs.forEach((ref, index) => {
                if (!entered && ref.current && mouse_position.x !== null && mouse_position.y !== null) {
                    const rect = ref.current.getBoundingClientRect();
                    const mouseX = mouse_position.x;
                    const mouseY = mouse_position.y;
                    if (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
                        addMouseMoveListener(index);
                        setEntered(true); // Indicates the mouse has entered a section.
                    }
                }
            });
        }, 0);
        return () => clearTimeout(timer);
    }, [view_projects_cursor]);

    // Function to add a mouse move listener to a project section and manually invoke the handler for initial mouse position.
    const addMouseMoveListener = (index) => {
        const element = listItemRefs[index].current;
        if (element) {
            setImageAnimation({
                state: true,
                index: index,
            });

            // Define the mouse move handler specific to this element.
            const mouseMoveHandler = (e) => handleMouseMove(e, listItemRefs[index]);

            // Attach the event listener for mouse movement.
            element.addEventListener('mousemove', mouseMoveHandler);

            // Immediately invoke the handler if the mouse is already within the section's bounds.
            // This ensures the animation state is correct even if the mouse doesn't move.
            const rect = element.getBoundingClientRect();
            if (mouse_position.x >= rect.left && mouse_position.x <= rect.right &&
                mouse_position.y >= rect.top && mouse_position.y <= rect.bottom) {
                mouseMoveHandler({ clientX: mouse_position.x, clientY: mouse_position.y });
            }
        }
    };

    // Function to remove the mouse move listener from a project section.
    // This helps prevent unnecessary event listeners when the mouse is not over the section.
    const removeMouseMoveListener = (index) => {
        gsap.to(`.project-image${imageAnimation.index}`, {
            opacity: 0,
            duration: .4,
            ease: "power2.out"
        });
        setMousePositionSection({ x: 0, y: 0 }); // Reset the mouse position state.
        const element = listItemRefs[index].current;
        if (element) {
            setImageAnimation({
                state: false,
                index: null,
            });
            // Remove the event listener for mouse movement.
            element.removeEventListener('mousemove', handleMouseMove);
        }
    };

    // Inside your functional component
const prevMousePositionRef = useRef({ x: 0, y: 0 });

    // useEffect hook to update the position of the animated image based on the current mouse position.
    useEffect(() => {
        if (imageAnimation.state && imageAnimation.index !== null) {
            // Access the current mouse position from state.
            const { x: mouseX, y: mouseY } = mousePositionSection;

            // Only proceed if the mouse position is non-zero to avoid unnecessary animations.
            if (mouseX !== 0 && mouseY !== 0) {
                const imageElement = document.querySelector(`.project-image${imageAnimation.index}`);
                if (imageElement) {
                    // Apply GSAP animations to move the image to the mouse position and adjust opacity.
                    gsap.to(imageElement, {
                        y: mouseY,
                        opacity: 1,
                        duration: 0.4,
                        ease: "power2.out"
                    });

                    gsap.to(imageElement, {
                        opacity: 1,
                        duration: 0.4,
                        ease: "power1.in"
                    });
                }
            }

            // Store the current mouse position for comparison in future renders.
            prevMousePositionRef.current = { x: mouseX, y: mouseY };
        }
    }, [imageAnimation, mousePositionSection]);

    // Render the component, dynamically adjusting classes and styles based on state.

    // select a project to view
const viewProject = (index) => {
    setBlockAnimations(true);
    setCursorVisible(false, null);
    removeMouseMoveListener(0);
    const tl = gsap.timeline({
        
    });
    tl.to('.project-image', {
        opacity: 0,
        duration: 0.3,
        ease: 'Power3.easeOut',
    });
    tl.to('.single-project-container', {
        xPercent: -110,
        duration: .7,
        ease: 'Power3.easeOut',
        stagger: 0.15,
        onComplete: () => {
            navigate(`/projects/view/${index}`);
        }
    });
};




    if(display_body){
        return (
            <div ref={bodyRef} className="body-container">
                {/* <ButtonsBody data={data}/> */}
                <div className="projects-list-container">
                    
                        <section
                            onClick={() => viewProject('aulart-shop')}
                            ref={listItemRefs[0]} 
                            className="single-project-container container-shoop"
                            onMouseOver={() => { 
                            if(!blockAnimations){
                                setCursorVisible(true, 1)
                                addMouseMoveListener(0)
                            }
                            }} 
                            onMouseLeave={() => {
                            if(!blockAnimations){
                                setCursorVisible(false, null)
                                removeMouseMoveListener(0)
                            }
                            }} 
                        
                        >
                            <div className="porject-title-container">
                            <h3 className="project-title"><span className="project-number">[01]</span>Shoop Aulart</h3>
                            </div>
                            <img src={AulartHome} alt="" className={`project-image project-image${0}`} />
                        </section>
                    
                    
                    <section
                        onClick={() => viewProject('aulart-tools')}
                         ref={listItemRefs[1]} 
                        className="single-project-container container-bio"
                        onMouseOver={() => { 
                          setCursorVisible(true, 2)
                          addMouseMoveListener(1)
                        }} 
                        onMouseLeave={() => {
                          setCursorVisible(false, null)
                          removeMouseMoveListener(1)
                        }} 
                    >
                        
                        <div className="porject-title-container">
                        < h3 className="project-title"><span className="project-number">[02]</span>Tools Aulart</h3>
                        </div>
                        <img  src={AulartTools2} alt="" className={`project-image project-image${1}`}/>
                    </section>
                    
                    <section 
                        onClick={() => viewProject('linkinbio')}
                         ref={listItemRefs[2]} 
                        style={{borderBottom: '1px solid rgb(var(--black))'}}                     
                        className="single-project-container container-tools"
                        onMouseOver={() => { 
                          setCursorVisible(true, 3)
                          addMouseMoveListener(2)
                        }} 
                        onMouseLeave={() => {
                          setCursorVisible(false, null)
                          removeMouseMoveListener(2)
                          }} 
                    >
                        <div className="porject-title-container">
                        <h3 className="project-title"><span className="project-number">[03]</span>Link_In_Bio</h3>
                        </div>
                        <img src={LinkInBio} alt="" className={`project-image project-image${2}`} />
                    </section>
                    
                </div>
            </div>
        )
    }
}

export default Projects









// import ButtonsBody from '../../components/buttonsBody/ButtonsBoody'
// import './Projects.css'
// import useBodyAnimation from '../../hooks/useBodyAnimation'; // Import your custom hook
// import AulartHome from '../../images/AulartHome.png'
// import AulartTools from '../../images/AulartTools.png'
// import AulartTools2 from '../../images/AulartTools2.png'
// import LinkInBio from '../../images/LinkBio.png'

// import GlobalContext from '../../context/GlobalContext'
// import { useEffect, useState, useContext, useRef } from 'react'
// import { useLocation,   useNavigate, Link } from 'react-router-dom';

// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";


// // The Projects component displays project sections and handles animations based on mouse movements.
// function Projects() {
//     // Hooks for navigating and determining the current path.
//     const location = useLocation();
//     const navigate = useNavigate();
//     const pathname = location.pathname.substring(1);

//     // State and context for managing cursor visibility, animations, and global app state.
//     const { view_projects_cursor, display_body, navbar_location, dispatch, mouse_position } = useContext(GlobalContext);

//     // useRef hooks for DOM references to enable direct manipulation.
//     const bodyRef = useRef(null);
//     const listItemRefs = [useRef(null), useRef(null), useRef(null)];

//     // useState hooks for local component state management.
//     const [entered, setEntered] = useState(false); // Tracks if the mouse has entered a project section.
//     const [mousePositionSection, setMousePositionSection] = useState({ x: 0, y: 0 }); // Local state for mouse position within a project section.
//     const [imageAnimation, setImageAnimation] = useState({ state: false, index: null }); // Manages the state of image animations.
//     const [blockAnimations, setBlockAnimations] = useState(false); // Manages the state of image animations.
//     // const [initialAnimationFinished, setInitialAnimationFinished] = useState(false); // Manages the state of image animations.

//     // Custom hook to apply animations to the body element based on navigation state.
//     useBodyAnimation(bodyRef, navbar_location, pathname, navigate);

//     // Function to toggle the visibility of the custom cursor and dispatch relevant actions to the global context.
//     const setIndex = (value, index) => {
//         dispatch({ type: 'SET_PROJECT_INDEX_HOVERED', payload: index });

//         // Adjusts z-index of project sections based on cursor interaction.
//         const sections = ['container-shoop', 'container-bio', 'container-tools'];
//         sections.forEach((sectionClass, idx) => {
//             const element = document.querySelector(`.${sectionClass}`);
//             if (element) {
//                 element.style.zIndex = (value && index === idx + 1) ? 1 : 'auto';
//             }
//         });
//     };

//     const setCursorVisible = (value) => {
//         console.log('triiigering', value)
//         dispatch({ 
//             type: 'SET_VIEW_PROJECTS_CURSOR', 
//             payload: {
//                 text: 'VIEW',
//                 value: value,
//             }, 
//         });
//     };

//     // GSAP animations applied on component mount.
//     useGSAP(() => {
//         if (display_body) {
//             gsap.from('.single-project-container', {
//                 xPercent: -150,
//                 duration: 1.4,
//                 ease: 'Power3.easeOut',
//                 stagger: 0.3,
//                 delay: .3,
//                 // onComplete: () => {
//                 //     setInitialAnimationFinished(true)
//                 // }
//             });
//             gsap.from('.project-title', {
//                 y: 200,
//                 duration: 1.5,
//                 ease: 'Power3.easeOut',
//                 stagger: 0.3,
//                 delay: .7,
//             });
//         }
//     }, [display_body]);

//     // Function to handle mouse move within a project section, updating local state for mouse position.
//     const handleMouseMove = (e, ref) => {
//         const boundingRect = ref.current.getBoundingClientRect();
//         const x = e.clientX - boundingRect.left;
//         const y = e.clientY - boundingRect.top;
//         setMousePositionSection({ x, y });
//     };

//     // Adds mouse move event listener to project sections dynamically based on mouse position at render time.
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             listItemRefs.forEach((ref, index) => {
//                 if (!entered && ref.current && mouse_position.x !== null && mouse_position.y !== null) {
//                     const rect = ref.current.getBoundingClientRect();
//                     const mouseX = mouse_position.x;
//                     const mouseY = mouse_position.y;
//                     if (mouseX >= rect.left && mouseX <= rect.right && mouseY >= rect.top && mouseY <= rect.bottom) {
//                         addMouseMoveListener(index);
//                         setEntered(true); // Indicates the mouse has entered a section.
//                     }
//                 }
//             });
//         }, 0);
//         return () => clearTimeout(timer);
//     }, [view_projects_cursor]);

//     // Function to add a mouse move listener to a project section and manually invoke the handler for initial mouse position.
//     const addMouseMoveListener = (index) => {
//         const element = listItemRefs[index].current;
//         if (element) {
//             setImageAnimation({
//                 state: true,
//                 index: index,
//             });

//             // Define the mouse move handler specific to this element.
//             const mouseMoveHandler = (e) => handleMouseMove(e, listItemRefs[index]);

//             // Attach the event listener for mouse movement.
//             element.addEventListener('mousemove', mouseMoveHandler);

//             // Immediately invoke the handler if the mouse is already within the section's bounds.
//             // This ensures the animation state is correct even if the mouse doesn't move.
//             const rect = element.getBoundingClientRect();
//             if (mouse_position.x >= rect.left && mouse_position.x <= rect.right &&
//                 mouse_position.y >= rect.top && mouse_position.y <= rect.bottom) {
//                 mouseMoveHandler({ clientX: mouse_position.x, clientY: mouse_position.y });
//             }
//         }
//     };

//     // Function to remove the mouse move listener from a project section.
//     // This helps prevent unnecessary event listeners when the mouse is not over the section.
//     const removeMouseMoveListener = (index) => {
//         gsap.to(`.project-image${imageAnimation.index}`, {
//             opacity: 0,
//             duration: .4,
//             ease: "power2.out"
//         });
//         setMousePositionSection({ x: 0, y: 0 }); // Reset the mouse position state.
//         const element = listItemRefs[index].current;
//         if (element) {
//             setImageAnimation({
//                 state: false,
//                 index: null,
//             });
//             // Remove the event listener for mouse movement.
//             element.removeEventListener('mousemove', handleMouseMove);
//         }
//     };

//     // Inside your functional component
// const prevMousePositionRef = useRef({ x: 0, y: 0 });

//     // useEffect hook to update the position of the animated image based on the current mouse position.
//     useEffect(() => {
//         if (imageAnimation.state && imageAnimation.index !== null) {
//             // Access the current mouse position from state.
//             const { x: mouseX, y: mouseY } = mousePositionSection;

//             // Only proceed if the mouse position is non-zero to avoid unnecessary animations.
//             if (mouseX !== 0 && mouseY !== 0) {
//                 const imageElement = document.querySelector(`.project-image${imageAnimation.index}`);
//                 if (imageElement) {
//                     // Apply GSAP animations to move the image to the mouse position and adjust opacity.
//                     gsap.to(imageElement, {
//                         y: mouseY,
//                         opacity: 1,
//                         duration: 0.4,
//                         ease: "power2.out"
//                     });

//                     gsap.to(imageElement, {
//                         opacity: 1,
//                         duration: 0.4,
//                         ease: "power1.in"
//                     });
//                 }
//             }

//             // Store the current mouse position for comparison in future renders.
//             prevMousePositionRef.current = { x: mouseX, y: mouseY };
//         }
//     }, [imageAnimation, mousePositionSection]);

//     // Render the component, dynamically adjusting classes and styles based on state.

//     // select a project to view
// const viewProject = (index) => {
//     setBlockAnimations(true);
//     setCursorVisible(false, null);
//     removeMouseMoveListener(0);
//     const tl = gsap.timeline({
//         onComplete: () => {
//             navigate(`/projects/view/${index}`);
//         }
//     });
//     tl.to('.project-image', {
//         opacity: 0,
//         duration: 0.3,
//         ease: 'Power3.easeOut',
//     });
//     tl.to('.single-project-container', {
//         xPercent: -115,
//         duration: 1,
//         ease: 'Power3.easeOut',
//         stagger: 0.2,
//     });
// };


//     if(display_body){
//         return (
//             <div ref={bodyRef} className="body-container">
//                 {/* <ButtonsBody data={data}/> */}
//                 <div className="projects-list-container"
//                  onMouseOver={() => { 
//                     if(!blockAnimations){
//                         setCursorVisible(true)
//                     }
//                     }} 
//                     onMouseLeave={() => {
//                     if(!blockAnimations){
//                         setCursorVisible(false)
//                     }
//                     }} >
                    
//                         <section
//                             onClick={(e) => {
//                                 e.stopPropagation(); // Prevent the click event from reaching the parent
//                                 viewProject('aulart-shop');
//                             }}
//                             ref={listItemRefs[0]} 
//                             className="single-project-container container-shoop"
//                             onMouseOver={(e) => { 
//                                 e.stopPropagation();
//                                 if(!blockAnimations){
//                                     setIndex(true, 1)
//                                     addMouseMoveListener(0)
//                                 }
//                             }} 
//                             onMouseLeave={(e) => {
//                                 e.stopPropagation() 
//                                 if(!blockAnimations){
//                                     setIndex(false, null)
//                                     removeMouseMoveListener(0)
//                                 }
//                             }} 
                        
//                         >
//                             <div className="porject-title-container">
//                             <h3 className="project-title"><span className="project-number">[01]</span>Shoop Aulart</h3>
//                             </div>
//                             <img src={AulartHome} alt="" className={`project-image project-image${0}`} />
//                         </section>
                    
                    
//                     <section
//                         onClick={(e) => {
//                             e.stopPropagation(); // Prevent the click event from reaching the parent
//                             viewProject('aulart-tools');
//                         }}

//                         ref={listItemRefs[1]} 
//                         className="single-project-container container-bio"
//                         onMouseOver={(e) => { 
//                             e.stopPropagation();
//                             if(!blockAnimations){
//                                 setIndex(true, 2)
//                                 addMouseMoveListener(1)
//                             }
//                         }} 
//                         onMouseLeave={(e) => {
//                             e.stopPropagation() 
//                             if(!blockAnimations){
//                                 setIndex(false, null)
//                                 removeMouseMoveListener(1)
//                             }
//                         }} 
//                     >
                        
//                         <div className="porject-title-container">
//                         < h3 className="project-title"><span className="project-number">[02]</span>Tools Aulart</h3>
//                         </div>
//                         <img  src={AulartTools2} alt="" className={`project-image project-image${1}`}/>
//                     </section>
                    
//                     <section
//                         onClick={(e) => {
//                             e.stopPropagation(); // Prevent the click event from reaching the parent
//                             viewProject('linkinbio');
//                         }}
//                         ref={listItemRefs[2]} 
//                         style={{borderBottom: '1px solid rgb(var(--black))'}}                     
//                         className="single-project-container container-tools"
//                         onMouseOver={(e) => { 
//                             e.stopPropagation();
//                             if(!blockAnimations){
//                                 setIndex(true, 3)
//                                 addMouseMoveListener(2)
//                             }
//                         }} 
//                         onMouseLeave={(e) => {
//                             e.stopPropagation() 
//                             if(!blockAnimations){
//                                 setIndex(false, null)
//                                 removeMouseMoveListener(2)
//                             }
//                         }}  
//                     >
//                         <div className="porject-title-container">
//                         <h3 className="project-title"><span className="project-number">[03]</span>Link_In_Bio</h3>
//                         </div>
//                         <img src={LinkInBio} alt="" className={`project-image project-image${2}`} />
//                     </section>
                    
//                 </div>
//             </div>
//         )
//     }
// }

// export default Projects
