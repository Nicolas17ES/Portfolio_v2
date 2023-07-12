import './NavBars.css'
import { useEffect, useState, useContext} from 'react'
import GlobalContext from '../../context/GlobalContext'



function NightModeSwitch() {

  const [darkMode, setDarkMode] = useState(false);
  const {display_header, lateral_navbar} = useContext(GlobalContext)

  


  // update darkmode and theme color from local storage
  useEffect(() => {
    const mode = JSON.parse(localStorage.getItem('darkMode'))
    setDarkMode(mode);
     // eslint-disable-line react-hooks/exhaustive-deps
  }, [])

  // change dark mode
  useEffect(() => {
    if(darkMode){
      document.documentElement.style.setProperty('--black', '255, 255, 255');
      document.documentElement.style.setProperty('--white', '41, 41, 43');
      
    } else {
      document.documentElement.style.setProperty('--black', '41, 41, 43');
      document.documentElement.style.setProperty('--white', '255, 255, 255');
      
    }
  }, [darkMode])

  const changeDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', JSON.stringify(newMode))
  }




if(display_header){
  return (
        <header className='day-night-container'>
            <div className= 'toggle-switch'>
                <label className='label-switch'>
                    <input className='input-switch' type='checkbox' checked={darkMode} onChange={changeDarkMode}/>
                    <span className='slider'></span>
                </label>
            </div>
        </header>
    
    )
}
}

export default NightModeSwitch