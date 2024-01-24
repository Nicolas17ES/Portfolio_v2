import React, { useRef, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import './TextEffect.css';

function TextEffect({ displayCurtaint }) {
  // Define and initialize local state variables using the useState hook
  const [positionHeader, setPositionHeader] = useState(false);
  const [displayName, setDisplayName] = useState(false);

  // Access global context using the useContext hook
  const { dispatch, display_header, lateral_navbar } = useContext(GlobalContext);

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

  // useEffect to apply the text effect animation on component mount
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

  return (
    <div>
      <h1
        ref={textRef}
        onMouseOver={(positionHeader || display_header || lateral_navbar) ? null : applyTextEffect}
        data-value={display_header ? 'Que pasaaaaaa' : displayName ? 'Nicolas Luque' : 'Web developer'}
        className="landing-title"
        onClick={(positionHeader || display_header || lateral_navbar) ? null : dataValue}
      >
        {display_header ? 'Que pasaaaaa' : displayName ? 'Nicolas Luque' : 'Web developer'}
      </h1>
    </div>
  );
}

export default TextEffect;
