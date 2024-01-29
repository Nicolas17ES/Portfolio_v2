import { useEffect, useState, useContext } from 'react'
import BottomNavBar from '../header/bottomNavBar/BottomNavBar'
import GlobalContext from '../../context/GlobalContext'
import './ButtonsBody.css'
import '../../pages/music/Music.css'

function ButtonsBody({data}) {

    const {dispatch, lateral_navbar} = useContext(GlobalContext);
    const [activeIndex, setActiveIndex] = useState(0)
    const [isCLicked, setIsCliked] = useState(false)

    const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

    const enhance = text => {
        return text.split("").map((value, index) => {
            return (
                <span className="outer">
                    <span className="inner" style={{animationDelay: `${rand(-5000, 0)}ms`}}>
                        <span className="letter" style={{animationDelay: `${index * 1000 }ms`}}>
                            {value}
                        </span>
                    </span>
                </span>
            )
        })
    }

    const setIndex = (index) => {
        setIsCliked(true)
        setActiveIndex(index)
    }

    const handleMouseEnter = (index) => {
        dispatch({
                    type: 'SET_BUTTON_INDEX',
                    payload: index,
                })
    };

    const handleMouseLeave = (index) => {
        if(!isCLicked){
             dispatch({
                type: 'SET_BUTTON_INDEX',
                payload: null,
            })
        } else {
             dispatch({
                type: 'SET_BUTTON_INDEX',
                payload: activeIndex,
            })
        }
    };

    const styles = {
        opacity: '0.5',
    }

    return (
        <section className="buttons-body-container text">
            {data.buttons.map((button, index) => {
                return <button key={index} onClick={() => setIndex(index)} onMouseEnter={() => handleMouseEnter(index)} onMouseLeave={() => handleMouseLeave(index)}   className="button-body word fancy" style={(activeIndex !== null && index !== activeIndex) ? styles : null}>{enhance(button.name)}</button>
            })}
        </section>
    )
}

export default ButtonsBody

