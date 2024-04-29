import '../header/NavBars.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useContext, useRef} from 'react'
import GlobalContext from '../../context/GlobalContext'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function CounterLoader() {
    const {isMobile, hide_loader, dispatch, screenWidth} = useContext(GlobalContext);


     // Refs to directly reference the counter elements
     const counter1Ref = useRef(null);
     const counter2Ref = useRef(null);
     const counter3Ref = useRef(null);
 
        useEffect(() => {
            // Wait for the DOM to stabilize after updates
            const delayBeforeStartingAnimations = 100; // Delay in milliseconds
        
            setTimeout(() => {
                if (counter3Ref.current) {
                    // Direct manipulation for counter3, similar to your original JS
                    for(let i = 0; i < 2; i++) {
                        for(let j = 0; j < 10; j++) {
                            const div = document.createElement("div");
                            div.className = "num";
                            div.textContent = j;
                            counter3Ref.current.appendChild(div);
                        }
                    }
        
                    const finalDiv = document.createElement("div");
                    finalDiv.className = "num";
                    finalDiv.textContent = "0";
                    counter3Ref.current.appendChild(finalDiv);
        
                    // Function to animate counters
                    const animate = (counterRef, duration, delay = 0) => {
                        const counter = counterRef.current;
                        const numHeight = counter.querySelector(".num").clientHeight;
                        const totalDistance = (counter.querySelectorAll('.num').length - 1) * numHeight;
        
                        gsap.to(counter, {
                            y: -totalDistance,
                            duration: duration,
                            delay: delay,
                            ease: "power2.inOut",
                        });
                    };
        
                    // Running animations for each counter with a slight delay
                    animate(counter3Ref, 2.1, 0.1); // You could adjust this delay as needed
                    if (counter2Ref.current) animate(counter2Ref, 2.1, 0.1);
                    if (counter1Ref.current) animate(counter1Ref, 1, 1.5); // Keeping the original delay for counter-1 and adding a little extra
                }
            }, delayBeforeStartingAnimations); // This is where the initial delay before starting animations is applied
        
        }, []);

    
        useGSAP(() => {
            // rotate to letters
            gsap.from(".loader-1", {
                width: 0,
                duration: 1,
                ease: "power2.inOut",
            });
            gsap.from(".loader-2", {
                width:0,
                delay: 0,
                duration: 1,
                ease: "power2.inOut",
            });
            gsap.from(".loader-3", {
                width: 0,
                duration: 1,
                delay: .2,
                ease: "power2.inOut",
            });
    
            gsap.from(".loader-4", {
                width: 0,
                duration: 1.5,
                delay: 1,
                ease: "power2.inOut",
            });
            gsap.from(".loader-5", {
                width:0,
                delay: 1,
                duration: 1.5,
                ease: "power2.inOut",
            });
            gsap.to(".loader-5", {
                borderTopRightRadius: '30px',
                borderBottomRightRadius: '30px',
                delay: 1.8,
                duration: .3,
                ease: "power2.inOut",
            });
     
            gsap.to(".loader", {
                background: "none",
                delay: 2.5,
                duration: 0.1,
            }) 
            gsap.to(".loader-lastname", {
                background: "none",
                delay: 2.5,
                duration: 0.1,
            }) 
    
            gsap.to(".loader-1", {
                borderTopLeftRadius: '0px',
                borderBottomLeftRadius: '0px',
                rotate:90,
                y: -50,
                x: screenWidth <= 520 ? 25 : screenWidth <= 750 ? 50 : 100,
                delay:2.7,
                duration: 0.5,
            });  
            gsap.to(".loader-2", {
                x: screenWidth <= 520 ? -16 : screenWidth <= 750 ? -4.25 : -23.5,
                y: screenWidth <= 520 ? -49.5 : screenWidth <= 750 ? -49.2  : -51,
                rotate: 70,
                duration: 0.5,
            }, "<");
            gsap.to(".loader-3", {
                x: screenWidth <= 520 ? -57 : screenWidth <= 750 ? -60 : -147.2,
                y: screenWidth <= 520 ? -49.5 : screenWidth <= 750 ? -49.35 : -50,
                rotate: 90,
                duration: 0.5,
            }, "<");
            gsap.to(".loader-4", {
                rotate:90,
                x: screenWidth <= 520 ? -32: screenWidth <= 750 ? -49.35 : -100,
                y: isMobile ? -53.5 : -50,
                delay:2.7,
                duration: 0.5,
            });
        
            gsap.to(".loader-5", {
                borderTopRightRadius: '0px',
                borderBottomRightRadius: '0px',
                x: screenWidth <= 520 ? -59.4 : screenWidth <= 750 ? -85.35 : -185,
                y:screenWidth <= 520 ? -28.5 : screenWidth <= 750 ? -24.1 : 15.1,
                rotate: 180,
                duration: 0.5,
            }, "<");
            gsap.to(".counter", {
                opacity: 0,
                duration: .9,
                ease: "power2.out",
                delay: 3.2,
            });
             gsap.to(".loader", {
                scale: screenWidth <= 520 ? 6.6 : screenWidth <= 750 ? 7 : 5,
                duration: 1.4,
                x: screenWidth <= 520 ? 30 : screenWidth <= 750 ? -85.35 : 0,
                yPercent: screenWidth <= 520 ? 2810 : screenWidth <= 750 ? 2400 : 1200,
                delay: 3.5,
                transformOrigin: "50% 50%",
                ease: "power2.InOut",
            });
             gsap.to(".loader-lastname", {
                scale: screenWidth <= 520 ? 6.33 : screenWidth <= 750 ? 7.09 : 5,
                xPercent: screenWidth <= 520 ? 380 : screenWidth <= 750 ? 460 : 250,
                yPercent: screenWidth <= 520 ? 2700 : screenWidth <= 750 ? 2455 : 1200,
                duration: 1.5,
                delay: 3.5,
                transformOrigin: "50% 50%",
                ease: "power2.InOut",
                onComplete: () => {
                    setTimeout(() => {
                        dispatch({
                            type: 'SET_HEADER',
                            payload: true,
                          });
                    },250)
                }
            });
            gsap.to(".loader", {
                xPercent: -400,
                duration: .7,
                ease: "power2.out",
                delay: 5.1,
            });
            gsap.to(".loader-lastname", {
                xPercent: -400,
                duration: .7,
                ease: "power2.out",
                delay: 5.1,
            });
            gsap.to(".loader", {
                rotate:33,
                y: 1000,
                x: 200,
                duration: 1,
                delay: 6.2,
                ease: "power2.inOut",
            });
            gsap.to(".loader-lastname", {
                rotate:33,
                y: 1000,
                x: 2300,
                duration: 1,
                delay: 6.2,
                ease: "power2.inOut",
            });
            gsap.to(".counter", {
                opacity:0,
                duration: 0.5,
                delay: 6.4,
                onComplete: () => {
                    dispatch({
                        type: 'SET_HEADER',
                        payload: true,
                      });
                }
            });
        }, [isMobile, screenWidth])
    


    return (
        <div style={{display: hide_loader ? 'none' : 'block'}}>
            <div className="loading-screen">
                <div className="loaders-containers">
                    <div className="loader">
                        <div className="loader-1 bar"></div>
                        <div className="loader-2 bar"></div>
                        <div className="loader-3 bar"></div>
                    </div>
                    <div className="loader-lastname">
                        <div className="loader-4 bar"></div>
                        <div className="loader-5 bar"></div>
                    </div>
                </div>
                <div className="counter">
                    <div className="counter-1 digit" ref={counter1Ref}>
                        <div className="num">0</div>
                        <div className="num num1offset1">1</div>
                    </div>
                    <div className="counter-2 digit" ref={counter2Ref}>
                        <div className="num">0</div>
                        <div className="num num1offset2">1</div>
                        <div className="num">2</div>
                        <div className="num">3</div>
                        <div className="num">4</div>
                        <div className="num">5</div>
                        <div className="num">6</div>
                        <div className="num">7</div>
                        <div className="num">8</div>
                        <div className="num">9</div>
                        <div className="num">0</div>

                    </div>
                    <div className="counter-3 digit" ref={counter3Ref}>
                        <div className="num">0</div>
                        <div className="num">1</div>
                        <div className="num">2</div>
                        <div className="num">3</div>
                        <div className="num">4</div>
                        <div className="num">5</div>
                        <div className="num">6</div>
                        <div className="num">7</div>
                        <div className="num">8</div>
                        <div className="num">9</div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default CounterLoader
