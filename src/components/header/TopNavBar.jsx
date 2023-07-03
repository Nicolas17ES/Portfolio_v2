import './NavBars.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState} from 'react'


function TopNavBar() {

  const [darkMode, setDarkMode] = useState(false);
  


  // update darkmode and theme color from local storage
  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem('darkMode'))
    setDarkMode(mode);
     // eslint-disable-line react-hooks/exhaustive-deps
  }, [])

  // change dark mode
  useEffect(() => {
    if(darkMode){
      document.documentElement.style.setProperty('--black', '#ffffff');
      document.documentElement.style.setProperty('--white', '#28292c');
      
    } else {
      document.documentElement.style.setProperty('--black', '#28292c');
      document.documentElement.style.setProperty('--white', '#ffffff');
      
    }
  }, [darkMode])

  const changeDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode))
  }




return (
    <header className='header'>
        <div className='left-nav'></div>
        <ul>
            <li className='day-night-container'>
                <div className= 'toggle-switch'>
                    <label className='label-switch'>
                        <input className='input-switch' type='checkbox' checked={darkMode} onChange={changeDarkMode}/>
                        <span className='slider'></span>
                    </label>
                </div>
            </li>
        </ul>
    </header>
    
    )
}

export default TopNavBar