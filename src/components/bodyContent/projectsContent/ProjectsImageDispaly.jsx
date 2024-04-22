import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';

import ProductImage from '../../../images/aulartshop/Product.png'
import Friday2 from '../../../images/aulartshop/Friday2.png'
import LearningPaths from '../../../images/aulartshop/LearningPaths.png'

import HomeTools from '../../../images/aulartools/HomeTools.png'
import ChaptersTools from '../../../images/aulartools/ChaptersTools.png'
import ChaptersToolsBlack from '../../../images/aulartools/ChaptersToolsBlack.png'
import HomeToolsWhite from '../../../images/aulartools/HomeToolsWhite.png'
import EditorTools from '../../../images/aulartools/EditorTools.png'


import LinkinbioHome from '../../../images/linkinbio/Linkinbio.png'
import LinkinbioComputer from '../../../images/linkinbio/LinkinbioComputer.png'
import AdminView from '../../../images/linkinbio/2AdminView.png'
import CreateLink from '../../../images/linkinbio/3CreateLink.png'

import {useInView} from 'react-intersection-observer'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import ScrollToPlugin from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);
gsap.registerPlugin(ScrollToPlugin);

// The Projects component displays project sections and handles animations based on mouse movements.
function ProjectsImageDispaly() {

    // State and context for managing cursor visibility, animations, and global app state.
    const { title_animation_finshed, dispatch, display_resumes, navbar_location } = useContext(GlobalContext);
    const[animationFinsihed, setAnimationFinsihed] = useState(false);
    const [value, setValue] = useState(null);
    const [learnMorePending, setLearnMorePending] = useState(false);
    const {ref: containerRef, inView: inView1} = useInView({ threshold: .7 });
    const tlRef = useRef();

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
                image_one: ProductImage,
                image_two: LearningPaths,
                image_three: Friday2,
            },
            {
                image_one: EditorTools,
                image_two: HomeToolsWhite,
                image_three: ChaptersTools,
            },
            {
                image_one: CreateLink,
                image_two: LinkinbioComputer,
                image_three: CreateLink,
            },
        ]
        

    useEffect(() => {
        // Set the initial state of the overlay to fully cover the image upon mounting or when 'display_body' changes
        const imageRevealReset = CSSRulePlugin.getRule(".project-image-wrapper::after");
        gsap.set(imageRevealReset, { cssRule: { height: "100%" } });
    
    }, []); 
    

    useGSAP(() => {
        if (inView1 && title_animation_finshed && !animationFinsihed) {
            console.log('reseted')
            // Ensure the initial state is set, though it should already be handled by the other useEffect
            const imageOverlay = CSSRulePlugin.getRule(".project-image-wrapper::after");
            
            // Now you can focus directly on the animation timeline without resetting the height again
            let tl = gsap.timeline({ defaults: { ease: 'linear' } })
                .to(imageOverlay, { duration: .7, delay: .1, cssRule: { height: "0%" } }) // Overlay animation
                .to([".project-image-right", ".project-image-left"], { opacity: 1, duration: .1, ease: "expo.inOut" }, ">") // Next animations
                .to(".project-image-left", { opacity: 1, x: "-200", y: 32, rotation: -10, ease: "expo.inOut", duration: 1.4 }, ">")
                .to(".project-image-right", { opacity: 1, x: "200", y: 32, rotation: 10, ease: "expo.inOut", duration: 1.4 }, "<")
                .to(".project-image-center", { boxShadow: '0 15px 15px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.4)', ease: "ease.inOut", duration: 1.2 }, "<")
                .add(() => setAnimationFinsihed(true), ">");
    
            // Proper cleanup to reverse and kill the timeline when component unmounts or dependencies change
            return () => {
                tl.eventCallback("onReverseComplete", () => {
                    setAnimationFinsihed(false);
                    tl.kill();
                });
                tl.reverse();
            };
        }
    }, [inView1, title_animation_finshed, animationFinsihed, navbar_location]);
    

    const setCursorVisible = (value) => {
       if(!display_resumes){
            dispatch({
                type: 'SET_VIEW_PROJECTS_CURSOR',
                payload: {
                    text: 'learn more',
                    value: value,
                    color: 'rgba(var(--black), .85)'
                },
            })
       }
    }

    const learnMore = () => {
        if (!animationFinsihed) {
            setLearnMorePending(true);
        } else {
            executeLearnMore();
        }
    }

    const executeLearnMore = () => {
        gsap.to(".project-image-left", {opacity: 0, x: "0", y: 0, rotation: 0, ease: "expo.inOut", duration: 1 })
        gsap.to(".project-image-right", {opacity: 0,  x: "0", y: 0, rotation: 0, ease: "expo.inOut", duration: 1, 
            onComplete: () => {
                dispatch({
                    type: 'SET_DISPLAY_RESUMES',
                    payload: true,
                });
                dispatch({
                    type: 'SET_VIEW_PROJECTS_CURSOR',
                    payload: {
                        text: 'learn more',
                        value: false,
                        color: 'rgba(var(--black), .85)'
                    },
                });
                setLearnMorePending(false); // Reset the pending flag
            } 
        });
    }


    useEffect(() => {
        if (animationFinsihed && learnMorePending) {
            executeLearnMore();
        }
    }, [animationFinsihed, learnMorePending]);
    
    
    

    useEffect(() => {
        return () => {
            setAnimationFinsihed(false)
            dispatch({
                type: 'SET_DISPLAY_RESUMES',
                payload: false,
            });
        }
    }, [dispatch])

    useGSAP(() => {
        if(display_resumes){
            gsap.to(window, {
                duration: 3,
                scrollTo: {
                  y: ".projects-paragraphs-container",
                  offsetY: 150 // Scrolls to 100 pixels above the ".projects-paragraphs-container"
                }
              });
              const boxes = document.querySelectorAll('.scroll-boxes-6');

              // Create a GSAP timeline for the animation
              const timeline = gsap.timeline({repeat: 0, yoyo: true});
              
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
    }, [display_resumes])

    if(value === null) return null;

    return (
        <>
            <div ref={containerRef} className="project-image-display-container">
                <div className="project-images" >
                        <img style={{cursor: display_resumes ? 'default' : 'pointer'}} src={data[value].image_one} onClick={learnMore} alt="" className="project-image project-image-left" onMouseEnter={() => setCursorVisible(true)} onMouseLeave={() => setCursorVisible(false)}/>
                        <div className="project-image-wrapper">
                            <img style={{cursor: display_resumes ? 'default' : 'pointer'}} src={data[value].image_two} onClick={learnMore} alt="" className="project-image project-image-center" onMouseEnter={() => setCursorVisible(true)} onMouseLeave={() => setCursorVisible(false)}/>
                        </div>
                        <img style={{cursor: display_resumes ? 'default' : 'pointer'}} src={data[value].image_three} onClick={learnMore} alt="" className="project-image project-image-right" onMouseEnter={() => setCursorVisible(true)} onMouseLeave={() => setCursorVisible(false)}/>      
                </div>   
                {/* <div className="header"><p ref={titleRef}  className="projects-images-title">resumes</p></div> */}
            </div>
                <div className="display-resumes-bar-container">
                    {display_resumes && (
                        <>
                        <span className="scroll-boxes-6"></span>
                        <span className="scroll-boxes-6"></span>
                        <span className="scroll-boxes-6"></span>
                        </>
                    )}
                </div>
        </>
    )
}

