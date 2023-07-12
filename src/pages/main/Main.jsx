import './Main.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useContext} from 'react'
import BottomNavBar from '../../components/header/bottomNavBar/BottomNavBar'
import GlobalContext from '../../context/GlobalContext'



function Main({handleMouseOver}) {

  const [activeIndex, setActiveIndex] = useState(null);
  const [activeLinkIndex, setActiveLinkIndex] = useState(null);
  const [lateralNavBar, setLateralNavBar] = useState(false);
  const {dispatch, lateral_navbar} = useContext(GlobalContext);

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

  const positionNavBar = () => {
    dispatch({
                type: 'SET_LATERAL_NAV',
                payload: true
            })
    setLateralNavBar(true)
  }

  const setNavBarLocation = (item) => {
    dispatch({
                type: 'SET_NAV_LOCATION',
                payload: item,
            })
  }


return (
        <>
        
            <nav className={`navbar ${(lateralNavBar || lateral_navbar) ? 'lateral-navbar' : 'central-navbar'}`} data-active-index={activeIndex}>
                <ul className="nav-links">
                  {navItems.map((item, index) => (
                    <li key={index} className={`nav-link ${index === activeLinkIndex ? 'highlight-nav' : ''}`} onClick={positionNavBar}  onMouseOver={() => handleMouseOver(index)}>
                      <Link to={navItems[index].toLowerCase()} onClick={() => setNavBarLocation(navItems[index].toLowerCase())} className={`link ${index === activeLinkIndex ? 'highlight-nav' : ''}`} >{'0' + (index+1)  + ' ' + item}</Link>
                    </li>
                  ))}
                </ul>
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