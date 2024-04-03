import React, { useRef, useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import './TextEffect.css';
import MagneticEffect from '../mouse/MagneticEffect';
import { initialState } from '../../context/GlobalContext';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function IconReplica() {
  const navigate = useNavigate();
  // Access global context using the useContext hook
  const {display_body, scroll_position, lateral_navbar, display_header, hide_nav, shrink_body, dispatch} = useContext(GlobalContext);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    if(display_body){
      setTimeout(() => {
        setDisplay(true)
      }, 500)
    }
  }, [display_body])

  
  // Check if scroll_position is greater than 0 to decide whether to display the component
  const displayBlock = display ? 'block' : 'none';
  const color = (scroll_position > 10 && display_body) ? '#202022' : '#cfc7bb';
  const backgroundColorIcon = (scroll_position > 10 && display_body) ? 'rgba(207, 199, 187, .5)' : 'transparent';
  const backgroundColor = (scroll_position > 31 && display_body) ?  'transparent' : 'rgb(32, 32, 34)';
  const transform = (scroll_position > 10 && display_body) ? 'scale(.85)' : '';

  const styles = {
    display: displayBlock,
    backgroundColor: backgroundColor,
  };
  const styles_icon = {
    color: color,
    backgroundColor: backgroundColorIcon,
    transform: transform,
  };
  
  const resetToHome = () => {
    gsap.to("#root", {
      opacity:0,
      duration: .5,
      ease: 'Power3.easeInOut',
      onComplete: () => {
        dispatch({
          type: 'RESET_STATE',
          payload: initialState,
        });
        navigate("");
        gsap.to("#root", {
          opacity:1,
          duration: .5,
          ease: "power1.inOut",
      });
      }
  });

  }
  

  return (
    <div style={styles} className={`${
      (lateral_navbar && display_header && !hide_nav && !shrink_body) ? 'icon-replica-container' :
      (hide_nav && !shrink_body) ? 'icon-replica-container-expand' :
      shrink_body ? 'icon-replica-container-shrink' : null
    }`}>
      <MagneticEffect>
      <div className="icon-replica-inner-container">
        <div onClick={resetToHome} style={styles_icon} to="/" className="icon-replica">
          NL
        </div>
      </div>
      </MagneticEffect>
    </div>
  );
}

export default IconReplica;