import './BottomContent.css'
import { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { FaArrowLeft } from "react-icons/fa";
import MusicBottomContent from './MusicBottomContent';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import SplitTextJS from "split-text-js";


function MusicBottom() {

    const { button_state, display_image_overlay, display_body, navbar_location } = useContext(GlobalContext);
    const [changeCounter, setChangeCounter] = useState(0);


     // Increment counter when button_index changes
    useEffect(() => {
        setChangeCounter(prev => prev + 1);
    }, [button_state?.value]);


    useGSAP(() => {
        if (display_image_overlay || navbar_location !== 'music') {
          const titles = gsap.utils.toArray('.bottom-nav-paragraph');
          
          titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);
      
            splitTitle.chars.forEach((char, index) => {
              const tlx = gsap.timeline(); // Create a new timeline for each character
        
              tlx.from(char, {
                opacity: 1,
                duration: 0.2, // Adjust the duration as needed
                delay: "random(0, 2)" // Add a delay based on the index to stagger the animations
              }, '<');
        
              tlx.to(char, {
                opacity: 0,
                duration: 0.2, // Adjust the duration as needed
              }, '<0.1');
            });
          });
        }
      }, [display_image_overlay, navbar_location]);

    useGSAP(() => {
        if (display_body && navbar_location === 'music') {
          const titles = gsap.utils.toArray('.bottom-nav-paragraph');
          
          titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);
      
            splitTitle.chars.forEach((char, index) => {
              const tlx = gsap.timeline(); // Create a new timeline for each character
        
              tlx.from(char, {
                opacity: 0,
                duration: 0.2, // Adjust the duration as needed
                delay: "random(0, 2)" // Add a delay based on the index to stagger the animations
              }, '<');
        
              tlx.to(char, {
                opacity: 1,
                duration: 0.2, // Adjust the duration as needed
              }, '<0.1');
            });
          });
        }
      }, [display_body, navbar_location]);
      




    const animationKey = button_state && button_state.clicked ? `animation-${button_state.value}-${changeCounter}` : null;

    // if(button_state && button_state.clicked === true && button_state.value === button_index){
        if(display_body){
            return (
                <div className="scrollable-container">
                    {!button_state || !button_state.clicked ? (
                        <div className="music-navbar-container">
                            <p className="bottom-nav-paragraph">
                                My journey in the music industry spans across three distinct music collectives, each with a unique focus on promoting underground talent.
                            </p>
                            <p className="bottom-nav-paragraph">
                                Currently, I'm engaged with <span className='red-highlight'>Sonido Club</span> in Barcelona, where I contribute to organizing music events that blend local and international artists.
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