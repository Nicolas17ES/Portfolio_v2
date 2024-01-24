import React, { useRef, useEffect, useState } from 'react';
import { MdDoubleArrow } from "react-icons/md";
import { PiArrowBendDownRightFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';


import './Home.css';

function Home() {
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const [isMouseOver, setIsMouseOver] = useState(false);
  const [hoveredElement, setHoveredElement] = useState(null);
  const [fadeOutElement, setFadeOutElement] = useState(false);
  const [fadeOutIndex, setFadeOutIndex] = useState(null);

  const navigate = useNavigate();


  const handleMouseOver = (index) => {
      setIsMouseOver(true);
      setHoveredElement(index);
    };

    const handleMouseOut = () => {
      setIsMouseOver(false);
      setHoveredElement(null);
    };



  const fadeOut = (index) => {
    setFadeOutElement(!fadeOutElement)
    setFadeOutIndex(index)
    if(index === 1){
      setTimeout(() => {
        navigate('/about')
      }, 1000)
    }
  }



  return (
    <section className="home-container">
       {/* chage of h2 */}
      <h2 onClick={() => fadeOut(1)}
        className={`home-title-h2 ${fadeOutElement && fadeOutIndex !== 1 ? 'fade-out' : fadeOutElement && fadeOutIndex === 1 ? 're-locate' : ''}`}
        onMouseOver={(e) => handleMouseOver(1)}
        onMouseOut={(e) => handleMouseOut(1)}
        >
          <div
            className={`tag-container${isMouseOver && hoveredElement === 1  && !fadeOutElement ? 'animate-right' : 'inner-hidden'}`}
          >
          <div
            className={`${isMouseOver && hoveredElement === 1  && !fadeOutElement ? 'inner-display' : 'inner-hidden'}`}
          >
            
            <span className="text-tag"> bla blo blu blu lele</span>
          </div>
          </div>
          <div className={`home-image-container ${isMouseOver && hoveredElement === 1 && !fadeOutElement ? 'display' : 'inner-hidden reverse-display'}`}>
            <MdDoubleArrow size={100}/>
          </div>
          
          <div className={`h2-text ${isMouseOver && hoveredElement ===  1  && !fadeOutElement ? 'animate-right' : 'reverse-animate-right'}`}>
            <span className="text-heavy"  >01</span>
            <span className={`text-circle ${isMouseOver && hoveredElement === 1  && !fadeOutElement  ? 'highlight' : ''}`} >ABOUT</span>
          </div>
      </h2>

      {/* chage of h2 */}
      <h2 onClick={() => fadeOut(2)}
        className={`home-title-h2 ${fadeOutElement && fadeOutIndex !== 2 ? 'fade-out' : ''}`}
        onMouseOver={(e) => handleMouseOver(2)}
        onMouseOut={(e) => handleMouseOut(2)}>
          {/* <div
            className={`${isMouseOver && hoveredElement === 2 ? 'inner-display animate-right' : 'inner-hidden'}`}
          >
            
          <span className="text-tag"> bla blo blu blu lele</span>
          </div>
          <div className={`home-image-container ${isMouseOver && hoveredElement === 2 ? 'display' : 'inner-hidden reverse-display'}`}>
            <MdDoubleArrow/>
          </div> */}
          
          <div className={`h2-text ${isMouseOver && hoveredElement === 2 ? 'animate-right' : 'reverse-animate-right'}`}>
            <span className="text-heavy" >02</span>
            <span className="">PROJECTS</span>
          </div>
      </h2>

       {/* chage of h2 */}
      <h2 onClick={() => fadeOut(3)}
        className={`home-title-h2 ${fadeOutElement && fadeOutIndex !== 3 ? 'fade-out' : ''}`}
        onMouseOver={(e) => handleMouseOver(3)}
        onMouseOut={(e) => handleMouseOut(3)}
        >
          {/* <div
            className={`${isMouseOver && hoveredElement === 3 ? 'inner-display animate-right' : 'inner-hidden'}`}
          >
            
            <span className="text-tag"> bla blo blu blu lele</span>
          </div>
          <div className={`home-image-container ${isMouseOver && hoveredElement === 3 ? 'display' : 'inner-hidden reverse-display'}`}>
            <MdDoubleArrow/>
          </div> */}
          
          <div className={`h2-text ${isMouseOver && hoveredElement === 3 ? 'animate-right' : 'reverse-animate-right'}`}>
            <span className="text-heavy" >03</span>
            <span className="">MUSIC</span>
          </div>
      </h2>

       {/* chage of h2 */}
      <h2 onClick={() => fadeOut(4)}
        ref={contactRef}
        className={`home-title-h2 ${fadeOutElement && fadeOutIndex !== 4 ? 'fade-out' : ''}`}
        onMouseOver={(e) => handleMouseOver(4)}
        onMouseOut={(e) => handleMouseOut(4)}
        >
          {/* <div
            className={`${isMouseOver && hoveredElement === 4 ? 'inner-display animate-right' : 'inner-hidden'}`}
          >
            
            <span className="text-tag"> bla blo blu blu lele</span>
          </div>
          <div className={`home-image-container ${isMouseOver && hoveredElement === 4 ? 'display' : 'inner-hidden reverse-display'}`}>
            <MdDoubleArrow/>
          </div> */}
          
          <div className={`h2-text about ${isMouseOver && hoveredElement === 4 ? 'animate-right' : 'reverse-animate-right'}`}>
            <span className="text-heavy" >04</span>
            <span className="">CONTACTS</span>
          </div>
      </h2>


    </section>
  );
}

export default Home;



