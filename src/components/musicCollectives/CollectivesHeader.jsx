import GlobalContext from "../../context/GlobalContext";
import { useContext, useEffect } from "react";
import ReissUnsilenced from '../../images/ReissUnsilenced.jpeg';
import WhiteChocoNye from '../../images/WhiteChocoNye.jpeg';
import { GiMagnifyingGlass } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function CollectivesHeader() {
   
      

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".collectives-header-image",
                start: "top center+=100", // Adjust these values as needed
                end: "bottom top",
                scrub: 1, // Smooth out the animation on fast scrolls
                toggleActions: "play none none reverse",
                smoothChildTiming: true
            }
        });
    
        tl.from(".collectives-header-image", {
            scale: 0.7,
            autoAlpha: .3,
            ease: "power2.out", // A smoother easing function
            duration: 1.5, // A longer duration for smoother transition
        })
        .to(".collectives-header-image", {
            scale: 1.09,
            ease: "none",
            duration: 1.5, // Consistent with the duration for scaling up
        }, "-=1.5"); // Overlap the animations for smooth transition
    }, []);

   useEffect(() => {
        const gsapMatchMedia = gsap.matchMedia();
    
        gsapMatchMedia.add("(min-width: 1441px)", () => {
          // Setup for larger screens
          gsap.timeline({
            scrollTrigger: {
              trigger: ".collectives-header-container",
              start: "top+=230vh center",
              end: "bottom top",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          }).to(".collectives-header-title", {
            scale: 0.7,
            x: -200,
            y: -200,
            ease: "none",
            duration: 1.5,
          });
        });
    
        gsapMatchMedia.add("(max-width: 1440px)", () => {
          // Setup for smaller screens
          gsap.timeline({
            scrollTrigger: {
              trigger: ".collectives-header-container",
              start: "top+=168vh center",
              end: "bottom top",
              scrub: 1,
              markers: true,
              toggleActions: "play none none reverse",
            },
          })
          .to(".collectives-header-title:nth-child(1)", {
            scale: 0.7,
            x:-200,
            y: -200,
            ease: "none",
            duration: 1.5,
          })
          .to(".collectives-header-title:nth-child(2)", {
            scale: 0.7,
            x: 200,
            y: -200,
            ease: "none",
            duration: 1.5,
          }, "<");
        });
    
        // Cleanup function to revert animations when the component unmounts
        return () => {
          gsapMatchMedia.revert();
        };
      }, []);
    
    





    


    return (
        <div className="collectives-header-container">
            <h2 className="collectives-header-title">Dance</h2>
            <h2 className="collectives-header-title">Chronicles</h2>
            <img src={ReissUnsilenced} alt="" className="collectives-header-image" />
            <div className="collectives-header-paragraph-container">
                <p className="collectives-header-paragraph">Diving into the next <span className="small">{'( few )'}</span> lines, you'll <GiMagnifyingGlass className="glass-icon"/>discover<GiMagnifyingGlass className="glass-icon glass-icon2"/> the <span className="red">soundtracks</span> that unravel the essence of our <span className="red">gatherings</span>.</p>
                <div className="collectives-scroll-bar-container">
                    <span className="collectives-scroll-bar"></span>
                    <span className="scroll-text">scroll</span>
                    <span className="scroll-boxes"></span>
                    <span className="scroll-boxes"></span>
                </div>
            </div>
        </div>
        
    );
}

export default CollectivesHeader;