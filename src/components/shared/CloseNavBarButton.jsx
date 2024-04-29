import '../header/NavBars.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useContext, useRef} from 'react'
import GlobalContext from '../../context/GlobalContext'
import {FaGripLines} from 'react-icons/fa'
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import gsap from "gsap";
import MagneticEffect from '../mouse/MagneticEffect'




function CloseNavBarButton() {
    const {dispatch, screenWidth} = useContext(GlobalContext);
    
        const changeNavBarState = (value) => {
            if(value){
                gsap.to('.open-icon',{
                    x: 50,
                    duration: .5,
                    ease: 'lineal',
                    opacity: 0,
                    onComplete: () => {
                        dispatch({
                            type: 'SET_DISPLAY_HIDENAVBAR',
                            payload: value,
                        })
                        gsap.to('.close-icon', {
                            delay: .7,
                            x: 0,
                            duration: .6,
                            ease: 'lineal',
                            opacity: 1,
                        })
                    }
                })
            } else if(!value){
                gsap.to('.close-icon',{
                    x: 70,
                    duration: .5,
                    ease: 'lineal',
                    opacity: 0,
                    onComplete: () => {
                        gsap.to('.open-icon', {
                            delay: .8,
                            x: 0,
                            duration: .5,
                            ease: 'lineal',
                            opacity: 1,
                        })
                    }
                })
                dispatch({
                    type: 'SET_DISPLAY_HIDENAVBAR',
                    payload: value,
                })
            }
        }

    

    return (
        <div>
            {screenWidth >= 500 ? (
                <MagneticEffect>
                <div className="navbar-icon-mobile-container">
                  <RxHamburgerMenu onClick={() => changeNavBarState(true)} size={20} className="navbar-icon-mobile open-icon"/>
                </div>
              </MagneticEffect>
            ) : (
              <div className="navbar-icon-mobile-container">
                <RxHamburgerMenu onClick={() => changeNavBarState(true)} size={20} className="navbar-icon-mobile open-icon"/>
              </div>
            )}
              <IoMdClose onClick={() => changeNavBarState(false)} size={20} className="navbar-icon-mobile-close close-icon"/>
           
            
        </div>
    )
}

export default CloseNavBarButton
