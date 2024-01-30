import './BottomContent.css'
import { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { useLocation } from 'react-router-dom';

function MusicBottom() {

    const { dispatch, button_index } = useContext(GlobalContext);
    const [changeCounter, setChangeCounter] = useState(0);


     // Increment counter when button_index changes
    useEffect(() => {
        setChangeCounter(prev => prev + 1);
    }, [button_index]);


    const animationKey = `animation-${button_index}-${changeCounter}`;

    const buttonIndexReferences = {
        0: 'Sonido_Club',
        1: 'Unsilenced',
        2: 'Aurea_by_WC'       
    }

    const changeSlide = (index) => {
        // console.log(index)
    }

    return (
         <div className="scrollable-container">
            {buttonIndexReferences[button_index] === 'Sonido_Club' ? (
                // Content for Sonido_Club
                <div key={animationKey} className="music-navbar-container">
                    <h3 className="bottom-nav-title">{'<Sonido>'}</h3>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">1</p>
                        <div onClick={() => changeSlide(1)} className="bottom-nav-text">
                            <span>{'<13.1.2024>'}</span> 
                            <p>{'<loc> Les Enfants Brillants'}</p>
                            <p>{'<lineup> Tzena, Jason, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">2</p>
                        <div onClick={() => changeSlide(2)} className="bottom-nav-text">
                            <span>{'<18.111.2023>'}</span> 
                            <p>{'<loc> Les Enfants Brillants'}</p>
                            <p>{'<lineup> Ika & Usherenko, Conor Brophy'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">3</p>
                        <div onClick={() => changeSlide(3)} className="bottom-nav-text">
                            <span>{'<26.5.2023>'}</span> 
                            <p>{'<loc> Les Enfants Brillants'}</p>
                            <p>{'<lineup> Mathew Neequaye, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">4</p>
                        <div onClick={() => changeSlide(4)} className="bottom-nav-text">
                            <span>{'<14.1.2023>'}</span> 
                            <p>{'<loc> Les Enfants Brillants'}</p>
                            <p>{'<lineup> Tommy Pickles, Christian, Conor Brophy'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">5</p>
                        <div onClick={() => changeSlide(5)} className="bottom-nav-text">
                            <span>{'<21.10.2022>'}</span> 
                            <p>{'<loc> Les Enfants Brillants'}</p>
                            <p>{'<lineup> Poggio, Silvio, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">6</p>
                        <div onClick={() => changeSlide(6)} className="bottom-nav-text">
                            <span>{'<1.07.2022>'}</span> 
                            <p>{'<loc> Secret Warehouse'}</p>
                            <p>{'<lineup> Felix Dulac, Conor & Onoffon, Max TA'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">7</p>
                        <div onClick={() => changeSlide(7)} className="bottom-nav-text">
                            <span>{'<8.4.2022>'}</span> 
                            <p>{'<loc> Tunnel Barcelona'}</p>
                            <p>{'<lineup> Samovar, Conor Brophy, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">8</p>
                        <div onClick={() => changeSlide(8)} className="bottom-nav-text">
                            <span>{'<5.2.2022>'}</span> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Garage of the Bass Valley'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Raphael Carrau, Lyo, Sebastian, Remy, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">9</p>
                        <div onClick={() => changeSlide(9)} className="bottom-nav-text">
                            <span>{'<19.11.2021>'}</span> 
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Bus Terraza'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Donnie, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">10</p>
                        <div onClick={() => changeSlide(10)} className="bottom-nav-text">
                            <span>{'<10.10.2021>'}</span> 
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Bus Terraza'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Wendy, Bruno&Marco'}</p>
                        </div>
                    </div>
                </div>
            ) : buttonIndexReferences[button_index] === 'Unsilenced' ? (
                // Content for Unsilenced
                <div key={animationKey} className="music-navbar-container">Content for Unsilenced</div>
            ) : buttonIndexReferences[button_index] === 'Aurea_by_WC' ? (
                <div key={animationKey} className="music-navbar-container">Content for Aurea</div>
            ) : null }
        </div>
    )
}

export default MusicBottom