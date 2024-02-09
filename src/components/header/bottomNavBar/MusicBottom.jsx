import './BottomContent.css'
import { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { useLocation } from 'react-router-dom';

function MusicBottom() {

    const { button_index, slide_active_index, button_state } = useContext(GlobalContext);
    const [changeCounter, setChangeCounter] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(null);
    const prevIndexRef = useRef(null);
    const prevButtonStateValueRef = useRef(null);


     // Increment counter when button_index changes
    useEffect(() => {
        setChangeCounter(prev => prev + 1);
    }, [button_index]);




// useEffect(() => {
//     // Store the current value of button_state.value for comparison
//     const currentValue = button_state?.value;
//     console.log("currentValue",currentValue )
//     console.log("prevButtonStateValueRef.current",prevButtonStateValueRef.current )

//     // Define a cleanup function that will be called on the next render or on component unmount
//     return () => {
//         const hasButtonStateChanged = prevButtonStateValueRef.current !== currentValue;

//         if (hasButtonStateChanged) {
//             console.log('Button state has changed');
//             prevIndexRef.current = null;
//         } else {
//             console.log('Button state has not changed');
//             prevIndexRef.current = currentIndex;
//         }

//         // Update the ref with the current value for the next comparison
//         prevButtonStateValueRef.current = currentValue;
//     };
// }, [currentIndex, button_state?.value]); // Depend on button_state.value directly



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



  // if(elementToScroll){
        //     // if the page is just rendering so theres no previous index, just highliught the first item
        //     if(prevIndexRef.current === null){
        //         console.log('previous on render', prevIndexRef.current)
        //         elementToScroll.classList.add('active-class-vertical-animate-add')
        //     } else if(prevIndexRef.current !== null){
        //         // if the page was already rendered and therefore theres a previous index, get the previous index html element, eliminate the annimationn class and add class to remove it
        //         console.log('called with previous')
        //         const previousElement = document.querySelector(`.active-class-vertical[data-value="${prevIndexRef.current}"]`);
        //         console.log("previousElement", previousElement)
        //         previousElement.classList.remove('active-class-vertical-animate-add')
        //         previousElement.classList.add('active-class-vertical-animate-remove')
        //         // set a time out to await the removin class animation and scroll to the new elemennt, add a class
        //         setTimeout(() => {
        //              elementToScroll.scrollIntoView({
        //                 behavior: 'smooth', // Smooth scroll
        //                 block: 'center', // Scroll to the nearest edge of the viewport
        //             });
        //             elementToScroll.classList.add('active-class-vertical-animate-add')
        //             // eliminate the remove class from the previous element so you can later on add a new class if needed
        //             previousElement.classList.remove('active-class-vertical-animate-remove')
        //         }, 1000)
        //     }
        // }

    const animationKey = `animation-${button_index}-${changeCounter}`;

    const buttonIndexReferences = {
        0: 'Sonido_Club',
        1: 'Unsilenced',
        2: 'Aurea_by_WC'       
    }

    
    // function AnimatedLines({ isActive }) {
    //     const [animationClass, setAnimationClass] = useState('');

    //     useEffect(() => {
    //         // Determine the animation based on isActive turning true or false
    //         let className = isActive ? 'active-class-vertical-animate-add' : 'active-class-vertical-animate-remove';
    //         setAnimationClass(className);
            
    //     }, [isActive, slide_active_index]);

    //     return (
    //         <>
    //         <span className={isActive ? `active-class-vertical ${animationClass}` : ''}></span>
    //         </>
    //     );
    // }


    const changeSlide = (index) => {
        // console.log(index)
    }

    const getClassName = (dataValue) => {
        return `${slide_active_index === dataValue ? 'active-class-vertical' : 'block'}`;
    };

    // if(button_state && button_state.clicked === true && button_state.value === button_index){
        return (
         <div className="scrollable-container">
            {buttonIndexReferences[button_index] === 'Sonido_Club' ? (
                // Content for Sonido_Club
                <div key={animationKey} className="music-navbar-container">
                    <h3 className="bottom-nav-title">{'<Sonido>'}</h3>
                    <div className='bottom-nav-content'>
                        <div data-value="9" className="active-class-vertical">                            
                            <div onClick={() => changeSlide(1)} className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<13.1.2024>'}</span> </div>
                                <p>{'<loc> Les Enfants Brillants'}</p>
                                <p>{'<lineup> Tzena, Jason, Bruno&Marco'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="0" className="active-class-vertical">
                        
                            <div onClick={() => changeSlide(2)} className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">2</p><span>{'<18.111.2023>'}</span> </div>
                                <p>{'<loc> Les Enfants Brillants'}</p>
                                <p>{'<lineup> Ika & Usherenko, Conor Brophy'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="1" className="active-class-vertical">
                        
                            <div onClick={() => changeSlide(3)} className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<26.5.2023>'}</span> </div>
                                <p>{'<loc> Les Enfants Brillants'}</p>
                                <p>{'<lineup> Mathew Neequaye, Bruno&Marco'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="2" className="active-class-vertical">
                    
                        <div onClick={() => changeSlide(4)} className="bottom-nav-text">
                            <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<14.1.2023>'}</span></div>
                            <p>{'<loc> Les Enfants Brillants'}</p>
                            <p>{'<lineup> Tommy Pickles, Christian, Conor Brophy'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="3" className="active-class-vertical">
                    
                        <div onClick={() => changeSlide(5)} className="bottom-nav-text">
                            <div className="bottom-nav--title"><p className="bottom-nav-number">5</p><span>{'<21.10.2022>'}</span></div> 
                            <p>{'<loc> Les Enfants Brillants'}</p>
                            <p>{'<lineup> Poggio, Silvio, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="4" className="active-class-vertical">
                    
                        <div onClick={() => changeSlide(6)} className="bottom-nav-text">                          
                            <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<1.07.2022>'}</span> </div> 
                            <p>{'<loc> Secret Warehouse'}</p>
                            <p>{'<lineup> Felix Dulac, Conor & Onoffon, Max TA'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="5" className="active-class-vertical">
                    
                        <div onClick={() => changeSlide(7)} className="bottom-nav-text">                          
                            <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<8.4.2022>'}</span></div>  
                            <p>{'<loc> Tunnel Barcelona'}</p>
                            <p>{'<lineup> Samovar, Conor Brophy, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="6" className="active-class-vertical">
                    
                        <div onClick={() => changeSlide(8)} className="bottom-nav-text">                         
                            <div className="bottom-nav--title"><p className="bottom-nav-number">8</p> <span>{'<5.2.2022>'}</span> </div> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<loc> Garage of the Bass Valley'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}>{'<lineup> Raphael Carrau, Lyo, Sebastian, Remy, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="7" className="active-class-vertical">
                    
                        <div onClick={() => changeSlide(9)} className="bottom-nav-text">
                            <div className="bottom-nav--title"><p className="bottom-nav-number">9</p><span>{'<19.11.2021>'}</span></div> 
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Bus Terraza'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Donnie, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="8" className="active-class-vertical">
                        
                        <div onClick={() => changeSlide(10)} className="bottom-nav-text">                           
                            <div className="bottom-nav--title"><p className="bottom-nav-number">10</p><span>{'<10.10.2021>'}</span></div> 
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<loc> Bus Terraza'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}>{'<lineup> Wendy, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                </div>
            ) : buttonIndexReferences[button_index] === 'Unsilenced' ? (
                <div key={animationKey} className="music-navbar-container">
                    <h3 className="bottom-nav-title">{'<Unsilenced>'}</h3>
                    <div className='bottom-nav-content'>
                        <div data-value="7"  className="active-class-vertical">                      
                            <div onClick={() => changeSlide(1)} className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<22.1.2019>'}</span> </div> 
                                <p>{'<loc> Generator'}</p>
                                <p>{'<lineup> Former, Tafu, Nicolás'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="0"  className="active-class-vertical">                      
                            <div onClick={() => changeSlide(1)} className="bottom-nav-text">                         
                                <div className="bottom-nav--title"><p className="bottom-nav-number">2</p> <span>{'<6.3.2020>'}</span></div> 
                                <p>{'<loc> Oosterbar'}</p>
                                <p>{'<lineup> Reiss, Former, Bruno&Marco'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="1"  className="active-class-vertical"> 
                            <div onClick={() => changeSlide(1)} className="bottom-nav-text">                          
                                <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<6.3.2020>'}</span></div>  
                                <p>{'<loc> Oosterbar'}</p>
                                <p>{'<lineup> Reiss, Former, Bruno&Marco'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="2"  className="active-class-vertical">                     
                            <div onClick={() => changeSlide(1)} className="bottom-nav-text">                          
                                <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<6.3.2020>'}</span></div>   
                                <p>{'<loc> Oosterbar'}</p>
                                <p>{'<lineup> Reiss, Former, Bruno&Marco'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="3"  className="active-class-vertical">                       
                            <div onClick={() => changeSlide(1)} className="bottom-nav-text">                           
                                <div className="bottom-nav--title"><p className="bottom-nav-number">5</p><span>{'<3.2.2021>'}</span></div>  
                                <p>{'<loc> Amsterdam'}</p>
                                <p>{'<lineup> Paradise City Breakers, Daif, Sevenbeatz, Denalia'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="4"  className="active-class-vertical">                      
                            <div onClick={() => changeSlide(1)} className="bottom-nav-text">                          
                                <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<1.4.2022>'}</span></div>  
                                <p>{'<loc> Oosterbar'}</p>
                                <p>{'<lineup> LegramVG, DJ Senc, Malom'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="5"  className="active-class-vertical">                       
                            <div onClick={() => changeSlide(1)} className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<1.4.2022>'}</span></div>  
                                <p>{'<loc> Oosterbar'}</p>
                                <p>{'<lineup> LegramVG, DJ Senc, Malom'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="6"  className="active-class-vertical">                      
                            <div onClick={() => changeSlide(1)} className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">8</p><span>{'<1.4.2022>'}</span></div>  
                                <p>{'<loc> Oosterbar'}</p>
                                <p>{'<lineup> LegramVG, DJ Senc, Malom'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : buttonIndexReferences[button_index] === 'Aurea_by_WC' ? (
                <div key={animationKey} className="music-navbar-container">
                    <h3 className="bottom-nav-title">{'<Aurea>'}</h3>
                    <div className='bottom-nav-content'>
                        <div data-value="7"  className="active-class-vertical">                        
                            <div onClick={() => changeSlide(1)} className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<5.1.2021>'}</span></div> 
                                <p>{'<loc> El Pumarejo'}</p>
                                <p>{'<lineup> Sugar Free'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="0"  className="active-class-vertical">                     
                            <div onClick={() => changeSlide(2)} className="bottom-nav-text">                         
                                <div className="bottom-nav--title"><p className="bottom-nav-number">2</p><span>{'<25.7.2020>'}</span></div>  
                                <p>{'<loc> Buena Onda Social Club'}</p>
                                <p>{'<lineup> Melisa, Bruno&Marco, Nicolas'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="1"  className="active-class-vertical">                        
                            <div onClick={() => changeSlide(3)} className="bottom-nav-text">                          
                                <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<6.3.2020>'}</span></div>
                                <p>{'<loc> Oosterbar Amsterdam'}</p>
                                <p>{'<lineup> Reiss, Former'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="2"  className="active-class-vertical">                       
                            <div onClick={() => changeSlide(4)} className="bottom-nav-text">                     
                                <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<1.1.2020>'}</span></div>
                                <p>{'<loc> Secret Location'}</p>
                                <p>{'<lineup> Idayvuelta, Gerard, Darvu, Bruno&Marco, Nicolas'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="3"  className="active-class-vertical">                      
                            <div onClick={() => changeSlide(5)} className="bottom-nav-text">                      
                                <div className="bottom-nav--title"><p className="bottom-nav-number">5</p><span>{'<31.12.2019>'}</span></div> 
                                <p>{'<loc> La Torre dels Lleons'}</p>
                                <p>{'<lineup> Clarens, Onut, John Heaven'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="4" className="active-class-vertical">                      
                            <div onClick={() => changeSlide(5)} className="bottom-nav-text">                          
                                <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<31.12.2019>'}</span></div>
                                <p>{'<loc> La Torre dels Lleons'}</p>
                                <p>{'<lineup> Clarens, Onut, John Heaven'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="5"  className="active-class-vertical">                       
                            <div onClick={() => changeSlide(5)} className="bottom-nav-text">                          
                                <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<9.11.2019>'}</span></div>
                                <p>{'<loc> Parc del Einna'}</p>
                                <p>{'<lineup> Clarens, Gerard, Vonvon, Hoder Mofeti'}</p>
                            </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="6"  className="active-class-vertical">                      
                            <div onClick={() => changeSlide(5)} className="bottom-nav-text"> 
                                <div className="bottom-nav--title"><p className="bottom-nav-number">8</p><span>{'<20.9.2019>'}</span></div>
                                <p>{'<loc> Parc del Einna'}</p>
                                <p>{'<lineup> Dani2000, Jay Darvishan, Sensat'}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ) : null }
        </div>
    )

    }
    

export default MusicBottom