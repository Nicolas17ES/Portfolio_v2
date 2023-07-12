import React, { useRef, useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext'
import './TextEffect.css';

function TextEffect({displayCurtaint}) {

  const [positionHeader, setPositionHeader] = useState(false);
  const {dispatch, display_header, lateral_navbar} = useContext(GlobalContext);

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const navigate = useNavigate();

  const textRef = useRef(null);
  // const overlayRef = useRef(null);

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

// set h1 as header


  return (
    <div>
      {/* <div ref={overlayRef} className="curtain-overlay"></div> */}
      <h1
        ref={textRef}
        onMouseOver={(positionHeader || display_header || lateral_navbar) ? null : applyTextEffect}
        data-value={displayName ? 'Nicolas Luque' : 'Web developer'}
        className="landing-title"
      >
        {displayName ? 'Nicolas Luque' : 'Web developer'}
      </h1>
    </div>
  );
}

export default TextEffect;

