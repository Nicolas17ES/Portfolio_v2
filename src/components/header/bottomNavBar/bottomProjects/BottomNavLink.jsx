import '../BottomContent.css'
import {useRef, useEffect, useContext } from 'react'
import { useGSAP,} from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import GlobalContext from '../../../../context/GlobalContext';

function BottomNavLink() {

    const { navbar_location, display_body, prevLocation } = useContext(GlobalContext);

    return (
        <>
        <h3 className="bottom-nav-title bottom-nav-projects">{'<Technology stack>'}</h3>
                <div className='bottom-nav-content bottom-nav-projects'>
                                                       
                            <div className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<stack>'}</span></div>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}>{'Reat, NodeJS, Amazon Web Services, Firebase'}</p>
                        
                            </div>
                            
                        </div>
                        <div className='bottom-nav-content bottom-nav-projects'>
                        
                            
                            <div className="bottom-nav-text">
                        <div className="bottom-nav--title"><p className="bottom-nav-number">2</p><span>{'<purpose>'}</span></div>
                        <p style={{marginLeft: '15px', marginTop: '2px'}}>{'Leveraging the robustness of Node.js for the backend and the agility of React for the frontend, the project was brought to life with a keen focus on scalability and ease of use. Hosted on Amazon Web Services, it guaranteed reliability and seamless accessibility worldwide.'}</p>
                
                    </div>
                            
                        </div>
        
                        {/* <div className='bottom-nav-content bottom-nav-projects'>
                                                       
                            <div className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<stack>'}</span> {'React'}</div>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<purpose>'}</span> {'Crafted dynamic user interfaces for real-time content management.'}</p>
                        
                            </div>
                            
                        </div>
                        <div className='bottom-nav-content bottom-nav-projects'>
                        
                            
                            <div className="bottom-nav-text">
                        <div className="bottom-nav--title"><p className="bottom-nav-number">2</p><span>{'<stack>'}</span> {'NodeJS'}</div>
                        <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<purpose>'}</span> {'Powered server-side operations, optimizing application responsiveness'}</p>
                
                    </div>
                            
                        </div>
                        <div className='bottom-nav-content bottom-nav-projects'>
                            
                            
                            <div className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<stack>'}</span> {'Amazon Web Services'}</div>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<purpose>'}</span> {'Powered server-side operations, optimizing application responsiveness'}</p>
                        
                            </div>

                            
                        </div>
                        <div className='bottom-nav-content bottom-nav-projects'>
                            
                        
                            <div className="bottom-nav-text">
                            <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<stack>'}</span> {'Firebase'}</div>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<purpose>'}</span> {'Facilitated real-time data synchronization and user authentication, enhancing backend efficiency and scalability.'}</p>
                        
                            </div>
                            
                        </div> */}

        </>
    )
}

export default BottomNavLink