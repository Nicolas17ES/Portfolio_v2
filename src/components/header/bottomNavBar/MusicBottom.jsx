import './BottomContent.css'
import { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { FaArrowLeft } from "react-icons/fa";
import MusicBottomContent from './MusicBottomContent';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import SplitTextJS from "split-text-js";
import usePreviousLocation from '../../../hooks/usePreviousLocation'


function MusicBottom() {

  const prevLocation = usePreviousLocation();

    const { button_state, display_image_overlay, display_body, navbar_location } = useContext(GlobalContext);
    const [changeCounter, setChangeCounter] = useState(0);


     // Increment counter when button_index changes
    useEffect(() => {
        setChangeCounter(prev => prev + 1);
    }, [button_state?.value]);

    // useEffect(() => {
    //     if (display_image_overlay) {
    //       gsap.fromTo('.bottom-nav-paragraph', 
    //         { opacity: 1 }, // Assuming starting from visible and original position
    //         { opacity: 0, duration: 1 } // Specified ending values
    //       );
    //     }
    //   }, [display_image_overlay, navbar_location]);
      
    // useEffect(() => {
    //   if (display_body && navbar_location === 'music') {
    //     gsap.fromTo('.bottom-nav-paragraph', 
    //       { yPercent: -500, opacity: 0 }, // Starting values
    //       { yPercent: 0, opacity: 1, duration: 1, delay: (prevLocation === '/about' || prevLocation === '/projects') ? 1.5 : 1 } // Ending values
    //     );
    //     }
    //   }, [display_body, navbar_location]);

    useGSAP(() => {
        // Animation to fade in content smoothly
        gsap.fromTo('.contact-social-container-2', 
          { opacity: 0 },
          { opacity: 1, duration: 3.5, ease: 'expo.inOut' }
        );
      }, [display_body]);


    const animationKey = button_state && button_state.clicked ? `animation-${button_state.value}-${changeCounter}` : null;

    // if(button_state && button_state.clicked === true && button_state.value === button_index){
        if(display_body){
            return (
                <div className="contact-social-container-2">
                    {!button_state || !button_state.clicked ? (
                        <div className="music-navbar-container">
                            <p className="bottom-nav-paragraph">
                                My journey in the music industry spans across three distinct music collectives, each with a unique focus on promoting underground talent.
                            </p>
                            <p className="bottom-nav-paragraph">
                                Currently, I'm engaged with <span className='red-highlight'>Sonido_Club</span> in Barcelona, where I contribute to organizing music events that blend local and international artists.
                            </p>
                            <p className="bottom-nav-paragraph">
                                Previously, I collaborated with <span className='red-highlight'>Aurea</span> in Barcelona and <span className='red-highlight'>Unsilenced</span> in Amsterdam. This are some of the artists involved:
                            </p>
                            <p className="bottom-nav-paragraph">
                               <FaArrowLeft />
                            </p>
                        </div>
                    ) : (
                        <div key={animationKey} className="music-navbar-container">
                            <MusicBottomContent/>
                        </div>
                    )}
                </div>
            );
        }
    }
    

export default MusicBottom