export default ProjectsImageDispaly























// import '../../../pages/projects/Projects.css'
// import GlobalContext from '../../../context/GlobalContext';
// import { useEffect, useState, useContext, useRef } from 'react'
// import { useLocation,   useNavigate, useParams } from 'react-router-dom';
// import ProductImage from '../../../images/aulartshop/Product.png'
// import CheckoutImage from '../../../images/aulartshop/ArtistCheckout.png'
// import SliderImage from '../../../images/aulartshop/ArtistSlider.png'
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { IoIosSearch } from "react-icons/io";


// // The Projects component displays project sections and handles animations based on mouse movements.
// function ProjectsImageDispaly() {

//     // State and context for managing cursor visibility, animations, and global app state.
//     const { view_projects_cursor, display_body, navbar_location, dispatch, mouse_position } = useContext(GlobalContext);
//       // Refs for elements we'll animate
//       const titleRef = useRef(null);
//     //   const boxRef = useRef(null);
//     //   const imagesRef = useRef({ left: useRef(null), right: useRef(null) });
//     //   const wrapperImgRef = useRef(null);
//     //   const imgRef = useRef(null);
  
//     //   useGSAP(() => {
//     //     // React way to wrap letters in spans (moved outside GSAP timeline for clarity)
//     //     if (titleRef.current) {
//     //         const letters = titleRef.current.textContent.split('').map((letter, index) => `<span key=${index} className='letter'>${letter}</span>`).join('');
//     //         titleRef.current.innerHTML = letters;
//     //     }
    
