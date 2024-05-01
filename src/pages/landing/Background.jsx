
import './Landing.css';
import React, {useEffect, useState, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import useMousePositionTracker from '../../hooks/useMousePositionTracker';

function Background() {
  // Define and initialize local state variables using the useState hook
  const [offset, setOffset] = useState(0); // Initialize offset to 0

  // Access global context using the useContext hook
  const { navbar_active_index } = useContext(GlobalContext);


  useMousePositionTracker();


  // Calculate the number of horizontal and vertical lines based on screen dimensions
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const numHorizontalLines = Math.ceil(screenHeight / (screenHeight * 0.10)); // 15% of the screen's height
  const numVerticalLines = Math.ceil(screenWidth / (screenWidth * 0.05)); // 15% of the screen's width

  // Calculate the background positions based on the offset
  const backgroundPositionX = `0% calc(${offset * 6}% + ${(100 / numHorizontalLines) * navbar_active_index}%)`;
  const backgroundPositionY = `0% calc(${offset * 6}% + ${(100 / numVerticalLines) * navbar_active_index}%)`;

  // Define CSS styles for the landing section with dynamic background positions
  const styles_landing = {

    backgroundColor: 'rgb(var(--white)',
    color: 'rgb(var(--black))',
    backgroundImage: `linear-gradient(to right, rgba(var(--black), 0.05) .4px, transparent 1px), 
                      linear-gradient(to bottom, rgba(var(--black), 0.05) .4px, transparent 1px)`,
    backgroundSize: `${100 / numVerticalLines}% ${100 / numHorizontalLines}%`,
    position: 'fixed',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    transition: 'opacity 800ms ease, background-size 800ms ease, background-position-x 800ms ease, background-position-y 800ms ease, background-image 800ms ease',
    opacity: '0',
    animation: 'fade-in .5s forwards',
    backgroundPosition: `${backgroundPositionX}, ${backgroundPositionY}`, // Apply dynamic background positions
    zIndex: 0,
  };





  useEffect(() => {
    // Update the offset when the activeIndex changes
    setOffset(navbar_active_index);
  }, [navbar_active_index]);

  return (
    <div  style={styles_landing}>
      
    </div>
  );
}

export default Background ;