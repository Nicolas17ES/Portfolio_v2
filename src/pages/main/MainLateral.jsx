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
import { PiArrowElbowLeftFill, PiArrowElbowRightFill } from "react-icons/pi";
import { ImArrowRight } from "react-icons/im";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MusicFoto from '../../images/ReissUnsilenced.jpeg'
import ProjectsFoto from '../../images/AulartHome.png'

function MainLateral( ) {
  // Define and initialize local state variables using the useState hook
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [blockAnimations, setBlockAnimations] = useState(true);
  const [lateralNavBar, setLateralNavBar] = useState(false);


  // Access global context using the useContext hook
  const { dispatch, lateral_navbar, hide_nav, start_lateral_nav_animation} = useContext(GlobalContext);

  // Create a ref for the navbar element
  const navbarRef = useRef(null);

  // Get the current location from React Router
  const location = useLocation();
  const pathname = location.pathname;

  const navigate = useNavigate();


   // set active index tomove background
   const handleMouseOver = (index) => {
    dispatch({
      type: 'SET_NAVBAR_INDEX',
      payload: index,
    })
  }


  // Define navigation items
  const navItems = [
    {
      name: 'Projects',
      img: ProjectsFoto,
    },
    {
      name: 'Music',
      img: MusicFoto,
    },
    {
      name: 'About',
      img: MusicFoto,
    },
  ];

  useEffect(() => {
    // Determine the active link index based on the current pathname
    for (let i = 0; i < navItems.length; i++) {
      if (pathname.includes(navItems[i].name.toLowerCase())) {
        setActiveLinkIndex(i);
      }
    }
  }, [location]);

  // Function to set the location of the navbar and expand it
  const setNavBarLocation = (item) => {
    dispatch({type: 'SET_ANIMATION_VALUE', payload: null})
    dispatch({type: 'SET_NAV_LOCATION', payload: item});
    dispatch({ type: 'SET_TEXT_ANIMATION', payload: true});
    setLateralNavBar(true);
    setTimeout(() => {
      dispatch({type: 'SET_CLICKED_BUTTON', payload: null,});
      dispatch({ type: 'SET_BUTTON_INDEX', payload: null });
    }, 1000)
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
    if ((lateralNavBar || lateral_navbar || start_lateral_nav_animation) && !hide_nav) {
      navbarRef.current.classList.add('display-navbar');
      navbarRef.current.classList.remove('hide-navbar');
      setTimeout(() => {
        dispatch({ type: 'SET_BODY', payload: true});
      }, 1500)
    }  else  if ((lateralNavBar || lateral_navbar) && hide_nav) {
      navbarRef.current.classList.add('hide-navbar');
      navbarRef.current.classList.remove('display-navbar');
    }
  }, [hide_nav, lateral_navbar, start_lateral_nav_animation, lateralNavBar]);

  // to={navItems[index].toLowerCase()} onClick={() => setNavBarLocation(navItems[index].toLowerCase())}

  const changeLocation = (currentIndex) => {
      const destination = navItems[currentIndex].name.toLowerCase();
      setNavBarLocation(destination);
      if(!lateral_navbar){
            navigate('/' + destination)
      }
}


  return (
    <>
      <nav ref={navbarRef} className='navbar lateral-navbar' data-active-index={activeIndex}>
        {/* {lateral_navbar && !hide_nav && (
          <AiOutlineClose onClick={() => changeNavBarState(true)} size={20} className="button-close-nav" />
        )} */}
        <div className="nav-links-container">
          <ul className="nav-links-lateral">
            {navItems.map((item, index) => (            
                <li 
                  key={index} 
                  className={`nav-link-lateral ${index === activeLinkIndex ? 'highlight-nav' : ''}`} 
                  onMouseOver={() => { handleMouseOver(index);}} >
                    <span onClick={() => changeLocation(index)} className={`link-lateral ${index === activeLinkIndex ? 'highlight-nav' : ''}`}>
                      {item.name}
                    </span>
                </li>        
            ))}
          </ul>
        </div>
          <div className="bottom-nav-bar">             
            <BottomNavBar />
          </div>
      </nav>
    </>
  );
}

export default MainLateral;
