import { useEffect, useState, useContext } from 'react'
import GlobalContext from '../../context/GlobalContext'
import './ButtonsBody.css'
import '../../pages/music/Music.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

/**
 * ButtonsBody Component
 * This component is responsible for rendering and managing a set of interactive buttons.
 * Each button, when clicked or hovered over, updates the global context and triggers visual changes.
 */
function ButtonsBody({data}) {
    // Access global context for dispatching actions
    const {dispatch, display_body, navbar_location, change_slide, button_state} = useContext(GlobalContext);

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
            // dispatch({
            //     type: 'SET_IMAGE_OVERLAY',
            //     payload: true
            // })
            setIsCliked(true);
            setActiveIndex(index);
            dispatch({
                type: 'SET_CLICKED_BUTTON',
                payload: { clicked: true, value: index},
            });
        }
        // dispatch({
        //     type: 'SET_SLIDE_ACTIVE_INDEX',
        //     payload: null,
        // });
        // dispatch({
        //     type: 'SET_ANIMATION_VALUE',
        //     payload: null
        // })
        // dispatch({
        //     type: 'SET_CAROUSEL_INDEX',
        //     payload: index
        // })
       
    };

    /**
     * handleMouseEnter function to handle mouse enter event on button
     * @param {number} index - The index of the button being hovered
     * Dispatches the current hover index to the global context
     */
    // const handleMouseEnter = (index) => {
    //     dispatch({ type: 'SET_BUTTON_INDEX', payload: index });
    // };

    // /**
    //  * handleMouseLeave function to handle mouse leave event on button
    //  * @param {number} index - The index of the button being unhovered
    //  * Resets the hover index in global context unless a button is clicked
    //  */
    // const handleMouseLeave = (index) => {
    //     if(!isCLicked) {
    //         dispatch({ type: 'SET_BUTTON_INDEX', payload: null });
    //     } else {
    //         dispatch({ type: 'SET_BUTTON_INDEX', payload: activeIndex });
    //     }
    // };

    // Style for dimming inactive buttons
    const styles = { opacity: '0.5' };

    // Render buttons with mapped data, event handlers, and dynamic styles one by one with gsap animation
    useGSAP(() => {
        if(display_body){
            gsap.fromTo('.button-body', 
                { yPercent: -350, opacity: 0}, // Starting properties
                { yPercent: 0, 
                    opacity: 1, 
                    duration: .8,  
                    ease: "power1.out", 
                    delay: .5, 
                    stagger: {
                        each: 0.1, // Time between each animation start
                        from: "end" // Start staggering from the end
                  }, } // Ending properties
            );
        }
      }, [display_body]);

// onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}   
    return (
        <section className="buttons-body-container text">
            {data.buttons.map((button, index) => {
                return <button key={index} onClick={() => setIndex(index)}className={`button-body word fancy ${((change_slide.value === index || button_state?.value === index) && navbar_location === 'music') ? 'highlight-button' : null}`} >{enhance(button.name)}</button>
            })}
        </section>
    )
}

export default ButtonsBody

