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
import MagneticEffect from '../../components/mouse/MagneticEffect'
import { PiArrowElbowLeftDownFill, PiArrowElbowRightFill } from "react-icons/pi";
import { ImArrowRight } from "react-icons/im";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import MusicFoto from '../../images/ReissUnsilenced.jpeg'
import ProjectsFoto from '../../images/AulartHome.png'

function Main({ handleMouseOver }) {
  // Define and initialize local state variables using the useState hook
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [blockAnimations, setBlockAnimations] = useState(true);
  const [lateralNavBar, setLateralNavBar] = useState(false);
  const [entered, setEntered] = useState(false); // Tracks if the mouse has entered a project section.

  // Access global context using the useContext hook
  const { dispatch, lateral_navbar, hide_nav, navbar_location, mouse_position } = useContext(GlobalContext);

  // Create a ref for the navbar element
  const navbarRef = useRef(null);

  // Get the current location from React Router
  const location = useLocation();
  const pathname = location.pathname;

  const navigate = useNavigate();


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
    if(navbar_location === ''){
      setBlockAnimations(true)
      gsap.to(`.link-icon${index}`, {
        opacity: 0,
        xPercent: -15,
        duration: 0.2,
        rotate: 110,
        yPercent: 0,
      });
      // Reverse animation for link
      gsap.to(`.link`, {
        xPercent: 0,
        duration: 0.2,
        onComplete: () => {
          gsap.to(`.nav-link-image`, {
            opacity: 0,
            duration: .5,
            ease: "power2.out" // Adjust easing function as needed
          });
          const destination = navItems[index].name.toLowerCase();
          setNavBarLocation(destination);
          gsap.to(".link", {
            duration: 2,
            fontSize: "2rem",
            ease: "power2.out",
            delay: 1,
          });
          if(!lateral_navbar){
                navigate('/' + destination)
          }
        }
      });
    } else {
      const destination = navItems[index].name.toLowerCase();
      setNavBarLocation(destination);
      if(!lateral_navbar){
            navigate('/' + destination)
      }
  }
}


const animateNavLink = (index) => {
  // Animation for nav-link-icon
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

};


const reverseAnimateNavLink = (index) => {
  // Reverse animation for nav-link-icon
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


  return (
    <>
      <nav ref={navbarRef} className={`navbar ${lateral_navbar ? 'lateral-navbar' : 'central-navbar'}`} data-active-index={activeIndex}>
        {lateral_navbar && !hide_nav && (
          <AiOutlineClose onClick={() => changeNavBarState(true)} size={20} className="button-close-nav" />
        )}
        <div className="nav-links-container">
          {navItems.map((element, index) => (
            <img src={element.img} alt="" className={`nav-link-image nav-link-image${index}`} />
          ))}
          <ul className="nav-links">
            {navItems.map((item, index) => (
            
                <li 
                  ref={el => listItemRefs.current[index] = el} 
                  key={index} 
                  className={`nav-link nav-link${index} ${index === activeLinkIndex ? 'highlight-nav' : ''}`} 
                  onMouseOver={() => { 
                    handleMouseOver(index);
                    if (!blockAnimations || navbar_location === '') {
                      animateNavLink(index); 
                      addMouseMoveListener(index); 
                    }}}
                  onMouseLeave={() => {
                    if (!blockAnimations || navbar_location === '') {
                      reverseAnimateNavLink(index);
                      removeMouseMoveListener(index);
                    }}} 
                  >
                    {!blockAnimations || navbar_location === '' && (
                      <div className={`nav-icon-container nav-icon-container-${index}`}>
                        <PiArrowElbowRightFill className={`nav-link-icon link-icon${index}`}/>
                      </div>
                    )}
                    <span onClick={() => changeLocation(index)} className={`link link-${index} ${index === activeLinkIndex ? 'highlight-nav' : ''}`}>
                      {item.name}
                      {/* {'0' + (index + 1) + ' ' + item.name} */}
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
