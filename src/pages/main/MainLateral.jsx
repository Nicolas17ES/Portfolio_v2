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
import MusicFoto from '../../images/ReissUnsilenced.jpeg'
import ProjectsFoto from '../../images/AulartHome.png'
import CloseNavBarButton from '../../components/shared/CloseNavBarButton';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function MainLateral( ) {
  // Define and initialize local state variables using the useState hook
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [lateralNavBar, setLateralNavBar] = useState(false);
  const [opacityNavBar, setOpacityNavbar] = useState(true);


  // Access global context using the useContext hook
  const { dispatch, lateral_navbar, hideNavBar, start_lateral_nav_animation, navbar_location, displayHiddenNavBar, display_body} = useContext(GlobalContext);

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

console.log("display_body", display_body)
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
    
    // dispatch({type: 'SET_ANIMATION_VALUE', payload: null})
    dispatch({type: 'SET_NAV_LOCATION', payload: item});
    dispatch({ type: 'SET_TEXT_ANIMATION', payload: true});
    navigate('/' + item) 
    // setLateralNavBar(true);
    setTimeout(() => {
      dispatch({type: 'SET_CLICKED_BUTTON', payload: null,});
      dispatch({ type: 'SET_BUTTON_INDEX', payload: null });
    }, 1000)
  };



  useEffect(() => {
    // Update the navbar's CSS classes based on global state
    if ((lateral_navbar || start_lateral_nav_animation) && !hideNavBar && !displayHiddenNavBar) {
      navbarRef.current.classList.add('display-navbar');
      navbarRef.current.classList.remove('hide-navbar');
      navbarRef.current.classList.remove('display-navbar-fixed');
    }  else  if ((lateral_navbar) && hideNavBar && !displayHiddenNavBar) {
      navbarRef.current.classList.add('hide-navbar');
      navbarRef.current.classList.remove('display-navbar');
      setTimeout(() => {
        setOpacityNavbar(false)
      }, 1500);
    } else if ((lateral_navbar) && hideNavBar && displayHiddenNavBar){
      navbarRef.current.classList.add('display-navbar');
      navbarRef.current.classList.add('display-navbar-fixed');
      navbarRef.current.classList.remove('hide-navbar');
    }
    setTimeout(() => {
      dispatch({ type: 'SET_BODY', payload: true});
    }, 1000)
  }, [hideNavBar, lateral_navbar, start_lateral_nav_animation, lateralNavBar, displayHiddenNavBar]);

  // to={navItems[index].toLowerCase()} onClick={() => setNavBarLocation(navItems[index].toLowerCase())}

  const changeLocation = (currentIndex) => {
      const destination = navItems[currentIndex].name.toLowerCase();
      if(navbar_location === 'music' && destination === 'music'){
        dispatch({
          type: 'SET_IMAGE_OVERLAY',
          payload: false
        });
        dispatch({
          type: 'SET_CLICKED_BUTTON',
          payload: null,
        });
      } else {
        setNavBarLocation(destination);
        if(!lateral_navbar){
              navigate('/' + destination)
        }
      }
  }

  return (
    <>
    {lateral_navbar && hideNavBar && (
          <CloseNavBarButton />
        )}
      <nav style={{opacity: (hideNavBar && !displayHiddenNavBar && opacityNavBar ) ? 0 : 1}}  ref={navbarRef} className='navbar lateral-navbar' data-active-index={activeIndex}>
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
