/*
 * @file Main.js
 * @description Main component responsible for rendering the main navigation and links.
 * This component manages the main navigation, active link highlighting, and interactions with the global context.
 */
import './Main.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState, useContext, useRef } from 'react';
import BottomNavBar from '../../components/header/bottomNavBar/BottomNavBar';
import GlobalContext from '../../context/GlobalContext';
import { PiArrowElbowLeftFill, PiArrowElbowRightFill } from "react-icons/pi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import MusicFoto from '../../images/ReissUnsilenced.jpeg'
import ProjectsFoto from '../../images/AulartHome.png'
import FotoBebida from '../../images/nicolas/FotoBebida.JPG'

function Main() {
  // Define and initialize local state variables using the useState hook
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [blockAnimations, setBlockAnimations] = useState(false);
  const [lateralNavBar, setLateralNavBar] = useState(false);
  const [entered, setEntered] = useState(false); // Tracks if the mouse has entered a project section.

  // Access global context using the useContext hook
  const { dispatch, screenWidth, lateral_navbar, navbar_location, mouse_position } = useContext(GlobalContext);

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
      img: FotoBebida,
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
    dispatch({ type: 'SET_LATERAL_NAV', payload: true});
    dispatch({type: 'SET_ANIMATION_VALUE', payload: null})
    dispatch({type: 'SET_NAV_LOCATION', payload: item});
    dispatch({ type: 'SET_TEXT_ANIMATION', payload: true});
    dispatch({ type: 'SET_HEADER', payload: true});
    if(screenWidth <= 500){
      dispatch({ type: 'SET_BODY', payload: true});
    }
    setLateralNavBar(true);
    // setTimeout(() => {
      dispatch({type: 'SET_CLICKED_BUTTON', payload: null,});
      dispatch({ type: 'SET_BUTTON_INDEX', payload: null });
    // }, 1000)
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


  const changeLocation = (currentIndex) => {
    setBlockAnimations(true)
    const indexes = [0,1,2]
    let tl = gsap.timeline(); // Create a new GSAP timeline
    indexes.forEach((index) => {
      if(screenWidth < 880){
          if (index !== currentIndex) {
            tl.to(`.nav-link${index}`, {
                opacity: 0,
                duration: 0.3,
                ease: "power2.out",
            }, "<");
        }
      } else {
        tl.to(`.nav-link-image${index}`, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        }, "<");
        tl.to(`.link-icon${index}`, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.out",
          }, "<");
          if (index !== currentIndex) {
              tl.to(`.nav-link${index}`, {
                  opacity: 0,
                  duration: 0.3,
                  ease: "power2.out",
              }, "<");
          }
         
      }
    });
    removeMouseMoveListener(currentIndex)
    tl.to(`.link-${currentIndex}`, {
        y: currentIndex === 0 ? 150 : currentIndex === 1 ? 55 : currentIndex === 2 ? - 25 : null,
        force3D: false,
        scale: screenWidth > 880 ? 21 : 10,
        duration: 1.5,
        delay: .3,
        transformOrigin: "50% 50%",
        ease: "power2.InOut",
        onComplete: () => {
          dispatch({ type: 'SET_START_LATERAL_NAV_ANIMATION', payload: true});
        }
    });
    tl.to(`.link-${currentIndex}`, {
        xPercent: -3000,
        duration: 1.3,
        ease: "power2.out",
        onComplete: () => {
                const destination = navItems[currentIndex].name.toLowerCase();
                setNavBarLocation(destination);
                if(!lateral_navbar){
                      navigate('/' + destination)
                }
        }
    });
}

const animateNavLink = (index) => {
  // Animation for nav-link-icon
    if(index === 1){
      gsap.to(`.link-icon${index}`, {
        opacity: 1,
        xPercent: -50,
        duration: .4,
        rotate: -45,
        yPercent: 0,
      });
    
      // Animation for link
      gsap.fromTo(`.link-${index}`, {
        x: 0,
      }, {
        xPercent: -15,
        duration: 0.4,
      });
      
    } else {
      gsap.to(`.link-icon${index}`, {
        opacity: 1,
        xPercent: 50,
        duration: .4,
        rotate: 45,
        yPercent: 0,
      });
    
      // Animation for link
      gsap.fromTo(`.link-${index}`, {
        x: 0,
      }, {
        xPercent: 15,
        duration: 0.4,
      });
    }

};


const reverseAnimateNavLink = (index) => {
  // Reverse animation for nav-link-icon
    if(index === 1){
      gsap.to(`.link-icon${index}`, {
        opacity: 0,
        xPercent: 15,
        duration: 0.4,
        rotate: -110,
        yPercent: 0,
      });
    
      // Reverse animation for link
      gsap.to(`.link`, {
        xPercent: 0,
        duration: 0.4,
      });
    } else {
      gsap.to(`.link-icon${index}`, {
        opacity: 0,
        xPercent: -15,
        duration: 0.4,
        rotate: 110,
        yPercent: 0,
      });
    
      // Reverse animation for link
      gsap.to(`.link`, {
        xPercent: 0,
        duration: 0.4,
      });
    }
};

const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
const [imageAnimation, setImageAnimation] = useState({
  state: false,
  index: null,
});


// Function to handle mouse move event
const handleMouseMove = (e) => {
  const boundingRect = e.target.getBoundingClientRect();
  const x = e.clientX - boundingRect.left;
  const y = e.clientY - boundingRect.top;
  setMousePosition({ x, y });
};





// Ref for tracking the list item elements
const listItemRefs = useRef([]);

