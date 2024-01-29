import './NavBars.css'
import { useEffect, useState, useContext} from 'react'
import GlobalContext from '../../context/GlobalContext'
import { WiMoonWaningCrescent6, WiMoonWaningCrescent4, WiMoonWaningCrescent3, WiMoonWaningCrescent2, WiMoonWaningCrescent1, WiMoonThirdQuarter, WiMoonWaningGibbous2, WiMoonWaningGibbous1, WiMoonFull } from "react-icons/wi";




function NightModeSwitch() {

  const [darkMode, setDarkMode] = useState(true);
  const [index, setIndex] = useState(0);
  const {display_header} = useContext(GlobalContext)
  const [intervalId, setIntervalId] = useState(null);


  


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


// will ad 1 or rest 1 to index depending on the theme mode
 const changeIndex = () => {
  const sum = darkMode ? 1 : -1;
  setIndex((prevIndex) => prevIndex + sum);
};

// function will be executed 8 times so the index changes 8 times and its corresponding icon is shown
const changeDarkMode = () => {
  let count = 0;

  const recursiveChange = () => {
    changeIndex();
    count++;

    if (count < 8) {
      setTimeout(recursiveChange, 40);
    } else {
      const newMode = !darkMode;
      setDarkMode(newMode);
      localStorage.setItem('darkMode', JSON.stringify(newMode))
    }
  };

  recursiveChange(); // Start the recursive function
};


if(display_header){
  return (
        <header className='day-night-container' onClick={changeDarkMode}>
          <div className= 'toggle-switch' >
            <WiMoonWaningCrescent6  className={`moon-icon ${index === 0 ? '' : 'opcaity-moon'}`}/>
            <WiMoonWaningCrescent4  className={`moon-icon ${index === 1 ? '' : 'opcaity-moon'}`}/>
            <WiMoonWaningCrescent3  className={`moon-icon ${index === 2 ? '' : 'opcaity-moon'}`}/>
            <WiMoonWaningCrescent2  className={`moon-icon ${index === 3 ? '' : 'opcaity-moon'}`}/>
            <WiMoonWaningCrescent1  className={`moon-icon ${index === 4 ? '' : 'opcaity-moon'}`}/>
            <WiMoonThirdQuarter  className={`moon-icon ${index === 5 ? '' : 'opcaity-moon'}`}/>
            <WiMoonWaningGibbous2  className={`moon-icon ${index === 6 ? '' : 'opcaity-moon'}`}/>
            <WiMoonWaningGibbous1  className={`moon-icon ${index === 7 ? '' : 'opcaity-moon'}`}/>
            <WiMoonFull  className={`moon-icon ${index === 8 ? '' : 'opcaity-moon'}`}/>
          </div>
        </header>
        // <header className='day-night-container'>
        //     <div className= 'toggle-switch'>
        //         <label className='label-switch'>
        //             <input className='input-switch' type='checkbox' checked={darkMode} onChange={changeDarkMode}/>
        //             <span className='slider'></span>
        //         </label>
        //     </div>
        // </header>
    
    )
}
}

export default NightModeSwitch