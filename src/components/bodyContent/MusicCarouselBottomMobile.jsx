import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/music/Music.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'


function MusicCarouselBottomMobile() {
    // Accessing global context values
    const { display_image_overlay, dispatch, display_body, screenWidth, change_slide } = useContext(GlobalContext);

    const buttonIndexReferences = {
        0: 'Sonido_Club',
        1: 'Unsilenced',
        2: 'Aurea_by_WC'       
    }

      
    return (
           <section className="music-carousel-bottom-container">
            <section >            
                {buttonIndexReferences[change_slide.value] === 'Sonido_Club' && (
                    <>
                        <h3 className="bottom-nav-title">{'<Timeline>'}</h3>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="4" className="active-class-vertical">                            
                                <div className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<13.1.2024>'}</span> </div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {'Les Enfants Brillants'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span> {' Tzena, Jason, Bruno&Marco'}</p>
                                    <p  className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'Event we did at Les Enfants Brillants where we invited the talented Slovenian artist Tzena to healdine the party along local talent Jason. On warm up duties we had our residents Bruno&Marco.'}
                                    </p> 
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="5" className="active-class-vertical">
                            
                                <div className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">2</p><span>{'<18.111.2023>'}</span> </div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span>{' Les Enfants Brillants'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Ika & Usherenko, Conor Brophy'}</p>
                                    <p className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'For our November residency at Enfants we had the pleasure to host Georgian legends Ika & Usherenko, owners of Small Moves record shop and label and bookers of legendary club Mtkvarze. On warm up duties we had our resident Conor.'}
                                    </p> 
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="6" className="active-class-vertical">
                            
                                <div className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<26.5.2023>'}</span> </div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span>{'Red 58'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Mathew Neequaye, Bruno&Marco'}</p>
                                    <p  className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                        <span>{'<resume>'}</span> {'For our first night at club Red58, we welcomed Butter Side Up resident Mathew Neequaye, who brought an exceptional selection of tracks.  Alongside him, our residents Bruno & Marco delivered equally compelling sets.'}
                                    </p> 
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="7" className="active-class-vertical">
                        
                            <div  className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<14.1.2023>'}</span></div>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Les Enfants Brillants'}</p>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Tommy Pickles, Christian, Conor Brophy'}</p>
                                <p className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'We had the privilege of featuring Tommy Pickles, a DJ hailing from the UK, as our headliner. Known for his profound understanding of the dance floor. The night started with an energizing warm-up set by our very own resident, Conor.'}
                                </p> 
                            </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="8" className="active-class-vertical">
                        
                            <div  className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">5</p><span>{'<21.10.2022>'}</span></div> 
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Les Enfants Brillants'}</p>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Poggio, Silvio, Bruno&Marco'}</p>
                            </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="9" className="active-class-vertical">
                        
                            <div  className="bottom-nav-text">                          
                                <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<1.07.2022>'}</span> </div> 
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Secret Warehouse'}</p>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Felix Dulac, Conor & Onoffon, Max TA'}</p>
                            </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="0" className="active-class-vertical">
                        
                        <div  className="bottom-nav-text">                          
                            <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<8.4.2022>'}</span></div>  
                            <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Tunnel Barcelona'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Samovar, Conor Brophy, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content bottom-nav-content-music'>
                        <div data-value="1" className="active-class-vertical">
                    
                        <div  className="bottom-nav-text">                         
                            <div className="bottom-nav--title"><p className="bottom-nav-number">8</p> <span>{'<5.2.2022>'}</span> </div> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}><span>{'<loc>'}</span> {' Garage of the Bass Valley'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}><span>{'<lineup>'}</span>{' Raphael Carrau, Lyo, Sebastian, Remy, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content bottom-nav-content-music'>
                        <div data-value="2" className="active-class-vertical">
                    
                        <div  className="bottom-nav-text">
                            <div className="bottom-nav--title"><p className="bottom-nav-number">9</p><span>{'<19.11.2021>'}</span></div> 
                            <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Bus Terraza'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Donnie, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content bottom-nav-content-music'>
                        <div data-value="3" className="active-class-vertical">
                        
                        <div o className="bottom-nav-text">                           
                            <div className="bottom-nav--title"><p className="bottom-nav-number">10</p><span>{'<10.10.2021>'}</span></div> 
                            <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Bus Terraza'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Wendy, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                </>
                )}
                {buttonIndexReferences[change_slide.value] === 'Unsilenced' && (
                    <>
                        <h3 className="bottom-nav-title">{'<Unsilenced Timeline>'}</h3>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="7"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<22.1.2019>'}</span> </div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Generator'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Former, Tafu, Nicolás'}</p>
                                    <p  className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'Event we did at Generator Hostel as our first event where we launched Unsilenced music collective.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="0"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">                         
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">2</p> <span>{'<6.3.2020>'}</span></div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Reiss, Former, Bruno&Marco'}</p>
                                    <p   className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'For our anniversary we joined forces with WhiteChoco Barcelona and hold an amazing party at Osterbar, local talend and VBX resident Reiss headlined the night. Bruno&Marco brought the magic straight from Barcelona and on warm up duties we had our residents Former.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="3"  className="active-class-vertical">                       
                                <div  className="bottom-nav-text">                           
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">5</p><span>{'<3.2.2021>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Amsterdam'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Paradise City Breakers, Daif, Sevenbeatz, Denalia'}</p>
                                    <p   className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'For our first music release, we welcomed italian producer Paradise City Breakers along Denalia, Outcast Torino resident. On the B side french producer DAIF and Sevenbeatz brought their A game.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="4"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<1.4.2022>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' LegramVG, DJ Senc, Malom'}</p>
                                    <p   className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'We had the privilege of featuring LegramVG, a DJ duo switzerland, as our headliners. Known for his profound understanding of the dance floor.  The night started with an energizing warm-up set by our very own resident, Malom.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {buttonIndexReferences[change_slide.value] === 'Aurea_by_WC' && (
                    <>
                        <h3 className="bottom-nav-title">{'<Aurea Timeline>'}</h3>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="4"  className="active-class-vertical">                        
                                <div  className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<5.1.2021>'}</span></div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' El Pumarejo'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Sugar Free, Bruno&Marco'}</p>
                                    <p   className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'Our final event at Pumarejo featured the headliner Sugar Free, showcasing their talent alongside local favorites Bruno and Marco who delivered an engaging warm-up set for an unforgettable night.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="6"  className="active-class-vertical">                     
                                <div  className="bottom-nav-text">                         
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<25.7.2020>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Buena Onda Social Club'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Melisa, Bruno&Marco, Nicolas'}</p>
                                    <p   className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'At Buena Onda Social Club, we orchestrated a vibrant night with Nicolas, Bruno & Marco, and Melisa leading the lineup. Their collective performance created an electrifying atmosphere, making it a memorable evening for everyone who joined us.'}
                                    </p>
                                </div>
                            </div>

                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="7"  className="active-class-vertical">                        
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<6.3.2020>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Oosterbar Amsterdam'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Reiss, Former'}</p>
                                    <p   className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'For Unsilenced Music anniversary, we collaborated to host an event spotlighting Reiss as the headliner, with Former setting the scene as the resident DJs. This gathering celebrated the labels milestones, bringing together an enthusiastic crowd for a night of top-tier electronic music and community spirit.'}
                                    </p>
                                </div>
                            </div>          
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="0"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">                      
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<31.12.2019>'}</span></div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' La Torre dels Lleons'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Clarens, Onut, John Heaven, Bruno&Marco'}</p>
                                    <p   className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'Our NYE celebration at Torre dels Lleons featured a dazzling lineup with Clarens, Onut, John Heaven, and residents Bruno&Marco, making it an unforgettable night of joy and music as we welcomed the new year together.'}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="9"  className="active-class-vertical">                       
                                <div  className="bottom-nav-text">                     
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<1.1.2020>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Secret Location'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Idayvuelta, Gerard, Darvu, Bruno&Marco, Nicolas'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="2"  className="active-class-vertical">                       
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<9.11.2019>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Parc del Einna'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Clarens, Gerard, Vonvon, Hoder Mofeti'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content bottom-nav-content-music'>
                            <div data-value="3"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text"> 
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">9</p><span>{'<20.9.2019>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Parc del Einna'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Dani2000, Jay Darvishan, Sensat'}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </section>  
             
           </section>

    );
}

export default MusicCarouselBottomMobile;