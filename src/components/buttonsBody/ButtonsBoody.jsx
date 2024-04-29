import { useEffect, useState, useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import './ButtonsBody.css'
import '../../pages/music/Music.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
/**
 * ButtonsBody Component
 * This component is responsible for rendering and managing a set of interactive buttons.
 * Each button, when clicked or hovered over, updates the global context and triggers visual changes.
 */

gsap.registerPlugin(ScrollTrigger); 

function ButtonsBody({data}) {
    // Access global context for dispatching actions
    const {dispatch, display_body, navbar_location, change_slide, button_state, display_image_overlay} = useContext(GlobalContext);

    // State to track the active (clicked or hovered) button index
    const [activeIndex, setActiveIndex] = useState(-1);

    // State to track if any button has been clicked
    const [isCLicked, setIsCliked] = useState(false);
    // Function to generate a random number within a specified range
    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    /**
     * Enhance function to split button text into characters and wrap each character for animation
     * @param {string} text - The text of the button to be enhanced
     * @returns JSX elements representing each character with animation styles
     */
    const enhance = text => {
        return text.split("").map((value, index) => {
            return (
                <span key={index} className="outer">
                    <span className="inner" style={{animationDelay: `${rand(-5000, 0)}ms`}}>
                        <span className="letter" style={{animationDelay: `${index * 1000 }ms`}}>
                            {value}
                        </span>
                    </span>
                </span>
            )
        })
    };

    /**
     * setIndex function to handle button click
     * @param {number} index - The index of the clicked button
     * Sets the active button index, marks it as clicked, and dispatches the clicked state
     */
    const setIndex = (index) => {
        if(!button_state){
            dispatch({
                type: 'SET_CHANGE_SLIDE',
                payload: {value: index, origin: true},
            })
        } else {
            dispatch({
                type: 'SET_EXIT_COMPONENT',
                payload: true,
            })
            setTimeout(() => {
                dispatch({
                    type: 'SET_EXIT_COMPONENT',
                    payload: false,
                })
                setIsCliked(true);
                setActiveIndex(index);
                dispatch({
                    type: 'SET_CLICKED_BUTTON',
                    payload: { clicked: true, value: index},
                });
            }, 1000)
            
        }
       
    };

    

    // Style for dimming inactive buttons
    const styles = { opacity: '0.5' };

    // Render buttons with mapped data, event handlers, and dynamic styles one by one with gsap animation
    useGSAP(() => {
        if(display_body && (!button_state || !button_state.clicked)){
            gsap.fromTo('.button-body', 
                { xPercent: -150, opacity: 0}, // Starting properties
                { xPercent: 0, 
                    opacity: 1, 
                    duration: 1,  
                    ease: "linear", 
                    delay: .5, 
                    stagger: {
                        each: 0.1, // Time between each animation start
                        from: "end" // Start staggering from the end
                  }, } // Ending properties
            );
        } else if (display_body && button_state && button_state.clicked) {
            const tl = gsap.timeline({
                scrollTrigger: {
                        trigger: '.button-body',
                        start: "top 99%", // Trigger animation when the top of the button is 80% in view
                        toggleActions: "play none none none", 
                    }
                })
                .fromTo(['.button-body', '.highlight-button'],
                    { xPercent: -300, opacity: 0 }, // Starting properties
                    {
                        xPercent: 0,
                        opacity: 1,
                        duration: 1,
                        ease: "linear",
                        stagger: {
                            each: 0.1, // Time between each animation start
                            from: "start", // Start staggering from the end
                        }
                    }
                );
        }
      }, [display_body]);

      useGSAP(() => {
        if (display_image_overlay && (!button_state || !button_state.clicked)) {
            gsap.to('.buttons-body-container', {
            opacity: 0, // Set opacity to 0
            duration: 1, // Duration of the animation
            ease: 'linear', // Use linear easing for the animation
            });
        }
        }, [display_image_overlay, button_state]);



// onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}   
    return (
        <section className="buttons-body-container text">
            {data.buttons.map((button, index) => {
                return <button key={index} style={{textShadow: ((change_slide.value === index || button_state?.value === index) && navbar_location === 'music') ? '0 0 8px rgba(255, 255, 255, 0.8)' : null, transform: ((change_slide.value === index || button_state?.value === index) && navbar_location === 'music') ? 'scale(1.1)' : null}} onClick={() => setIndex(index)} className='button-body word fancy'>{enhance(button.name)}</button>
            })}
        </section>
    )
}

export default ButtonsBody

