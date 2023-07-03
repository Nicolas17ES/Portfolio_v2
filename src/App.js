import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom'
import { useState, useEffect } from 'react';
import MouseTracker from './components/mouse/MouseTracker'
import TopNavBar from './components/header/TopNavBar'
import Home from './pages/home/Home'
import Landing from './pages/landing/Landing'







function App() {

  const location = useLocation();
  const shouldRenderNavBar = location.pathname !== '/';

  return (
   <>
   {shouldRenderNavBar && (
     <>
        <TopNavBar/>
        <MouseTracker />
     </>
   )}
   
        <Routes>     
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
          {/* <Route path="*" element={<NotFound />} /> */}
        </Routes>
   </>
  );
}

export default App;
