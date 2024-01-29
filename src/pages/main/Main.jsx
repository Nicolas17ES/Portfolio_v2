/*
 * @file Main.js
 * @description Main component responsible for rendering the main navigation and links.
 * This component manages the main navigation, active link highlighting, and interactions with the global context.
 */
import './Main.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext, useRef } from 'react';
import BottomNavBar from '../../components/header/bottomNavBar/BottomNavBar';
import GlobalContext from '../../context/GlobalContext';
import { AiOutlineClose } from 'react-icons/ai';
import MouseTracker from '../../components/mouse/MouseTracker'

function Main({ handleMouseOver }) {
  // Define and initialize local state variables using the useState hook
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [displayNavBar, setDisplayNavBar] = useState(true);
  const [lateralNavBar, setLateralNavBar] = useState(false);

  // Access global context using the useContext hook
  const { dispatch, lateral_navbar, hide_nav, navbar_location } = useContext(GlobalContext);

  // Create a ref for the navbar element
  const navbarRef = useRef(null);

  // Get the current location from React Router
  const location = useLocation();
  const pathname = location.pathname;

  const navigate = useNavigate();


  // Define navigation items
  const navItems = ['Projects', 'Music', 'About', 'Contact'];

  useEffect(() => {
    // Determine the active link index based on the current pathname
    for (let i = 0; i < navItems.length; i++) {
      if (pathname.includes(navItems[i].toLowerCase())) {
        setActiveLinkIndex(i);
      }
    }
  }, [location]);

  // Function to set the location of the navbar and expand it
  const setNavBarLocation = (item) => {
    dispatch({
      type: 'SET_NAV_LOCATION',
      payload: item,
    });
    dispatch({
      type: 'SET_LATERAL_NAV',
      payload: true,
    });
    setLateralNavBar(true);
  };

  // Function to change the state of the navbar
  const changeNavBarState = (state) => {
    dispatch({
      type: 'SET_HIDE_NAV',
      payload: state,
    });
    dispatch({
      type: 'SET_BODY_SHRINK',
      payload: false,
    });
  };

  useEffect(() => {
    // Update the navbar's CSS classes based on global state
    if ((lateralNavBar || lateral_navbar) && hide_nav) {
      navbarRef.current.classList.add('hide-navbar');
      navbarRef.current.classList.remove('display-navbar');
    } else if ((lateralNavBar || lateral_navbar) && !hide_nav) {
      navbarRef.current.classList.add('display-navbar');
      navbarRef.current.classList.remove('hide-navbar');
    }
  }, [hide_nav]);

  // to={navItems[index].toLowerCase()} onClick={() => setNavBarLocation(navItems[index].toLowerCase())}

  const changeLocation = (index) => {
    const destination = navItems[index].toLowerCase();
    setNavBarLocation(destination);
    if(!lateral_navbar){
          navigate('/' + destination)
    }
    
  }

  return (
    <>
      <nav ref={navbarRef} className={`navbar ${lateral_navbar ? 'lateral-navbar' : 'central-navbar'}`} data-active-index={activeIndex}>
        {lateral_navbar && !hide_nav && (
          <AiOutlineClose onClick={() => changeNavBarState(true)} size={20} className="button-close-nav" />
        )}
        <div className="nav-links-container">
          <ul className="nav-links">
            {navItems.map((item, index) => (
              <li key={index} className={`nav-link ${index === activeLinkIndex ? 'highlight-nav' : ''}`} onMouseOver={() => handleMouseOver(index)}>
                <span onClick={() => changeLocation(index)} className={`link ${index === activeLinkIndex ? 'highlight-nav' : ''}`}>
                  {'0' + (index + 1) + ' ' + item}
                </span>
              </li>
            ))}
          </ul>
        </div>
        {lateral_navbar && (
          <div className="bottom-nav-bar">
             
            <BottomNavBar />
          </div>
        )}
      </nav>
    </>
  );
}

export default Main;
