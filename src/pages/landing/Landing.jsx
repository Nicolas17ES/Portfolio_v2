import Main from '../main/Main';
import './Landing.css';
import React, { useRef, useEffect, useState, useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import CounterLoader from '../../components/shared/CounterLoader';
import MainLateral from '../main/MainLateral';

function Landing() {

  // Access global context using the useContext hook
  const {display_header, lateral_navbar} = useContext(GlobalContext);


  return (
    <div className="landing-container">
      <CounterLoader/>
      <div className="index-container">
        {(display_header && !lateral_navbar) && <Main />}
      </div>
    </div>
  );
}

export default Landing;