const addMouseMoveListener = (index) => {
  const element = listItemRefs.current[index];
  if (element) {
      setImageAnimation({
          state: true,
          index: index,
      });
      const mouseMoveHandler = (e) => handleMouseMove(e);
      element.addEventListener('mousemove', mouseMoveHandler);

      // Check if the initial mouse position is within the element's bounds
      const rect = element.getBoundingClientRect();
      const scrollTop = window.scrollY;
      const scrollLeft = window.scrollX;

      if (!entered && 
          mouse_position.x >= rect.left + scrollLeft && 
          mouse_position.x <= rect.right + scrollLeft &&
          mouse_position.y >= rect.top + scrollTop && 
          mouse_position.y <= rect.bottom + scrollTop) {
          // If within bounds, manually invoke handleMouseMove with a mock event
          const mockEvent = {
              clientX: mouse_position.x,
              clientY: mouse_position.y,
              target: element,
          };
          mouseMoveHandler(mockEvent);
          
      }
  }
};


// Adjusted function to remove mouse move listener from an element
const removeMouseMoveListener = (index) => {
  gsap.to(`.nav-link-image${imageAnimation.index}`, {
    opacity: 0,
    duration: .5,
    ease: "power2.out" // Adjust easing function as needed
  });
  setMousePosition({ x: 0, y: 0 });
  const element = listItemRefs.current[index];
  if (element) {
    setImageAnimation({
      state: false,
      index: null,
    })
    element.removeEventListener('mousemove', handleMouseMove);
  }
};



// Inside your functional component
const prevMousePositionRef = useRef({ x: 0, y: 0 });

useEffect(() => {
  if (imageAnimation.state && imageAnimation.index !== null) {
    // Get the current mouse position
    const { x: mouseX, y: mouseY } = mousePosition;

    if (mouseX !== 0 && mouseY !== 0) {
      // Update the image position based on the difference
      const imageElement = document.querySelector(`.nav-link-image${imageAnimation.index}`);
      if (imageElement) {
        // Move the image to the exact mouse position
        gsap.to(`.nav-link-image${imageAnimation.index}`, {
          y: mouseY * 1.5,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out" // Easing function for y movement
        });
        
        gsap.to(`.nav-link-image${imageAnimation.index}`, {
          opacity: 1,
          duration: 0.5,
          ease: "power1.in" // Easing function for opacity
        });
      }
    }

    // Update the previous mouse position
    prevMousePositionRef.current = { x: mouseX, y: mouseY };
  }
}, [imageAnimation, mousePosition]);



// FADE IN COMPONENT ONMOUNT
useGSAP(() => {
  // rotate to letters
  gsap.from(".nav-link", {
      opacity: 0,
      duration: .8,
      stagger: .2,
      ease: "power2.inOut",
      onComplete: () => {
        dispatch({
            type: 'SET_HIDE_LOADER',
            payload: true,
          });
    }
  });
}, [])
  
return (
    <>
      <nav ref={navbarRef} className='navbar central-navbar' data-active-index={activeIndex}>
        <div className="nav-links-container">
          {navItems.map((element, index) => (
            <img src={element.img} alt="" key={index} className={`nav-link-image nav-link-image${index}`} />
          ))}
          <ul className="nav-links">
            {navItems.map((item, index) => (            
                <li 
                tabIndex={-1}
                  ref={el => listItemRefs.current[index] = el} 
                  key={index} 
                  className={`nav-link nav-link${index} ${index === activeLinkIndex ? 'highlight-nav' : ''}`}          
                  >
                   {index === 1 ? (
                     <>
                      <span tabIndex={-1} onClick={() => changeLocation(index)}  className={`link link-${index} ${index === activeLinkIndex ? 'highlight-nav' : ''}`} onMouseOver={() => { 
                        handleMouseOver(index);
                          if (!blockAnimations && screenWidth > 880) {
                            animateNavLink(index); 
                            addMouseMoveListener(index); 
                          }}}
                        onMouseLeave={() => {
                          if (!blockAnimations && screenWidth > 880) {
                            reverseAnimateNavLink(index);
                            removeMouseMoveListener(index);
                          }}} 
                        >
                        {item.name}
                        {/* {'0' + (index + 1) + ' ' + item.name} */}
                      </span>
                       {(!blockAnimations || navbar_location === '') && (
                        <div className={`nav-icon-container nav-icon-container-${index}`}>
                          <PiArrowElbowLeftFill className={`nav-link-icon link-icon${index}`}/>
                        </div>
                      )} 
                     </>
                   ) : (
                    <>
                     {(!blockAnimations || navbar_location === '') && (
                      <div className={`nav-icon-container nav-icon-container-${index}`}>
                        <PiArrowElbowRightFill className={`nav-link-icon link-icon${index}`}/>
                      </div>
                    )} 
                    <span tabIndex={-1} onClick={() => changeLocation(index)} className={`link link-${index} ${index === activeLinkIndex ? 'highlight-nav' : ''}`}
                      onMouseOver={() => { 
                        handleMouseOver(index);
                        if (!blockAnimations && screenWidth > 880) {
                          animateNavLink(index); 
                          addMouseMoveListener(index); 
                        }}}
                      onMouseLeave={() => {
                        if (!blockAnimations && screenWidth > 880) {
                          reverseAnimateNavLink(index);
                          removeMouseMoveListener(index);
                        }}} 
                      >
                      {item.name}
                      {/* {'0' + (index + 1) + ' ' + item.name} */}
                    </span>
                    </>
                   )}
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
