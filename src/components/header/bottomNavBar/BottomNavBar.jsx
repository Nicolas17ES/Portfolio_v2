import { useEffect, useState, useContext, useRef} from 'react'
import GlobalContext from '../../../context/GlobalContext'
import { useLocation } from 'react-router-dom'
import '../NavBars.css'
import AboutBottomNavBarContent from './AboutBottomNavBarContent'
import ProjectstBottomNavBarContent from './ProjectstBottomNavBarContent'

function BottomNavBar() {
    const {navbar_location} = useContext(GlobalContext);
    const [prevLocation, setPrevLocation] = useState(null);
    const [finalLocation, setFinalLocation] = useState(null);
    const sectionRef = useRef(null)

    const location = useLocation();
    const pathaname = location.pathname;

    useEffect(() => {
        if(prevLocation === null){
            sectionRef.current.classList.add('bottom-lateral-navbar')
            setPrevLocation(navbar_location);
        }
        else if (navbar_location !== prevLocation) {
            sectionRef.current.classList.remove('bottom-lateral-navbar')
            sectionRef.current.classList.add('shrink-element')
            setPrevLocation(navbar_location);
            
            
            setTimeout(() => {
                setFinalLocation(navbar_location);
                sectionRef.current.classList.remove('shrink-element')
                sectionRef.current.classList.add('expand-element')
            }, 600)
        } 
    }, [navbar_location]);

    useEffect(() => {
        if(pathaname !== '/'){
            setFinalLocation(navbar_location)
        } 
    }, []);


    return (
        <section ref={sectionRef}>
           
                {/* {navbar_location === 'about' ? ( */}
                <div className={finalLocation !== 'about' ? 'hide-bottom' : 'display-bottom'} >
                    <AboutBottomNavBarContent/> 
                </div>
                <div className={finalLocation !== 'projects' ? 'hide-bottom' : 'display-bottom'} >
                    <ProjectstBottomNavBarContent/> 
                </div>
                    
              
       
        </section>
    )
}

export default BottomNavBar

