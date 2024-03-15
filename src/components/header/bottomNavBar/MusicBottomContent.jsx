import './BottomContent.css'
import { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function MusicBottomContent() {

    const { slide_active_index, button_state, project_index_hovered } = useContext(GlobalContext);
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

    // dependibng on the player thats being hovered show one paragraph and hide the others
    const paragraphRefTzena = useRef(null);
    const paragraphRefIkaUshrenko = useRef(null);
    const paragraphRefMathew = useRef(null);
    const paragraphRefPickles = useRef(null);

    useEffect(() => {
        // Function to reset all paragraphs to their initial state
        const resetParagraphs = () => {
            gsap.to([paragraphRefTzena.current, paragraphRefIkaUshrenko.current, paragraphRefMathew.current, paragraphRefPickles.current], {
                height: 0,
                opacity: 0,
                duration: 0.5,
                ease: 'power1.in',
            });
        };
    
        // Function to expand the selected paragraph
        const expandParagraph = (paragraph) => {
            gsap.to(paragraph, {
                height: 'auto', // Assuming you want it to expand to its natural height
                opacity: 1,
                duration: 0.5, // Adjust duration as needed
                ease: 'power1.out',
                onComplete: () => {
                    // Scroll the paragraph into view after the expansion animation completes
                    paragraph.scrollIntoView({
                        behavior: 'smooth',
                        block: 'center'
                    });
                }
            });
        };
    
        // Reset paragraphs first to ensure only one can expand at a time
        resetParagraphs();
    
        // Determine which paragraph to expand based on the hovered index
        let paragraphToExpand = project_index_hovered === 1 ? paragraphRefTzena.current : 
                                project_index_hovered === 2 ? paragraphRefIkaUshrenko.current : 
                                project_index_hovered === 3 ? paragraphRefMathew.current :
                                project_index_hovered === 4 ? paragraphRefPickles.current : null;
    
        if (paragraphToExpand) {
            expandParagraph(paragraphToExpand);
        }
    }, [project_index_hovered]);
    

    

    

        return (
            <>            
                {buttonIndexReferences[button_state.value] === 'Sonido_Club' && (
                    <>
                        <h3 className="bottom-nav-title">{'<Sonido>'}</h3>
                        <div className='bottom-nav-content'>
                            <div data-value="4" className="active-class-vertical">                            
                                <div className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<13.1.2024>'}</span> </div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {'Les Enfants Brillants'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span> {' Tzena, Jason, Bruno&Marco'}</p>
                                    <p ref={paragraphRefTzena}  className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'Event we did at Les Enfants Brillants where we invited the talented Slovenian artist Tzena to healdine the party along local talent Jason. On warm up duties we had our residents Bruno&Marco.'}
                                    </p> 
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="5" className="active-class-vertical">
                            
                                <div className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">2</p><span>{'<18.111.2023>'}</span> </div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span>{' Les Enfants Brillants'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Ika & Usherenko, Conor Brophy'}</p>
                                    <p ref={paragraphRefIkaUshrenko}  className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'For our November residency at Enfants we had the pleasure to host Georgian legends Ika & Usherenko, owners of Small Moves record shop and label and bookers of legendary club Mtkvarze. On warm up duties we had our resident Conor.'}
                                    </p> 
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="6" className="active-class-vertical">
                            
                                <div className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<26.5.2023>'}</span> </div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span>{'Red 58'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Mathew Neequaye, Bruno&Marco'}</p>
                                    <p ref={paragraphRefMathew}  className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                        <span>{'<resume>'}</span> {'For our first night at club Red58, we welcomed Butter Side Up resident Mathew Neequaye, who brought an exceptional selection of tracks.  Alongside him, our residents Bruno & Marco delivered equally compelling sets.'}
                                    </p> 
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="7" className="active-class-vertical">
                        
                            <div  className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<14.1.2023>'}</span></div>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Les Enfants Brillants'}</p>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Tommy Pickles, Christian, Conor Brophy'}</p>
                                <p ref={paragraphRefPickles}  className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                                    <span>{'<resume>'}</span> {'We had the privilege of featuring Tommy Pickles, a DJ hailing from the UK, as our headliner. Known for his profound understanding of the dance floor. The night started with an energizing warm-up set by our very own resident, Conor.'}
                                </p> 
                            </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="8" className="active-class-vertical">
                        
                            <div  className="bottom-nav-text">
                                <div className="bottom-nav--title"><p className="bottom-nav-number">5</p><span>{'<21.10.2022>'}</span></div> 
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Les Enfants Brillants'}</p>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Poggio, Silvio, Bruno&Marco'}</p>
                            </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="9" className="active-class-vertical">
                        
                            <div  className="bottom-nav-text">                          
                                <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<1.07.2022>'}</span> </div> 
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Secret Warehouse'}</p>
                                <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Felix Dulac, Conor & Onoffon, Max TA'}</p>
                            </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="0" className="active-class-vertical">
                        
                        <div  className="bottom-nav-text">                          
                            <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<8.4.2022>'}</span></div>  
                            <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Tunnel Barcelona'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Samovar, Conor Brophy, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="1" className="active-class-vertical">
                    
                        <div  className="bottom-nav-text">                         
                            <div className="bottom-nav--title"><p className="bottom-nav-number">8</p> <span>{'<5.2.2022>'}</span> </div> 
                            <p style={{marginLeft: '15px', marginTop: '4px'}}><span>{'<loc>'}</span> {' Garage of the Bass Valley'}</p>
                            <p style={{marginLeft: '15px', marginTop: '4px'}}><span>{'<lineup>'}</span>{' Raphael Carrau, Lyo, Sebastian, Remy, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
                        <div data-value="2" className="active-class-vertical">
                    
                        <div  className="bottom-nav-text">
                            <div className="bottom-nav--title"><p className="bottom-nav-number">9</p><span>{'<19.11.2021>'}</span></div> 
                            <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Bus Terraza'}</p>
                            <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Donnie, Bruno&Marco'}</p>
                        </div>
                        </div>
                    </div>
                    <div className='bottom-nav-content'>
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
                {buttonIndexReferences[button_state.value] === 'Unsilenced' && (
                    <>
                        <h3 className="bottom-nav-title">{'<Unsilenced>'}</h3>
                        <div className='bottom-nav-content'>
                            <div data-value="7"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<22.1.2019>'}</span> </div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Generator'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Former, Tafu, Nicolás'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="0"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">                         
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">2</p> <span>{'<6.3.2020>'}</span></div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Reiss, Former, Bruno&Marco'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="1"  className="active-class-vertical"> 
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<6.3.2020>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Reiss, Former, Bruno&Marco'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="2"  className="active-class-vertical">                     
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<6.3.2020>'}</span></div>   
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Reiss, Former, Bruno&Marco'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="3"  className="active-class-vertical">                       
                                <div  className="bottom-nav-text">                           
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">5</p><span>{'<3.2.2021>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Amsterdam'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Paradise City Breakers, Daif, Sevenbeatz, Denalia'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="4"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<1.4.2022>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' LegramVG, DJ Senc, Malom'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="5"  className="active-class-vertical">                       
                                <div  className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<1.4.2022>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' LegramVG, DJ Senc, Malom'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="6"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">8</p><span>{'<1.4.2022>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Oosterbar'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' LegramVG, DJ Senc, Malom'}</p>
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
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' El Pumarejo'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Sugar Free'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="5"  className="active-class-vertical">                        
                                <div  className="bottom-nav-text">
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">2</p><span>{'<5.1.2021>'}</span></div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' El Pumarejo'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Sugar Free'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="6"  className="active-class-vertical">                     
                                <div  className="bottom-nav-text">                         
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<25.7.2020>'}</span></div>  
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Buena Onda Social Club'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Melisa, Bruno&Marco, Nicolas'}</p>
                                </div>
                            </div>

                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="7"  className="active-class-vertical">                        
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">4</p><span>{'<6.3.2020>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Oosterbar Amsterdam'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Reiss, Former'}</p>
                                </div>
                            </div>          
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="8"  className="active-class-vertical">                        
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">5</p><span>{'<6.3.2020>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Oosterbar Amsterdam'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Reiss, Former'}</p>
                                </div>
                            </div> 
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="9"  className="active-class-vertical">                       
                                <div  className="bottom-nav-text">                     
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">6</p><span>{'<1.1.2020>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Secret Location'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Idayvuelta, Gerard, Darvu, Bruno&Marco, Nicolas'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="0"  className="active-class-vertical">                      
                                <div  className="bottom-nav-text">                      
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<31.12.2019>'}</span></div> 
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' La Torre dels Lleons'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Clarens, Onut, John Heaven'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="1" className="active-class-vertical">                      
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">8</p><span>{'<31.12.2019>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' La Torre dels Lleons'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Clarens, Onut, John Heaven'}</p>
                                </div>
                            </div>
                            
                        </div>
                        <div className='bottom-nav-content'>
                            <div data-value="2"  className="active-class-vertical">                       
                                <div  className="bottom-nav-text">                          
                                    <div className="bottom-nav--title"><p className="bottom-nav-number">7</p><span>{'<9.11.2019>'}</span></div>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<loc>'}</span> {' Parc del Einna'}</p>
                                    <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<lineup>'}</span>{' Clarens, Gerard, Vonvon, Hoder Mofeti'}</p>
                                </div>
                            </div>
                        </div>
                        <div className='bottom-nav-content'>
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
            </>  
        )
    }
    

export default MusicBottomContent