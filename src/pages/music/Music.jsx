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
    const { dispatch, display_body, navbar_location, button_state } = useContext(GlobalContext);

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
    }, [button_state?.value]);

    // Key to manage animations based on button index and change count.
    const animationKey = button_state && button_state.clicked ? `animation-${button_state.value}-${changeCounter}` : null;

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


    // const [typedText, setTypedText] = useState('');
    // const fullText = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur accusamus ratione non laudantium, ut mollitia aspernatur eius expedita molestiae inventore molestias. Iste exercitationem eligendi amet assumenda odio at perferendis voluptatibus.`;

   

  if(display_body){
      return (
        <div ref={bodyRef} className="body-container">
            <div className="body-container-top">
                <ButtonsBody data={data}/>
                {/* {button_state && button_state.clicked && button_state.value === button_index && (
                    <section key={animationKey}  className="body-paragraph-effect-container">
                        <p className="paragraph-effect">
                            {typedText}
                        </p>
                    </section>
                        
                )} */}
                
            </div>
                {!button_state || !button_state.clicked ? (
                    <div className="music-body-container">
                        <NamesAnimations/>
                    </div>
                ) : (
                    <div key={animationKey} className="music-body-container">
                        {buttonIndexReferences[button_state.value] === 'Sonido_Club' && <BodySlider/>}
                        {buttonIndexReferences[button_state.value] === 'Unsilenced' && <BodySlider/>}
                        {buttonIndexReferences[button_state.value] === 'Aurea_by_WC' && <BodySlider/>}
                    </div>
                )}

        
            </div>
        );
    }
}

export default Music;