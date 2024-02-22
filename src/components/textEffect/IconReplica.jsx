import React, { useRef, useEffect, useState, useContext } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import GlobalContext from '../../context/GlobalContext';
import './TextEffect.css';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitTextJS from "split-text-js";


function IconReplica() {
  

  // Access global context using the useContext hook
  const {animation_finished, scroll_position} = useContext(GlobalContext);
  
  
  // Check if scroll_position is greater than 0 to decide whether to display the component
  const display = animation_finished ? 'block' : 'none';
  const color = (scroll_position > 10 && animation_finished) ? '#202022' : '#cfc7bb';
  const backgroundColor = (scroll_position > 10 && animation_finished) ? 'rgba(207, 199, 187, .5)' : 'transparent';
  const transform = (scroll_position > 10 && animation_finished) ? 'scale(.85)' : '';

  const styles = {
    display: display,
  };
  const styles_icon = {
    color: color,
    backgroundColor: backgroundColor,
    transform: transform,
  };  

  return (
    <div style={styles} className="icon-replica-container">
      <Link style={styles_icon} to="/" className="icon-replica">
        NL
      </Link>
    </div>
  );
}

export default IconReplica;