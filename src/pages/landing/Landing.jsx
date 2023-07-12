
import TextEffect from '../../components/textEffect/TextEffect'
import CurtainOverlay from '../../components/transitions/CurtainOverlay'
import Home from '../home/Home'
import Main from '../main/Main'
import './Landing.css'
import React, { useRef, useEffect, useState, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext'



function Landing() {

  // const [curtainOverlay, setCurtainOverlay] = useState(false);
  const [positionHeader, setPositionHeader] = useState(false);

  const {dispatch, display_header, lateral_navbar} = useContext(GlobalContext);


  const textRef = useRef(null);

  // const displayCurtaint = () => {
  //   setCurtainOverlay(true);
  //   setTimeout(() => {
  //     setDisplayHome(true)
  //   }, 1000)
  // }


  const [activeIndex, setActiveIndex] = useState(null);
  const [backgroundPosition, setBackgroundPosition] = useState('0% 0%');


  const handleMouseOver = index => {
    setActiveIndex(index);
  };

  useEffect(() => {
    if(activeIndex === 0){
      setBackgroundPosition('0% -20%')

    } else if(activeIndex === 1){
      setBackgroundPosition('0% -40%')

    } else if(activeIndex === 2){
      setBackgroundPosition('0% -60%')

    } else if(activeIndex === 3){
      setBackgroundPosition('0% -80%')

    } else if(activeIndex === 4){
      setBackgroundPosition('0% -100%')

    }

  }, [activeIndex])

  const styles_landing = {
    height: '100vh',
    backgroundColor: 'rgb(var(--white)',
    color: 'rgb(var(--black))',
    backgroundImage: `linear-gradient(to right, rgba(var(--black), 0.1) .4px, transparent 1px), 
                      linear-gradient(to bottom, rgba(var(--black), 0.1) .4px, transparent 1px)`,
    backgroundSize: '12vmin 12vmin',
    position: 'absolute',
    top: '0px',
    left: '0px',
    width: '100vw',
    height: '100vh',
    transition: 'opacity 800ms ease, background-size 800ms ease, background-position 800ms ease, background-image 800ms ease',
    opacity: '0',
    animation: 'fade-in .5s forwards',
    backgroundPosition: backgroundPosition,
    zIndex: 1,
  }
  
  const styles_index = {
    marginTop: '200px'
  }



  const setAsHeader = () => {
    dispatch({
              type: 'SET_HEADER',
              payload: true
          })
    setPositionHeader(true)
    textRef.current.classList.add('set-header')

  }
   
  return (
     <main className="landing-container" style={!lateral_navbar ? styles_landing : styles_landing}>
       <div 
        ref={textRef}
        className={`text-effect-container ${(display_header || lateral_navbar) ? 'set-header' : null} `} 
        onClick={setAsHeader}
        >
         <TextEffect/>
       </div>

       {(display_header || lateral_navbar) && (

         <div className="index-container"  style={lateral_navbar ? styles_index : null}>
          <Main handleMouseOver={handleMouseOver}/>    
        </div>

       )}
     </main>
  );
}

export default Landing;