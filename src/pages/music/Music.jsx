import './Music.css';
import ButtonsBody from '../../components/buttonsBody/ButtonsBoody';
import NamesAnimations from '../../components/bodyContent/NamesAnimations';
import BodySlider from '../../components/bodyContent/BodySlider';
import useBodyAnimation from '../../hooks/useBodyAnimation';
import GlobalContext from '../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

/**
 * The Music component is responsible for rendering the music section of the application.
 * It utilizes various hooks and context to manage its state and interactions.
 *
 * Functionalities:
 * 1. Manages the navigation and animation of the music section.
 * 2. Dynamically renders content based on the selected button state.
 * 3. Utilizes a custom hook for body animations during navigation.
 *
 * @returns {React.Component} The Music component.
 */
function Music() {
    // Extract necessary values from the GlobalContext.
    const { dispatch, button_index, navbar_location, button_state } = useContext(GlobalContext);

    // Get the current location from React Router and set up navigation.
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname.substring(1); // Removes the leading slash.

    // Ref for the body container to apply animations.
    const bodyRef = useRef(null);

    // Custom hook to handle body animations on navigation changes.
    useBodyAnimation(bodyRef, navbar_location, pathname, navigate);

    // State to manage changes in button selection.
    const [changeCounter, setChangeCounter] = useState(0);

    // Effect to increment the change counter whenever the button index changes.
    useEffect(() => {
        setChangeCounter(prev => prev + 1);
    }, [button_index]);

    // Key to manage animations based on button index and change count.
    const animationKey = `animation-${button_index}-${changeCounter}`;

    // Data for rendering button components.
    const data = {
        location: 'about',
        buttons: [
            { name: '<Sonido_Club>' },
            { name: '<Unsilenced>' },
            { name: '<Aurea_by_WC>' }
        ]
    };

    // References for button indices to manage content rendering.
    const buttonIndexReferences = {
        0: 'Sonido_Club',
        1: 'Unsilenced',
        2: 'Aurea_by_WC'
    };


    // The following code will make sure that depending on the index that si being hovered, a section or another will be shown based on:buttonIndexReferences[button_index] === 'Sonido_Club' 
    // The inside condition will look into the button_state { clicked: true, value: index } and depending on it it will render the animationNames or the corresponding slider

    // <div key={animationKey} className="music-body-container">
    //     {button_state && button_state.clicked && button_state.value === button_index ? (
    //         <div>Content For Sonido</div>
    //     ) : (
    //         <NamesAnimations/>
    //     )}
    // </div>

  return (
      <div ref={bodyRef} className="body-container">
         
             <ButtonsBody data={data}/>
        
            {buttonIndexReferences[button_index] === 'Sonido_Club' ? (
                // Content for Sonido_Club
                <div key={animationKey} className="music-body-container">
                    {button_state && button_state.clicked && button_state.value === button_index ? (
                        <BodySlider/>
                    ) : (
                        <NamesAnimations/>
                    )}
                </div>
            ) : buttonIndexReferences[button_index] === 'Unsilenced' ? (
                // Content for Unsilenced
                <div key={animationKey} className="music-body-container">
                    {button_state && button_state.clicked && button_state.value === button_index ? (
                        <div>COntent for Unsilenced</div>
                    ) : (
                        <NamesAnimations/>
                    )}
                </div>
            ) : buttonIndexReferences[button_index] === 'Aurea_by_WC' ? (
                <div key={animationKey} className="music-body-container">
                    {button_state && button_state.clicked && button_state.value === button_index ? (
                        <div>Contnet for Aurea</div>
                    ) : (
                        <NamesAnimations/>
                    )}
                </div>
            ) : null }
  
         </div>
           );
}

export default Music;