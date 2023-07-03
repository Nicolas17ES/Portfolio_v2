import React, { useRef, useEffect, useState } from 'react';
import './MouseTracker.css';

function MouseTracker() {
    const blobRef = useRef(null);
    const [position, setPosition] = useState({ 
      left: -1000, 
      top: 0 
    });

  useEffect(() => {
    // Access the DOM element using blobRef.current
    const blob = blobRef.current;
    
  }, []);


   useEffect(() => {
    const handlePointerMove = (event) => {
      const { clientX, clientY } = event;
      setPosition({ left: clientX, top: clientY });
    };

    window.addEventListener('pointermove', handlePointerMove);

    return () => {
      window.removeEventListener('pointermove', handlePointerMove);
    };
  }, []);


  const blobStyle = {
    position: 'absolute',
    left: `${position.left}px`,
    top: `${position.top}px`,
  };




  return (
      <>
        <div ref={blobRef} className="blob" style={blobStyle}>
        </div>
     
       </> 
  );
}

export default MouseTracker;
