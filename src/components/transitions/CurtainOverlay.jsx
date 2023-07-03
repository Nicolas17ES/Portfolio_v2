// CurtainOverlay.js

import React, { useEffect, useRef } from 'react';
import './CurtainOverlay.css';

function CurtainOverlay({ onAnimationComplete }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlayElement = overlayRef.current;
    overlayElement.classList.add('curtain-transition');

    const handleAnimationEnd = () => {
      onAnimationComplete();
    };

    overlayElement.addEventListener('animationend', handleAnimationEnd);

    return () => {
      overlayElement.removeEventListener('animationend', handleAnimationEnd);
    };
  }, [onAnimationComplete]);

  return <div ref={overlayRef} className="curtain-overlay"></div>;
}

export default CurtainOverlay;
