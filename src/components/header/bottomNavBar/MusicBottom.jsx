import './BottomContent.css'
import { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { useLocation } from 'react-router-dom';

function MusicBottom() {

    const { dispatch, button_index } = useContext(GlobalContext);

    const buttonIndexReferences = {
        0: 'Sonido_Club',
        1: 'Unsilenced',
        2: 'Aurea_by_WC'       
    }

    const changeSlide = (index) => {
        // console.log(index)
    }

    return (
         <div>
            {buttonIndexReferences[button_index] === 'Sonido_Club' ? (
                // Content for Sonido_Club
                <div>
                    <h3 className="bottom-nav-title">{'<Sonido>'}</h3>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">1</p>
                        <div onClick={() => changeSlide(1)} className="bottom-nav-text">
                            <p>{'<13.1.2024>'}</p> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Les Enfants Brillants'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Tzena, Jason, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">2</p>
                        <div onClick={() => changeSlide(2)} className="bottom-nav-text">
                            <p>{'<18.111.2023>'}</p> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Les Enfants Brillants'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Ika & Usherenko, Conor Brophy'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">3</p>
                        <div onClick={() => changeSlide(3)} className="bottom-nav-text">
                            <p>{'<26.5.2023>'}</p> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Les Enfants Brillants'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Mathew Neequaye, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">4</p>
                        <div onClick={() => changeSlide(4)} className="bottom-nav-text">
                            <p>{'<14.1.2023>'}</p> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Les Enfants Brillants'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Tommy Pickles, Christian, Conor Brophy'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">4</p>
                        <div onClick={() => changeSlide(4)} className="bottom-nav-text">
                            <p>{'<21.10.2022>'}</p> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Les Enfants Brillants'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Poggio, Silvio, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">4</p>
                        <div onClick={() => changeSlide(4)} className="bottom-nav-text">
                            <p>{'<1.07.2022>'}</p> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Secret Warehouse'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Felix Dulac, Conor & Onoffon, Max TA'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">4</p>
                        <div onClick={() => changeSlide(4)} className="bottom-nav-text">
                            <p>{'<8.4.2022>'}</p> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Tunnel Barcelona'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Samovar, Conor Brophy, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">4</p>
                        <div onClick={() => changeSlide(4)} className="bottom-nav-text">
                            <p>{'<5.2.2022>'}</p> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Garage of the Bass Valley'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Raphael Carrau, Lyo, Sebastian, Remy, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">4</p>
                        <div onClick={() => changeSlide(4)} className="bottom-nav-text">
                            <p>{'<19.11.2021>'}</p> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Bus Terraza'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Donnie, Bruno&Marco'}</p>
                        </div>
                    </div>
                    <div className="bottom-nav-content">
                        <p className="bottom-nav-number">4</p>
                        <div onClick={() => changeSlide(4)} className="bottom-nav-text">
                            <p>{'<10.10.2021>'}</p> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Garage of the Bass Valley'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Raphael Carrau, Lyo, Sebastian, Remy, Bruno&Marco'}</p>
                        </div>
                    </div>
                </div>
            ) : buttonIndexReferences[button_index] === 'Unsilenced' ? (
                // Content for Unsilenced
                <div className="music-navbar-container">Content for Unsilenced</div>
            ) : buttonIndexReferences[button_index] === 'Aurea_by_WC' ? (
                <div className="music-navbar-container">Content for Aurea</div>
            ) : null }
        </div>
    )
}

export default MusicBottom