import './Main.css'
import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState, useContext, useRef} from 'react'
import BottomNavBar from '../../components/header/bottomNavBar/BottomNavBar'
import GlobalContext from '../../context/GlobalContext'
import {AiOutlineClose} from 'react-icons/ai'
import {FaGripLines} from 'react-icons/fa'



function Main({handleMouseOver}) {

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [displayNavBar, setDisplayNavBar] = useState(true);
  const [lateralNavBar, setLateralNavBar] = useState(false);
  const {dispatch, lateral_navbar, hide_nav} = useContext(GlobalContext);

  const navbarRef = useRef(null)

  const location = useLocation();
  const pathaname = location.pathname;


  const navItems = ['About', 'Projects', 'Music', 'Contact']; // Your nav items

   useEffect(() => {
    for(let i = 0; i < navItems.length; i++){
      if(pathaname.includes(navItems[i].toLowerCase())){
        setActiveLinkIndex(i);
      }
    }
    
  }, [location])

  // const positionNavBar = () => {
  //   dispatch({
  //               type: 'SET_LATERAL_NAV',
  //               payload: true
  //           })
  //   setLateralNavBar(true)
  // }

  const setNavBarLocation = (item) => {
    dispatch({
                type: 'SET_NAV_LOCATION',
                payload: item,
            })
    dispatch({
                type: 'SET_LATERAL_NAV',
                payload: true
            })
    setLateralNavBar(true)
  }

  const changeNavBarState = (state) => {
     dispatch({
          type: 'SET_HIDE_NAV',
          payload: state,
      })
    dispatch({
          type: 'SET_BODY_SHRINK',
          payload: false,
      })
  }

  useEffect(() => {
    if((lateralNavBar || lateral_navbar) && hide_nav){
      navbarRef.current.classList.add('hide-navbar')
      navbarRef.current.classList.remove('display-navbar')
    }  else if ((lateralNavBar || lateral_navbar) && !hide_nav){
      navbarRef.current.classList.add('display-navbar')
       navbarRef.current.classList.remove('hide-navbar')
    }
    
  }, [hide_nav])



return (
        <>
            <nav ref={navbarRef} className={`navbar ${lateral_navbar ? 'lateral-navbar' : 'central-navbar'}`} data-active-index={activeIndex}>
              {lateral_navbar && !hide_nav && (
                <AiOutlineClose onClick={() => changeNavBarState(true)} size={20} className="button-close-nav"/>
              )} 
              
                <div className="nav-links-container">
                  <ul className="nav-links">
                    {navItems.map((item, index) => (
                      <li key={index} className={`nav-link ${index === activeLinkIndex ? 'highlight-nav' : ''}`} onMouseOver={() => handleMouseOver(index)}>
                        <Link to={navItems[index].toLowerCase()} onClick={() => setNavBarLocation(navItems[index].toLowerCase())} className={`link ${index === activeLinkIndex ? 'highlight-nav' : ''}`} >{'0' + (index+1)  + ' ' + item}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
                {lateral_navbar && (
                  <div className="bottom-nav-bar">
                    <BottomNavBar/>
                  </div>
                )}
            </nav>
         
        
      </>  
    )
}

export default Main