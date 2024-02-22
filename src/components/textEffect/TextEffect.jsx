import React, { useRef, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import './TextEffect.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";


function TextEffect({ displayCurtaint }) {
  // Define and initialize local state variables using the useState hook
  const [positionHeader, setPositionHeader] = useState(false);
  const [displayName, setDisplayName] = useState(false);
  const [animationFinished, setAnimationFinished] = useState(false);

  // Access global context using the useContext hook
  const { dispatch, animation_finished, display_body, display_header, lateral_navbar } = useContext(GlobalContext);

  // Define the alphabet for the text effect
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // Create a navigation function for routing
  const navigate = useNavigate();

  // Create a ref for the text element
  const textRef = useRef(null);

  // Define an interval for the text effect animation
  let interval = null;

  // Function to apply the text effect animation
  const applyTextEffect = () => {
    let iteration = 0;
    clearInterval(interval);

    interval = setInterval(() => {
      const textElement = textRef.current;
      if (!textElement) return;

      const currentValue = textElement.innerText;
      const newValue = currentValue
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return textElement.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      textElement.innerText = newValue;

      if (iteration >= textElement.dataset.value.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);
    setDisplayName(!displayName);
  };

  // useEffect to apply the text effect animation on component mount after 1 second
  useEffect(() => {
    setTimeout(() => {
      applyTextEffect();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Function to handle mouseover events and apply text effect when not in header mode
  const dataValue = (e) => {
    const data_value = e.target.getAttribute('data-value');
    if (data_value === 'Web developer') {
      applyTextEffect();
    }
  };


  // 4
  // 12
  // function to animate the text one the lateral navbar is set
  // function to animate the text once the lateral navbar is set
useGSAP(() => {
  const tlx = gsap.timeline({ repeat: 0, repeatDelay: 0 });
  const titles = gsap.utils.toArray(".landing-title");
  if (display_body) {
    setTimeout(() => {
      for (let i = 0; i < titles.length; i++) {
      const title = titles[i];
      const splitTitle = new SplitTextJS(title);
      const chars = Array.from(splitTitle.chars); // Convert NodeList to Array
      const reversedChars = chars.reverse(); // Reverse the array

      // Loop through each character and apply animation
      for (let j = 0; j < reversedChars.length; j++) {
        // Check if the index is not 4 or 12
        if (j !== 4 && j !== 12) {
          const char = reversedChars[j];
          tlx.from(char, {
            opacity: 1,
            y: 0,
            stagger: 0.04,
            duration: 1,
          }, "<");
          tlx.to(char, {
            opacity: 0,
            y: -90,
            stagger: 0.04,
            duration: 1,
          }, "<0.1");
        }
      }
      for (let j = 0; j < reversedChars.length; j++) {
        if(j === 4){
            const char = reversedChars[j];
            tlx.from(char, {
                x: 0,
                duration: 1,
            }, "<");
            tlx.to(char, {
              x: -75,
              duration: 1,
            }, "<");
        }
      }
    }
    }, 1000)
  }
}, [display_body]);



useEffect(() => {
  if (display_body) {
      setTimeout(() => {
        const text = textRef.current;
    const circle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const svgCircle = document.createElementNS("http://www.w3.org/2000/svg", "circle");

    circle.setAttribute("viewBox", "0 0 100 100");
    circle.setAttribute("xmlns", "http://www.w3.org/2000/svg");
    circle.classList.add("animated-circle");
    circle.style.position = "absolute";
    circle.style.width = "100%";
    circle.style.height = "100%";
    circle.style.top = "0";
    circle.style.left = "0";

    svgCircle.setAttribute("cx", "-45");
    svgCircle.setAttribute("cy", "50");
    svgCircle.setAttribute("r", "40");
    svgCircle.setAttribute("fill", "transparent");
    svgCircle.setAttribute("stroke", "#cfc7bb");
    svgCircle.setAttribute("stroke-width", "1.3");
    svgCircle.setAttribute("stroke-dasharray", "0, 251");

    circle.appendChild(svgCircle);
    text.appendChild(circle);

    const tl = gsap.timeline({
        onComplete: () => {
          setAnimationFinished(true); // Set animation finished state to true
          dispatchAnimationFinished(); // Dispatch the animation finished state
        }
      });
    tl.to(svgCircle, { 'stroke-dasharray': '251, 251', duration: 2, ease: "power2.inOut" });

    return () => {
      text.removeChild(circle);
      tl.kill();
    };
      }, 2500)
    }
  }, [display_body]);

  const dispatchAnimationFinished = () => {
    // Dispatch your state once the animation has finished
    setTimeout(() => {
      dispatch({ 
        type: 'SET_ANIMATION_FINISHED',
        payload: true
      });
    }, 1000)
  };

  // Check if scroll_position is greater than 0 to decide whether to display the component
  const display = !animation_finished ? 'block' : 'none';

  const styles = {
    display: display,
  };


  return (
    <div style={styles}>
      <h1
        ref={textRef}
        onMouseOver={(positionHeader || display_header || lateral_navbar) ? null : applyTextEffect}
        data-value={display_header ? 'Nicolas Luque' : displayName ? 'Nicolas Luque' : 'Web developer'}
        className="landing-title"
        onClick={(positionHeader || display_header || lateral_navbar) ? null : dataValue}
      >
        {display_header ? 'Nicolas Luque' : displayName ? 'Nicolas Luque' : 'Web developer'}
      </h1>
    </div>
  );
}

export default TextEffect;
