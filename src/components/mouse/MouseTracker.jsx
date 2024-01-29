import React, { useEffect, useState, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext'
import './MouseTracker.css'; // Ensure you have this CSS file

function MouseTracker() {
  const {display_mouse_tracker} = useContext(GlobalContext)
  const [position, setPosition] = useState({ left: 0, top: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      // Get the mouse position relative to the document
      const x = event.clientX + document.documentElement.scrollLeft;
      const y = event.clientY + document.documentElement.scrollTop;

      setPosition({ left: x, top: y });
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  if(display_mouse_tracker){
    return (
      <div className="mouse-tracker" style={{ left: `${position.left}px`, top: `${position.top}px` }}></div>
    );
  }

}

export default MouseTracker;
