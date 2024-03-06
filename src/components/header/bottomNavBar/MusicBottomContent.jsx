import './BottomContent.css'
import { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { FaArrowLeft } from "react-icons/fa";


function MusicBottomContent() {

    const { slide_active_index, button_state } = useContext(GlobalContext);
    const [changeCounter, setChangeCounter] = useState(0);



    useEffect(() => {
        // Select all elements with the class 'active-class-vertical'
        const allElements = document.querySelectorAll('.active-class-vertical');

        // Find the element with the matching data-value attribute
        const activeElementToScroll = document.querySelector(`.active-class-vertical[data-value="${slide_active_index}"]`);

        // Filter elements that are not the active element to scroll
        const nonActiveElements = Array.from(allElements).filter(el => el !== activeElementToScroll);

        let modifiedNonActiveElements = [];

        if (activeElementToScroll) {
            // Modify non-active elements and track them
            nonActiveElements.forEach(element => {
                if (element.classList.contains('active-class-vertical-animate-add')) {
                    element.classList.add('active-class-vertical-animate-remove');
                    element.classList.remove('active-class-vertical-animate-add');
                    modifiedNonActiveElements.push(element);
                }
            });

            activeElementToScroll.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
            });

            const timeoutId = setTimeout(() => {
                activeElementToScroll.classList.add('active-class-vertical-animate-add');
                // Revert changes on all modified non-active elements
                modifiedNonActiveElements.forEach(element => {
                    element.classList.remove('active-class-vertical-animate-remove');
                });
            }, 400);

            // Cleanup function to clear the timeout if the component unmounts
            return () => clearTimeout(timeoutId);
        }
    }, [slide_active_index]);




    const buttonIndexReferences = {
        0: 'Sonido_Club',
        1: 'Unsilenced',
        2: 'Aurea_by_WC'       
    }


    // animation that will make all letters dissapear

    

    

        return (
            <>            
                {buttonIndexReferences[button_state.value] === 'Sonido_Club' && (
                    <>
                        <h3 className="bottom-nav-title">{'<Sonido>'}</h3>
                        <div className='bottom-nav-content'>
                            <div data-value="4" className="active-class-vertical">                            
                                <div className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<13.1.2024>'}</span> </div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Les Enfants Brillants'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Tzena, Jason, Bruno&Marco'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="5" className="active-class-vertical">
                            
                                <div className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">2</p><span>{'<18.111.2023>'}</span> </div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Les Enfants Brillants'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Ika & Usherenko, Conor Brophy'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="6" className="active-class-vertical">
                            
                                <div className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<26.5.2023>'}</span> </div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Les Enfants Brillants'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Mathew Neequaye, Bruno&Marco'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="7" className="active-class-vertical">
                        
                            <div  className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<14.1.2023>'}</span></div>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Les Enfants Brillants'}</p>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Tommy Pickles, Christian, Conor Brophy'}</p>
                            </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="8" className="active-class-vertical">
                        
                            <div  className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">5</p><span>{'<21.10.2022>'}</span></div> 
                                <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Les Enfants Brillants'}</p>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Poggio, Silvio, Bruno&Marco'}</p>
                            </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="9" className="active-class-vertical">
                        
                            <div  className="bottom-nav-text">                          
                                <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<1.07.2022>'}</span> </div> 
                                <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Secret Warehouse'}</p>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Felix Dulac, Conor & Onoffon, Max TA'}</p>
                            </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="0" className="active-class-vertical">
                        
                        <div  className="bottom-nav-text">                          
                            <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<8.4.2022>'}</span></div>  
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Tunnel Barcelona'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Samovar, Conor Brophy, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="1" className="active-class-vertical">
                    
                        <div  className="bottom-nav-text">                         
                            <div className="bottom-nav--title"><p className="bottom-nav-number">8</p> <span>{'<5.2.2022>'}</span> </div> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Garage of the Bass Valley'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Raphael Carrau, Lyo, Sebastian, Remy, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="2" className="active-class-vertical">
                    
                        <div  className="bottom-nav-text">
                            <div className="bottom-nav--title"><p className="bottom-nav-number">9</p><span>{'<19.11.2021>'}</span></div> 
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Bus Terraza'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Donnie, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="3" className="active-class-vertical">
                        
                        <div o className="bottom-nav-text">                           
                            <div className="bottom-nav--title"><p className="bottom-nav-number">10</p><span>{'<10.10.2021>'}</span></div> 
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Bus Terraza'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Wendy, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                </>
                )}
                {buttonIndexReferences[button_state.value] === 'Unsilenced' && (
                    <>
                        <h3 className="bottom-nav-title">{'<Unsilenced>'}</h3>
                        <div className='bottom-nav-content'>
                            <div data-value="7"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<22.1.2019>'}</span> </div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Generator'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Former, Tafu, Nicolás'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="0"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">                         
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">2</p> <span>{'<6.3.2020>'}</span></div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Reiss, Former, Bruno&Marco'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="1"  className="active-class-vertical"> 
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<6.3.2020>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Reiss, Former, Bruno&Marco'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="2"  className="active-class-vertical">                     
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<6.3.2020>'}</span></div>   
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Reiss, Former, Bruno&Marco'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="3"  className="active-class-vertical">                       
                                <div  className="bottom-nav-text">                           
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">5</p><span>{'<3.2.2021>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Amsterdam'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Paradise City Breakers, Daif, Sevenbeatz, Denalia'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="4"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<1.4.2022>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> LegramVG, DJ Senc, Malom'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="5"  className="active-class-vertical">                       
                                <div  className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<1.4.2022>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> LegramVG, DJ Senc, Malom'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="6"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">8</p><span>{'<1.4.2022>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> LegramVG, DJ Senc, Malom'}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
                {buttonIndexReferences[button_state.value] === 'Aurea_by_WC' && (
                    <>
                        <h3 className="bottom-nav-title">{'<Aurea>'}</h3>
                        <div className='bottom-nav-content'>
                            <div data-value="4"  className="active-class-vertical">                        
                                <div  className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<5.1.2021>'}</span></div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> El Pumarejo'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Sugar Free'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="5"  className="active-class-vertical">                        
                                <div  className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">2</p><span>{'<5.1.2021>'}</span></div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> El Pumarejo'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Sugar Free'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="6"  className="active-class-vertical">                     
                                <div  className="bottom-nav-text">                         
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<25.7.2020>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Buena Onda Social Club'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Melisa, Bruno&Marco, Nicolas'}</p>
                                </div>
                            </div>

                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="7"  className="active-class-vertical">                        
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<6.3.2020>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Oosterbar Amsterdam'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Reiss, Former'}</p>
                                </div>
                            </div>          
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="8"  className="active-class-vertical">                        
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">5</p><span>{'<6.3.2020>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Oosterbar Amsterdam'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Reiss, Former'}</p>
                                </div>
                            </div> 
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="9"  className="active-class-vertical">                       
                                <div  className="bottom-nav-text">                     
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<1.1.2020>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Secret Location'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Idayvuelta, Gerard, Darvu, Bruno&Marco, Nicolas'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="0"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">                      
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<31.12.2019>'}</span></div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> La Torre dels Lleons'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Clarens, Onut, John Heaven'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="1" className="active-class-vertical">                      
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">8</p><span>{'<31.12.2019>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> La Torre dels Lleons'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Clarens, Onut, John Heaven'}</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="2"  className="active-class-vertical">                       
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<9.11.2019>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Parc del Einna'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Clarens, Gerard, Vonvon, Hoder Mofeti'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="3"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text"> 
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">9</p><span>{'<20.9.2019>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Parc del Einna'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Dani2000, Jay Darvishan, Sensat'}</p>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </>  
        )
    }
    

export default MusicBottomContent