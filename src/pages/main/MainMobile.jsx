/*
 * @file Main.js
 * @description Main component responsible for rendering the main navigation and links.
 * This component manages the main navigation, active link highlighting, and interactions with the global context.
 */
import './Main.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../context/GlobalContext';
import MusicFoto from '../../images/ReissUnsilenced.jpeg'
import ProjectsFoto from '../../images/AulartHome.png'
import { RxHamburgerMenu } from "react-icons/rx";
import gsap from "gsap";
import MagneticEffect from '../../components/mouse/MagneticEffect';

function MainMobile( ) {
  // Define and initialize local state variables using the useState hook
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [displayNavbar, setDisplayNavbar] = useState(false)


  // Access global context using the useContext hook
  const { dispatch, lateral_navbar, navbar_location, displayMobileNavBar, isMobile, screenWidth} = useContext(GlobalContext);

  // Create a ref for the navbar element
  const navbarRef = useRef(null);

  // Get the current location from React Router
  const location = useLocation();
  const pathname = location.pathname;

  const navigate = useNavigate();
  // useEffect(() => {
  //   dispatch({ type: 'SET_BODY', payload: true});
  // },[])


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
    dispatch({ type: 'SET_BODY', payload: true});
  }, [])

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
    setTimeout(() => {
      dispatch({type: 'SET_CLICKED_BUTTON', payload: null,});
      dispatch({ type: 'SET_BUTTON_INDEX', payload: null });
    }, 1000)
  };


  
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
        gsap.to('.mobile-navbar', {
          y: -80,
          duration: .6,
          ease: 'power2.in',
          onComplete: () => {
              setDisplayNavbar(false);
              gsap.to('.navbar-icon-mobile', {
                  xPercent: 0,
                  duration: .6,
                  ease: 'lineal',
                  onComplete: () => {
                    // document.body.style.overflowY = 'auto';
    
                  }
              });
          }
      });
        if(!lateral_navbar){
              navigate('/' + destination)
        }
      }
  }
  const displayNavbarFunction = (value) => {
    if (value) {
        gsap.to('.navbar-icon-mobile', {
            xPercent: 250,
            duration: .6,
            ease: 'power2.in',
            onComplete: () => {
                setDisplayNavbar(true);
                gsap.to('.mobile-navbar', {
                    y: 0,
                    duration: .6,
                    ease: 'lineal',
                });
                // document.body.style.overflowY = 'hidden';
            }
        });
    } 
};

useEffect(() => {
  // Function to handle click events on the document
  if(displayNavbar){
    function handleClickOutside(event) {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        gsap.to('.mobile-navbar', {
          y: -80,
          duration: .6,
          ease: 'power2.in',
          onComplete: () => {
              setDisplayNavbar(false);
              gsap.to('.navbar-icon-mobile', {
                  xPercent: 0,
                  duration: .6,
                  ease: 'lineal',
                  onComplete: () => {
                    // document.body.style.overflowY = 'auto';
    
                  }
              });
          }
      });
      }
    }
    // Add event listener for mouse down
    document.addEventListener("mousedown", handleClickOutside);
  
    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }
}, [navbarRef, displayNavbar]);


  return (
    <>
    {displayNavbar && displayMobileNavBar && isMobile && <div className="curtain show-curtain"></div>}
      <nav ref={navbarRef} className='mobile-navbar'>
          <ul className="nav-links-mobile">
            {navItems.map((item, index) => (            
                <li 
                  key={index} 
                  className={`nav-link-mobile ${index === activeLinkIndex ? 'highlight-nav' : ''}`}>
                    <span onClick={() => changeLocation(index)} className={`link-mobile ${index === activeLinkIndex ? 'highlight-nav' : ''}`}>
                      {item.name}
                    </span>
                </li>        
            ))}
          </ul>
      </nav>
      {screenWidth >= 500 ? (
                <MagneticEffect>
                <div className="navbar-icon-mobile-container">
                  <RxHamburgerMenu className='navbar-icon-mobile' onClick={() => displayNavbarFunction(true)} />              
                </div>
              </MagneticEffect>
            ) : (
              <div className="navbar-icon-mobile-container">
                  <RxHamburgerMenu className='navbar-icon-mobile' onClick={() => displayNavbarFunction(true)} />              
                </div>
            )}
     
    </>
  );
}

export default MainMobile;
