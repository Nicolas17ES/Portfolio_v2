import React, { useRef, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CloseNavBarButton from './components/shared/CloseNavBarButton';
import NightMode from './components/header/NightModeSwitch';
import Landing from './pages/landing/Landing';
import TextEffect from './components/textEffect/TextEffect';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Music from './pages/music/Music';
import Projects from './pages/projects/Projects';
import { GlobalProvider } from './context/GlobalContext';
import GlobalContext from './context/GlobalContext';
import Interviews from './components/test/Interviews';
import useScrollPosition from './hooks/useScrollPosition';
import MouseTracker from './components/mouse/MouseTracker';
import IconReplica from './components/textEffect/IconReplica';
import ScreenOverlay from './components/shared/ScreenOverlay';
import Footer from './components/header/Footer'
import ViewProjectsCursor from './components/mouse/ViewProjectsCursor';
import useResetScroll from './hooks/useResetScroll'
import { AudioPlayerProvider } from './context/AudioPlayerContext';
import Background from './pages/landing/Background';
import MainLateral from './pages/main/MainLateral';
import ViewProjects from './pages/projects/ViewProjects';
import useResetStates from './hooks/useResetStates';
import useIsMobile from './hooks/useIsMobile';
import MainMobile from './pages/main/MainMobile';

function App() {
  // This is the main entry point of your React application.
  // It wraps the entire application with the GlobalProvider, which provides global state to child components.
  return (
    <GlobalProvider>
      <AudioPlayerProvider>
      <WrappedApp />
      </AudioPlayerProvider>
    </GlobalProvider>
  );
}

function WrappedApp() {

  // This is a functional component responsible for rendering the main content of your app.
  // It uses the React Router to handle routing and location-based rendering.
  const location = useLocation();
  useResetStates();
  useIsMobile();
  const pathname = location.pathname;
  const { dispatch, screenWidth, lateral_navbar, displayMobileNavBar, display_header, hideNavBar, hide_nav, shrink_body, animation_finished, display_body, view_projects_cursor, start_lateral_nav_animation, display_vide_popup } = useContext(GlobalContext);

  const containerRef = useRef(null);
  const scrollPosition = useScrollPosition();
 
  useResetScroll();


  useEffect(() => {
    // This useEffect hook is used for handling routing and updating global state based on the current path.
    if (pathname !== '/' && (pathname !== '/projects/view/aulart-shop' && pathname !== '/projects/view/aulart-tools' && pathname !== '/projects/view/linkinbio')) {
      // If the path is not the root ("/"), update various global state properties accordingly.
      // we will set lateral navbar and the header and also in the nalocation state we will place the correct location via the pathname
      // dispatch({
      //   type: 'SET_ANIMATION_FINISHED',
      //   payload: true
      // });
      dispatch({
        type: 'SET_HEADER',
        payload: true
      });
      dispatch({
        type: 'SET_NAV_LOCATION',
        payload: pathname.replace(/\//g, "")
      });
      //  setTimeout(() => {
      //   dispatch({ type: 'SET_BODY', payload: true});
      // }, 1300)
    } else if (pathname !== '/' && (pathname === '/projects/view/aulart-shop' || pathname === '/projects/view/aulart-tools' || pathname === '/projects/view/linkinbio')) {
      const lastSegment = pathname.split("/").pop();
      dispatch({
        type: 'SET_NAV_LOCATION',
        payload: lastSegment
      });
    }
  }, [pathname, dispatch]);


  // Landing is the first page we see on opening the project
  // landing imports the main component, which represents the NavBar of the project, that goes from center to right position
  // The lateral navbar has two parts: the top, which is in the main content, and the bottom, which is another component called BottomNavBar
  return (
    <>
      {/* <MouseTracker /> */}
      <IconReplica/>
      {screenWidth > 880 && <Background/>}
      {((lateral_navbar || start_lateral_nav_animation) && display_header && !displayMobileNavBar) &&  <MainLateral />}
      {((lateral_navbar || start_lateral_nav_animation) && display_header && displayMobileNavBar) &&  <MainMobile />}
     
      {view_projects_cursor.value && <ViewProjectsCursor/>}
      
      {/* <div className="container"> */}
      <main style={{ zIndex: animation_finished ? '5' : null, backgroundColor: display_body ? 'rgb(var(--white))' : null }} ref={containerRef} className={`${
        // This dynamic className conditionally applies CSS classes based on global state. The classes will add animations to the main body. 
        (lateral_navbar && display_header && !hide_nav && !shrink_body) ? 'body-content-container' :
        (hide_nav && !shrink_body) ? 'body-content-container-full' :
        shrink_body ? 'body-content-container-shrink' : null
      }`}>
        
        <Routes>
          {/* React Router Routes for different pages */}
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/interviews" element={<Interviews />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/view/:id" element={<ViewProjects />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer/>
      </main>
      {/* </div> */}
    </>
  );
}

export default App;
