import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import { useState, useEffect, useContext } from 'react';
import MouseTracker from './components/mouse/MouseTracker'
import TopNavBar from './components/header/TopNavBar'
import CloseNavBarButton from './components/shared/CloseNavBarButton'
import './components/header/NavBars.css'
import NightMode from './components/header/NightModeSwitch'
import Home from './pages/home/Home'
import Landing from './pages/landing/Landing'
import About from './pages/about/About'
import Projects from './pages/projects/Projects'
import Main from './pages/main/Main'


import {GlobalProvider} from './context/GlobalContext'
import GlobalContext from './context/GlobalContext'





function App() {
  return (
    <GlobalProvider>
      <WrappedApp />
    </GlobalProvider>    
  );
}

function WrappedApp() {
  const location = useLocation();
  const pathname = location.pathname;
  const {dispatch, lateral_navbar, display_header, hide_nav, shrink_body} = useContext(GlobalContext);

  useEffect(() => {
    console.log("pathname", pathname)
    if (pathname !== '/'){
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
  

  return (
    <>
      <NightMode/>
      <Landing />
      {/* <div className="container"> */}
        <main className={`${(lateral_navbar && display_header && !hide_nav && !shrink_body) ? 'body-content-container' : (hide_nav && !shrink_body) ? 'body-content-container-full' : shrink_body ? 'body-content-container-shrink' : null}`}>
          {lateral_navbar && hide_nav && (
              <CloseNavBarButton/>
            )}
          <Routes> 
            <Route path="/about" element={<About />} />              
            <Route path="/projects" element={<Projects />} />              
          </Routes>
        </main>
      {/* </div> */}
    </>
  );
}

export default App;

