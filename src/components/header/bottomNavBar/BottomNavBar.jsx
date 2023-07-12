import { useEffect, useState, useContext} from 'react'
import GlobalContext from '../../../context/GlobalContext'

import '../NavBars.css'
import AboutBottomNavBarContent from './AboutBottomNavBarContent'
import ProjectstBottomNavBarContent from './ProjectstBottomNavBarContent'


function BottomNavBar() {
    const {navbar_location} = useContext(GlobalContext);

    useEffect(() => {
        console.log("loc", navbar_location)
    })
    return (
        <section className="bottom-lateral-navbar">
            <AboutBottomNavBarContent/>
        </section>
    )
}

export default BottomNavBar
