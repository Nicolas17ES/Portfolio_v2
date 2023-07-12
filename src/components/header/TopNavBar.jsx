import './NavBars.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState} from 'react'


function TopNavBar() {

  // const [activeIndex, setActiveIndex] = useState(null);
  // const location = useLocation();
  // const pathaname = location.pathname;


  // const navItems = ['Home', 'About', 'Projects', 'Music', 'Contact']; // Your nav items

  // useEffect(() => {
  //   for(let i = 0; i < navItems.length; i++){
  //     if(pathaname.includes(navItems[i].toLowerCase())){
  //       console.log(navItems[i].toLowerCase())
  //     }
  //   }
    
  // }, [location])
  
  
  



return (
    <nav >
        {/* <ul className="nav-links">
          {navItems.map((item, index) => (
            <li key={index} className='nav-link' onMouseOver={() => handleMouseOver(index)}>
              <Link to={navItems[index].toLowerCase()} className='link'>{item}</Link>
            </li>
          ))}
        </ul> */}
    </nav>
    
    )
}

export default TopNavBar