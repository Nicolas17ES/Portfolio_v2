import Main from '../main/Main';
import './Landing.css';
import React, { useContext } from 'react';
import GlobalContext from '../../context/GlobalContext';
import CounterLoader from '../../components/shared/CounterLoader';

function Landing() {

  // Access global context using the useContext hook
  const {display_header, lateral_navbar} = useContext(GlobalContext);

  return (
    <div className="landing-container">
      {!display_header && <CounterLoader/>}
      <div className="index-container">
        {(display_header && !lateral_navbar) && <Main />}
      </div>
    </div>
  );
}

export default Landing;


