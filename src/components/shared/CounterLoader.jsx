import '../header/NavBars.css'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState, useContext, useRef} from 'react'
import GlobalContext from '../../context/GlobalContext'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


function CounterLoader() {
    const {dispatch, hide_loader} = useContext(GlobalContext);


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
                    animate(counter3Ref, 4.3, 0.1); // You could adjust this delay as needed
                    if (counter2Ref.current) animate(counter2Ref, 5.3, 0.1);
                    if (counter1Ref.current) animate(counter1Ref, 1.3, 4.1); // Keeping the original delay for counter-1 and adding a little extra
                }
            }, delayBeforeStartingAnimations); // This is where the initial delay before starting animations is applied
        
        }, []);
        

    useGSAP(() => {

        // rotate to letters
        gsap.from(".loader-1", {
            width: 0,
            duration: 2,
            ease: "power2.inOut",
        });
        gsap.from(".loader-2", {
            width:0,
            delay: 0,
            duration: 2,
            ease: "power2.inOut",
        });
        gsap.from(".loader-3", {
            width: 0,
            duration: 1.5,
            delay: 1,
            ease: "power2.inOut",
        });

        gsap.from(".loader-4", {
            width: 0,
            duration: 1.7,
            delay: 2.2,
            ease: "power2.inOut",
        });
        gsap.from(".loader-5", {
            width:0,
            delay: 2.8,
            duration: 2,
            ease: "power2.inOut",
        });
 
        gsap.to(".loader", {
            background: "none",
            delay: 5,
            duration: 0.1,
        }) 
        gsap.to(".loader-lastname", {
            background: "none",
            delay: 5,
            duration: 0.1,
        }) 

        gsap.to(".loader-1", {
            rotate:90,
            y: -50,
            x:100,
            delay:5,
            duration: 0.5,
        });  
        gsap.to(".loader-2", {
            x:-21,
            y: -51,
            rotate: 68,
            duration: 0.5,
        }, "<");
        gsap.to(".loader-3", {
            x:-142,
            y: -50,
            rotate: 90,
            duration: 0.5,
        }, "<");

        gsap.to(".loader-4", {
            rotate:90,
            y: -50,
            x:-100,
            delay:5,
            duration: 0.5,
        });
    
        gsap.to(".loader-5", {
            x:-185,
            y: 15.1,
            rotate: 180,
            duration: 0.5,
        }, "<");

         gsap.to(".loader", {
            scale:35,
            duration: 1,
            delay: 6.2,
            ease: "power2.inOut",
        });
         gsap.to(".loader-lastname", {
            scale:35,
            duration: 1,
            delay: 6.2,
            ease: "power2.inOut",
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
            delay: 6.2,
            onComplete: () => {
                dispatch({
                    type: 'SET_HEADER',
                    payload: true,
                  });
            }
        });
        gsap.to(".loading-screen", {
            opacity:0,
            duration: 0.5,
            delay: 6.6,
            ease: "power1.inOut",
        });
    }, [])
    


    return (
        <div style={{display: hide_loader ? 'none' : 'block'}}>
            {/* <div className="website-content">
                <div className="header-counter">
                    <div className="h1">
                        <h1 className='h1-title'>Website</h1>
                        <h1 className='h1-title'>Content</h1>
                    </div>
                    <div className="header-revealer">
                    </div>
                </div>
            </div> */}
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
