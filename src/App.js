import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import CloseNavBarButton from './components/shared/CloseNavBarButton';
import NightMode from './components/header/NightModeSwitch';
import Landing from './pages/landing/Landing';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Music from './pages/music/Music'
import Projects from './pages/projects/Projects';
import { GlobalProvider } from './context/GlobalContext';
import GlobalContext from './context/GlobalContext'

import MouseTracker from './components/mouse/MouseTracker'

function App() {
  // This is the main entry point of your React application.
  // It wraps the entire application with the GlobalProvider, which provides global state to child components.
  return (
    <GlobalProvider>
      <WrappedApp />
    </GlobalProvider>
  );
}

function WrappedApp() {
  // This is a functional component responsible for rendering the main content of your app.
  // It uses the React Router to handle routing and location-based rendering.
  const location = useLocation();
  const pathname = location.pathname;
  const { dispatch, lateral_navbar, display_header, hide_nav, shrink_body } = useContext(GlobalContext);

  useEffect(() => {
    // This useEffect hook is used for handling routing and updating global state based on the current path.
    if (pathname !== '/') {
      // If the path is not the root ("/"), update various global state properties accordingly.
      // we will set lateral navbar and the header and also in the nalocation state we will place the correct location via the pathname
      dispatch({
        type: 'SET_LATERAL_NAV',
        payload: true
      });
      dispatch({
        type: 'SET_HEADER',
        payload: true
      });
      dispatch({
        type: 'SET_NAV_LOCATION',
        payload: pathname.replace(/\//g, "")
      });
    }
  }, [pathname, dispatch]);


  

  // Landing is the first page we see on opening the project
  // landing imports the main component, which represents the NavBar of the project, that goes from center to right position
  // The lateral navbar has two parts: the top, which is in the main content, and the bottom, which is another component called BottomNavBar

  return (
    <>
      {/* <MouseTracker /> */}
      <Landing />
      {/* <div className="container"> */}
      <main className={`${
        // This dynamic className conditionally applies CSS classes based on global state.
        (lateral_navbar && display_header && !hide_nav && !shrink_body) ? 'body-content-container' :
        (hide_nav && !shrink_body) ? 'body-content-container-full' :
        shrink_body ? 'body-content-container-shrink' : null
      }`}>
        {lateral_navbar && hide_nav && (
          <CloseNavBarButton />
        )}
        <Routes>
          {/* React Router Routes for different pages */}
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/music" element={<Music />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      {/* </div> */}
    </>
  );
}

export default App;