//     //     // GSAP animations corrected for timing
//     //     const tl = gsap.timeline();
    
//     //     // Adding the letter animation with corrected delay and duration
//     //     tl.to(".title .letter", {
//     //         translateY: [100, 0],
//     //         translateZ: 0,
//     //         opacity: [0, 1],
//     //         ease: "expo.out",
//     //         duration: 2, // Duration corrected to 2 seconds for each letter
//     //         stagger: {
//     //             each: 0.04, // Corrected to apply a delay of 0.04 seconds between each letter
//     //             from: "start",
//     //         },
//     //         delay: 4.8, // Initial delay before starting the letter animations
//     //     });
    
//     //     // Continuing with the rest of the animations, ensuring correct relative timing
//     //     tl.to('.box', { y: "-100%", ease: "expo.inOut", duration: 2.4, delay: 1 }, 0)
//     //       .fromTo("img", { scale: 2 }, { scale: 1, ease: "expo.inOut", duration: 4 }, 0)
//     //       .to(".wrapper-img", { width: 400, height: 500, ease: "expo.inOut", duration: 2.4 }, "-=2.4") // Adjusted to start at the same time as the image scaling
//     //       .from(".img", { opacity: 0, ease: "expo.inOut", duration: 0.4 }, "-=2") // Adjusted for overlap
//     //       .to(".left", { x: "-400", rotation: 10, ease: "expo.inOut", duration: 2 }, "-=2")
//     //       .to(".right", { x: "100", rotation: 10, ease: "expo.inOut", duration: 2 }, "-=2")
//     //       .staggerFrom(".menu > div, .hero-container > div", 2, { opacity: 0, y: 30, ease: "expo.inOut" }, 0.1, "-=1.8"); // Adjusted stagger timing
    
//     // }, []);
    

//     // let textWrapper = document.querySelector('.title')
//     // textWrapper.innerHTML = textWrapper.textContent.replace(
//     //     /\S/g, "<span className='letter'>$&</span>"
//     // );

//     // anime.timeline().add({
//     //     targets: ".title . letter",
//     //     translateY: [100, 0],
//     //     translateZ: 0,
//     //     opacity: [0, 1],
//     //     easing: "easeOutExpo",
//     //     duration: 2000,
//     //     delay: (el, i)=> 4800 + 40 * i,
//     // });

//     // TweenMax.to(".box", 2.4,{
//     //     y: "-100%",
//     //     ease: Expo.easeInOut,
//     //     delay: 1,
//     // })

//     // TweenMax.from("img", 4,{
//     //     scale: "2",
//     //     ease: Expo.easeInOut,
//     //     delay: 0,
//     // })

//     // TweenMax.to(".wrapper-img", 2.4,{
//     //     width: "400",
//     //     height: "500",
//     //     ease: Expo.easeInOut,
//     //     delay: 3.6,
//     // })

//     // TweenMax.from(".img", 0.4,{
//     //     opacity: "0",
//     //     ease: Expo.easeInOut,
//     //     delay: 3.4,
//     // })

//     // TweenMax.to(".left", 2,{
//     //     x: "-400",
//     //     rotation: 10,
//     //     ease: Expo.easeInOut,
//     //     delay: 3.8,
//     // })

//     // TweenMax.to(".right", 2,{
//     //     x: "100",
//     //     rotation: 10,
//     //     ease: Expo.easeInOut,
//     //     delay: 3.8,
//     // })

//     // TweenMax.staggerFrom(
//     //     ".menu > div, .hero-container > div", 2, {
//     //         opacity: 0,
//     //         y: 30,
//     //         ease: Expo.easeInOut,
//     //         delay: 4,
//     //     }
//     // )

//     return (
//         <div className="project-image-display-container">
//            <div className="project-images">
//                 <img src={ProductImage} alt="" className="project-image project-image-left" />
//                 <img src={CheckoutImage} alt="" className="project-image project-image-center" />
//                 <img src={SliderImage} alt="" className="project-image project-image-right" />      
//            </div>
           
//            <div className="header"><p ref={titleRef}  className="title">antidote</p></div>
//         </div>
//     )
// }

// export default ProjectsImageDispaly