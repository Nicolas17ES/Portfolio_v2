import './BottomContent.css'
import { useEffect, useState, useContext, useRef } from 'react';
import GlobalContext from '../../../context/GlobalContext';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import usePreviousLocation from '../../../hooks/usePreviousLocation'

gsap.registerPlugin(ScrollTrigger);

function ProjectstBottomNavBarContent() {
    const prevLocation = usePreviousLocation();
    const { project_index_hovered, display_body, navbar_location, lateral_navbar } = useContext(GlobalContext);
    const [awaitExpand, setAwaitExpand] = useState(true);


    const paragraphRefShop = useRef(null);
    const paragraphRefBio = useRef(null);
    const paragraphRefTools = useRef(null);

    useEffect(() => {
        // Function to reset all paragraphs to their initial state
        const resetParagraphs = () => {
            gsap.to([paragraphRefShop.current, paragraphRefBio.current, paragraphRefTools.current], {
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
                marginTop: 6,
                padding: '3px 8px',
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
        let paragraphToExpand = project_index_hovered === 1 ? paragraphRefShop.current : 
                                project_index_hovered === 3 ? paragraphRefBio.current : 
                                project_index_hovered === 2 ? paragraphRefTools.current : null;
    
        if (paragraphToExpand && !awaitExpand) {
            expandParagraph(paragraphToExpand);
        }
    }, [project_index_hovered ,awaitExpand]);

    useEffect(() => {
        const ctx = gsap.context(() => {
        //   if (lateral_navbar) {
            gsap.fromTo('.bottom-nav-content-projects', 
              { opacity: 0, y: -100 }, 
              { opacity: 1, y: 0, duration: .5, stagger: 0.2, delay: (prevLocation === '/about' || prevLocation === '/music') ? 2 : .5 , 
                onComplete: () => 
                {
                    setAwaitExpand(false) 
                }
            }
            );
        //   }
        });
      
        return () => ctx.revert();
      }, [lateral_navbar, navbar_location]);

      
    
    return (
         <div>
            <div className='bottom-nav-content bottom-nav-content-projects'>
                <div data-value="4" className="active-class-vertical">                            
                    <div className="bottom-nav-text">
                        <div className="bottom-nav--title"><p className="bottom-nav-number">1</p><span>{'<1.2023>'}</span> </div>
                        <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<title>'}</span> {'Aulart Shoop'}</p>
                        <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<technologies>'}</span> {'NodeJs, React, Google Cloud, Mysql'}</p>
                        <p ref={paragraphRefShop}  className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                        <span>{'<resume>'}</span> {'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam natus consectetur aliquam dolorum quis labore nostrum, autem ex dolorem magni aspernatur expedita voluptatibus possimus minima corporis.'}
                        </p>                    
                    </div>
                </div>
            </div>
            <div className='bottom-nav-content bottom-nav-content-projects'>
                <div data-value="6" className="active-class-vertical">
                
                    <div className="bottom-nav-text">
                        <div className="bottom-nav--title"><p className="bottom-nav-number">2</p><span>{'<12.2023>'}</span> </div>
                        <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<title>'}</span> {'Aulart Tools'}</p>
                        <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<technologies>'}</span> {'NodeJs, React, GSAP, Google Cloud, Mysql'}</p>
                        <p ref={paragraphRefTools} className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                        <span>{'<resume>'}</span> {'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam natus consectetur aliquam dolorum quis labore nostrum, autem ex dolorem magni aspernatur expedita voluptatibus possimus minima corporis. autem ex dolorem magni aspernatur expedita voluptatibus possimus minima corporis.'}
                        </p> 
                    </div>
                </div>
            </div>
            <div className='bottom-nav-content bottom-nav-content-projects'>
                <div data-value="5" className="active-class-vertical">
                
                    <div className="bottom-nav-text">
                        <div className="bottom-nav--title"><p className="bottom-nav-number">3</p><span>{'<6.2023>'}</span> </div>
                        <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<title>'}</span> {'Link In Bio'}</p>
                        <p style={{marginLeft: '15px', marginTop: '2px'}}><span>{'<technologies>'}</span> {'React, MongoDB, Google Cloud'}</p>
                        <p ref={paragraphRefBio} className="project-resume" style={{ marginLeft: '15px', marginTop: '2px', overflow: 'hidden', height: 0 }}>
                        <span>{'<resume>'}</span> {'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veniam natus consectetur aliquam dolorum quis labore nostrum, autem ex dolorem magni aspernatur expedita voluptatibus possimus minima corporis.autem ex dolorem magni aspernatur expedita voluptatibus possimus minima corporis.'}
                        </p> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectstBottomNavBarContent
