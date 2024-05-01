/*
 * @file BottomNavBar.js
 * @description BottomNavBar component responsible for rendering the bottom navigation bar and its content.
 * This component dynamically manages the display of content based on the current navigation location.
 */
import { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { useLocation } from 'react-router-dom';
import '../NavBars.css';
import AboutBottomNavBarContent from './AboutBottomNavBarContent';
import ProjectstBottomNavBarContent from './ProjectstBottomNavBarContent';
import BottomNavAulartShop from './bottomProjects/BottomNavAulartShop';
import BottomNavAulartTools from './bottomProjects/BottomNavAulartTools';
import BottomNavLink from './bottomProjects/BottomNavLink';
import MusicBottom from './MusicBottom';

function BottomNavBar() {
  // Access global context using the useContext hook
  const { navbar_location, lateral_navbar } = useContext(GlobalContext);

  // Define and initialize local state variables using the useState hook
  const [prevLocation, setPrevLocation] = useState(null);
  const [finalLocation, setFinalLocation] = useState(null);

  // Create a ref for the section element
  const sectionRef = useRef(null);

  // Get the current location from React Router
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    // Manage the display and animation of the BottomNavBar based on navigation location
    
    if (prevLocation === null && lateral_navbar) {
      setPrevLocation(navbar_location);
      setFinalLocation(navbar_location);
    } else if ((navbar_location !== prevLocation) && lateral_navbar) {
      sectionRef.current.classList.remove('bottom-lateral-navbar');
      sectionRef.current.classList.add('shrink-element');
      setPrevLocation(navbar_location);

      setTimeout(() => {
        setFinalLocation(navbar_location);
        sectionRef.current.classList.remove('shrink-element');
        sectionRef.current.classList.add('expand-element');
      }, 600);
    }
  }, [navbar_location]);

  useEffect(() => {
    // Set the final location based on the current pathname
    if (pathname !== '/') {
      setFinalLocation(navbar_location);
    }
  }, []);

  // function that will hide or show the scrollbar depending on mouseneter
  const displayScrollBar = (value) => {
    const contentDivs = sectionRef.current.querySelectorAll('.display-bottom');

    contentDivs.forEach(div => {
      if (value) {
        // Show scrollbar
        div.style.overflowY = 'auto';
      } else {
        // Hide scrollbar
        div.style.overflowY = 'hidden';
      }
    });
  };



  return (
    <>
    {/* <MouseTracker /> */}
    <section className='bottom-lateral-navbar' style={{padding: finalLocation === 'about' && '0'}} onMouseEnter={() => displayScrollBar(true)} onMouseLeave={() => displayScrollBar(false)} ref={sectionRef}>
      <div className={finalLocation !== 'projects' ? 'hide-bottom' : 'display-bottom'}>
        <ProjectstBottomNavBarContent />
      </div>
      <div className={finalLocation !== 'music' ? 'hide-bottom' : 'display-bottom'}>
        <MusicBottom />
      </div>
      <div className={finalLocation !== 'about' ? 'hide-bottom' : 'display-bottom'}>
        <AboutBottomNavBarContent />
      </div>
      <div className={finalLocation !== 'aulart-shop' ? 'hide-bottom' : 'display-bottom'}>
        <BottomNavAulartShop />
      </div>
      <div className={finalLocation !== 'aulart-tools' ? 'hide-bottom' : 'display-bottom'}>
        <BottomNavAulartTools />
      </div>
      <div className={finalLocation !== 'linkinbio' ? 'hide-bottom' : 'display-bottom'}>
        <BottomNavLink />
      </div>
    </section>
    </>
  );
}

export default BottomNavBar;

