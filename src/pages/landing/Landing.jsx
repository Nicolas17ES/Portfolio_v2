import TextEffect from '../../components/textEffect/TextEffect';
import Main from '../main/Main';
import './Landing.css';
import React, { useRef, useEffect, useState, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import NightMode from '../../components/header/NightModeSwitch';

function Landing() {
  // Define and initialize local state variables using the useState hook
  const [positionHeader, setPositionHeader] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [offset, setOffset] = useState(0); // Initialize offset to 0

  // Access global context using the useContext hook
  const { dispatch, display_header, lateral_navbar, display_body } = useContext(GlobalContext);

  // Create a ref for the text element
  const textRef = useRef(null);

  // Function to handle mouse over events on elements
  const handleMouseOver = (index) => {
    setActiveIndex(index);
  };
  // Calculate the number of horizontal and vertical lines based on screen dimensions
  const screenHeight = window.innerHeight;
  const screenWidth = window.innerWidth;
  const numHorizontalLines = Math.ceil(screenHeight / (screenHeight * 0.10)); // 15% of the screen's height
  const numVerticalLines = Math.ceil(screenWidth / (screenWidth * 0.05)); // 15% of the screen's width

  // Calculate the background positions based on the offset
  const backgroundPositionX = `0% calc(${offset * 6}% + ${(100 / numHorizontalLines) * activeIndex}%)`;
  const backgroundPositionY = `0% calc(${offset * 6}% + ${(100 / numVerticalLines) * activeIndex}%)`;

  // Define CSS styles for the landing section with dynamic background positions
  const styles_landing = {
    height: '100vh',
    backgroundColor: 'rgb(var(--white)',
    color: 'rgb(var(--black))',
    backgroundImage: `linear-gradient(to right, rgba(var(--black), 0.05) .4px, transparent 1px), 
                      linear-gradient(to bottom, rgba(var(--black), 0.05) .4px, transparent 1px)`,
    backgroundSize: `${100 / numVerticalLines}% ${100 / numHorizontalLines}%`,
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    transition: 'opacity 800ms ease, background-size 800ms ease, background-position 800ms ease, background-image 800ms ease',
    opacity: '0',
    animation: 'fade-in .5s forwards',
    backgroundPosition: `${backgroundPositionX}, ${backgroundPositionY}`, // Apply dynamic background positions
    zIndex: 1,
  };

  // Function to set the component as a header and add a class with an animation that will place the text on top
  const setAsHeader = () => {
    dispatch({
      type: 'SET_HEADER',
      payload: true,
    });
    setPositionHeader(true);
    textRef.current.classList.add('set-header');
  };

  // use effect to detect when the lateral nav is set and place the text on the left side
  useEffect(() => {
    if(display_body){
      setTimeout(() => {
        textRef.current.classList.add('set-header-left');
      }, 100)
    }
  }, [display_body])


  useEffect(() => {
    // Update the offset when the activeIndex changes
    setOffset(activeIndex);
  }, [activeIndex]);

  // const styles_index = {
  //   marginTop: '10%',
  // };

  return (
    <div className="landing-container" style={!lateral_navbar ? styles_landing : styles_landing}>
      <nav
        ref={textRef}
        className={`text-effect-container ${(display_header || lateral_navbar) ? 'set-header' : null} `}
        onClick={setAsHeader}
      >
         {/* <NightMode /> */}
        <TextEffect />
      </nav>

      
      {(display_header || lateral_navbar) && (
        <div className="index-container">
          <Main handleMouseOver={handleMouseOver} />
        </div>
      )}
    </div>
  );
}

export default Landing;





 // Define CSS styles for the index section
  // const styles_index = {
  //   marginTop: '200px',
  // };
    // transition: 'opacity 800ms ease, background-size 800ms ease, background-position 800ms ease, background-image 800ms ease',
