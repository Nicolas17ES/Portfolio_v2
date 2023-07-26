import '../header/NavBars.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useContext, useRef} from 'react'
import GlobalContext from '../../context/GlobalContext'
import {FaGripLines} from 'react-icons/fa'




function CloseNavBarButton() {
    const {dispatch, lateral_navbar, hide_nav} = useContext(GlobalContext);
    const changeNavBarState = (state) => {
        dispatch({
                    type: 'SET_HIDE_NAV',
                    payload: state,
                })
        dispatch({
                    type: 'SET_BODY_SHRINK',
                    payload: true,
                })
    }

    return (
        <div>
            {lateral_navbar && hide_nav && (
              <FaGripLines onClick={() => changeNavBarState(false)} size={20} className="button-close-nav"/>
            )}
            
        </div>
    )
}

export default CloseNavBarButton
