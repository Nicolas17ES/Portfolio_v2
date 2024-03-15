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

    useEffect(() => {
        if (display_image_overlay || navbar_location !== 'music') {
          const paragraphs = document.querySelectorAll('.bottom-nav-paragraph');
          
          paragraphs.forEach(paragraph => {
            const originalText = paragraph.textContent;
            paragraph.innerHTML = ''; // Clear the paragraph for rebuilt content
            
            originalText.split(' ').forEach((word, index, array) => {
              const space = index < array.length - 1 ? ' ' : ''; // Add space after each word except the last
              const wordClass = ["Sonido_Club", "Unsilenced", "Aurea"].includes(word) ? 'red-highlight' : '';
              paragraph.innerHTML += `<span class="${wordClass}" style="display: inline-block; opacity: 0;">${word}</span>${space}`;
            });
      
            // Now animate each span to fade in
            gsap.to(paragraph.querySelectorAll('span'), {
              opacity: 0,
              duration: 0.2,
              stagger: 0.05,
              delay: index => Math.random() * 2, // Random delay between 0 and 2 seconds
              ease: "power1.inOut"
            });
          });
        }
      }, [display_image_overlay, navbar_location]);
      
    useEffect(() => {
      if (display_body && navbar_location === 'music') {
          const paragraphs = document.querySelectorAll('.bottom-nav-paragraph');
          
          paragraphs.forEach(paragraph => {
            const originalText = paragraph.textContent;
            paragraph.innerHTML = ''; // Clear the paragraph for rebuilt content
            
            originalText.split(' ').forEach((word, index, array) => {
              const space = index < array.length - 1 ? ' ' : ''; // Add space after each word except the last
              const wordClass = ["Sonido_Club", "Unsilenced", "Aurea"].includes(word) ? 'red-highlight' : '';
              paragraph.innerHTML += `<span class="${wordClass}" style="display: inline-block; opacity: 0;">${word}</span>${space}`;
            });
      
            // Now animate each span to fade in
            gsap.to(paragraph.querySelectorAll('span'), {
              opacity: 1,
              duration: 0.1,
              stagger: 0.05,
              delay: index => Math.random() * 2, // Random delay between 0 and 2 seconds
              ease: "power1.inOut"
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