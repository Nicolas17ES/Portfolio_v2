import './BottomContent.css'
import MouseTracker from '../../mouse/MouseTracker'
import GlobalContext from '../../../context/GlobalContext'
import { useContext } from 'react';


function AboutBottomNavBarContent() {

 const { dispatch } = useContext(GlobalContext);

    return (
        <div>
            
            <h3 className="bottom-nav-title">{'<education>'}</h3>
            <div className="bottom-nav-content">
                <p className="bottom-nav-number">1</p>
                <p className="bottom-nav-text">{'<2022> Lictudem quamdium'}</p>
            </div>
            <div className="bottom-nav-content">
                <p className="bottom-nav-number">2</p>
                <p className="bottom-nav-text">{'<2022> Lictudem quamdium'}</p>
            </div>
            <div className="bottom-nav-content">
                <p className="bottom-nav-number">3</p>
                <p className="bottom-nav-text">{'<2022> Lictudem quamdium'}</p>
            </div>
            <div className="bottom-nav-content">
                <p className="bottom-nav-number">4</p>
                <p className="bottom-nav-text">{'<2022> Lictudem quamdium'}</p>
            </div>
            <div className="bottom-nav-content">
                <p className="bottom-nav-number">5</p>
                <p className="bottom-nav-text">{'<2022> Lictudem quamdium'}</p>
            </div>
        </div>
    )
}

export default AboutBottomNavBarContent
