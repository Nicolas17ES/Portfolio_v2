import React, { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './TextEffect.css';

function TextEffect() {

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const navigate = useNavigate();

  const textRef = useRef(null);
  const overlayRef = useRef(null);

  const [displayName, setDisplayName] = useState(false);
  
  let interval = null;

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
    setDisplayName(!displayName)
  };

  useEffect(() => {
    setTimeout(() => {
      applyTextEffect();
    }, 1000)
    return () => {
      clearInterval(interval);
    };
  }, []);

  // Navigate to home page
  const navigateTo = () => {
    const overlayElement = overlayRef.current;
    overlayElement.classList.add('curtain-transition');

    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  return (
    <div>
      <div ref={overlayRef} className="curtain-overlay"></div>
      <h1
        ref={textRef}
        onMouseOver={applyTextEffect}
        onClick={navigateTo}
        className="landing-title"
        data-value={displayName ? 'Nicolas Luque' : 'Web developer'}
      >
        {displayName ? 'Nicolas Luque' : 'Web developer'}
      </h1>
    </div>
  );
}

export default TextEffect;

