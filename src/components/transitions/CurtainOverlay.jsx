// CurtainOverlay.js

import React, { useEffect, useRef } from 'react';
import './CurtainOverlay.css';

function CurtainOverlay() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const overlayElement = overlayRef.current;
    overlayElement.classList.add('curtain-transition');

    
  }, []);

  return <div ref={overlayRef} className="curtain-overlay"></div>;
}

export default CurtainOverlay;
