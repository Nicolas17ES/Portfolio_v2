import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';
import ProductImage from '../../../images/aulartshop/Product.png'
import Friday2 from '../../../images/aulartshop/Friday2.png'
import LearningPaths from '../../../images/aulartshop/LearningPaths.png'
import {useInView} from 'react-intersection-observer'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CSSRulePlugin from "gsap/CSSRulePlugin";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);

// The Projects component displays project sections and handles animations based on mouse movements.
function ProjectsImageDispaly() {

    // State and context for managing cursor visibility, animations, and global app state.
    const { title_animation_finshed } = useContext(GlobalContext);
    const {ref: containerRef, inView: inView1} = useInView({ threshold: 0.5 });
    const titleRef = useRef(null);


      useGSAP(() => {
        if(inView1 && title_animation_finshed){
            gsap.to(".project-image-center",{ opacity: 1, y: 0, ease: "expo.inOut", duration: 2 })
            gsap.from(".project-image", { scale: 1.7, ease: "expo.inOut", duration: 1.5, delay: 1.3, })
            gsap.to([".project-image-right", ".project-image-left"], { opacity: 1, duration: .3, delay: 2, ease: "expo.inOut"})
            gsap.to(".project-image-left", { x: "-200", y: 32, rotation: -10, ease: "expo.inOut", delay: 2, duration: 1.5 })
            gsap.to(".project-image-right", { x: "200", y: 32, rotation: 10, ease: "expo.inOut", delay: 2, duration: 1.5 })
            gsap.fromTo(".projects-images-title", { y: 130, opacity: 0, ease: "expo.inOut"}, { y: 0, opacity: 1, ease: "expo.inOut", delay: 2.2, duration: 2 })
        }
    
    }, [inView1, title_animation_finshed]);


    

    if(!title_animation_finshed) return null;

    return (
        <div ref={containerRef} className="project-image-display-container">
           <div className="project-images">
                <img src={ProductImage} alt="" className="project-image project-image-left"/>
                <img src={LearningPaths} alt="" className="project-image project-image-center"/>
                <img src={Friday2} alt="" className="project-image project-image-right"/>      
           </div>
           
           <div className="header"><p ref={titleRef}  className="projects-images-title">resume</p></div>
        </div>
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