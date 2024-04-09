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
   
  const { dispatch, button_state } = useContext(GlobalContext);

  const collectivesData = [
    {
      title: 'Sonido Club',
      image: ReissUnsilenced,
      caption: 'Unsilenced x WC at Oosterbar Amsterdam'
    },
    {
      title: 'Unsilenced',
      image: ReissUnsilenced,
      caption: 'Unsilenced x WC at Oosterbar Amsterdam'
    },
    {
      title: 'Aurea',
      image: WhiteChocoNye,
      caption: 'Unsilenced x WC at Oosterbar Amsterdam'
    },
  ]
  // IMAGE ANIMATION

  useEffect(() => {
    gsap.fromTo(".collectives-header-image-container", { opacity: 0, y: 300, x: 300 }, { opacity: 1, y: 0, x: 0, duration: 1.5, ease: "power3.out" });
  }, []);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger); 
        const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: ".collectives-header-image-container",
                  scrub: .5,
                  start: "top center+=300",
                  end: "bottom top+=78 0",
                  ease: "power1.out",
                  toggleActions: "play none none reverse",
                
            }
        })
        .to(".collectives-header-image", {
            scale: 1.09,
            opacity: 1,
            duration: 1.5, // Consistent with the duration for scaling up
        }, "-=1.5"); // Overlap the animations for smooth transition
    }, []);

    useGSAP(() => {
        gsap.registerPlugin(ScrollTrigger); 
        const tl = gsap.timeline({
                scrollTrigger: {
                  trigger: ".collectives-header-image-container",
                  scrub: .5,
                  start: "top center+=170",
                  end: "bottom top+=270",
                  ease: "power1.out",
                  toggleActions: "play none none reverse",
                
            }
        })
        .to(".figcaption-collectives-header", {
          y: 40,
            scale: 1.09,
            opacity: 1,
            duration: 1.5, // Consistent with the duration for scaling up
        }, "-=1.5"); // Overlap the animations for smooth transition
    }, []);


    useEffect(() => {
      gsap.fromTo(".collectives-titles-container", { opacity: 0, y: 300, x: -300, }, { opacity: 1, y: 0, x: 1, duration: 1.5, ease: "power3.out" });
    }, []);

  
  //   // TITLES ANIMATION
    
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
              toggleActions: "play none none reverse",
            },
          })
          .to(".collectives-header-title:nth-child(2)", {
            scale: 0.7,
            x:-300,
            y: -200,
            ease: "none",
            duration: 1.5,
          })
          .to(".collectives-header-title:nth-child(3)", {
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


    // SCROLL BOXES ANIMATIONS

    

    useGSAP(() => {
      gsap.to(".scroll-boxes-2", {
        scrollTrigger: {
          trigger: ".scroll-boxes-2",
          start: "bottom center+=250",
          end: "bottom center+=0",
          scrub: 1,
        },
        backgroundColor: '#eb5939', // Ensure the initial color is set in your CSS for a smooth transition
        duration: .5,
        rotation: 360,
      });
    }, []);
    useGSAP(() => {
      gsap.to(".scroll-boxes", {
        scrollTrigger: {
          trigger: ".scroll-boxes",
          start: "bottom top+=460",
          end: "bottom center+=0",
          scrub: 1,
        },
        backgroundColor: '#eb5939', // Ensure the initial color is set in your CSS for a smooth transition
        duration: .5,
        rotation: 360,
      });
    }, []);


    useEffect(() => {
      gsap.to(".scroll-boxes", {
        scrollTrigger: {
          trigger: ".collectives-scroll-bar", // Assuming you want the entire body's scroll to control the progress.
          start: "bottom center+=250",
          end: "bottom center+=100",
          scrub: true, 
          onUpdate: self => {
            gsap.set(".collectives-scroll-bar", {
              height: self.progress * 180 + "px",
            });
          }
        },
        ease: "none",
      });
    
      // Cleanup if component unmounts
      return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);
    
    useEffect(() => {
      gsap.to(".scroll-boxes-2", {
        scrollTrigger: {
          trigger: ".collectives-scroll-bar-2", // Assuming you want the entire body's scroll to control the progress.
          start: "bottom center+=400",
          end: "bottom center+=100",
          scrub: true, 
          onUpdate: self => {
            gsap.set(".collectives-scroll-bar-2", {
              height: self.progress * 130 + "px",
            });
          }
        },
        ease: "none",
      });
    
      // Cleanup if component unmounts
      return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    }, []);



    // PARAGRAPH ANIMATION


    useGSAP(() => {
      gsap.from(".collectives-header-paragraph", {
        scrollTrigger: {
          trigger: ".scroll-boxes-2",
          start: "bottom bottom",
          end: "bottom center+=0",
          scrub: 1,
        },
        y: 300,
        x: 300,
        duration: 1,
      });
    }, []);

    


    return (
        <div className="collectives-header-container">
          <div className="collectives-titles-container">
            {/* <h3 className="collective-title-name">({collectivesData[button_state.value].title})</h3> */}
            <div className="collectives-scroll-bar-container">
                <span className="collectives-scroll-bar"></span>
                <span className="scroll-text">{collectivesData[button_state.value].title}</span>
                <span className="scroll-boxes"></span>
                <span className="scroll-boxes"></span>
            </div>
            <h2 className="collectives-header-title">Dance</h2>
            <h2 className="collectives-header-title">Chronicles</h2>
        </div>
        <figure className="collectives-header-image-container">
         <img src={collectivesData[button_state.value].image} alt="" className="collectives-header-image" />
         <figcaption className="figcaption-collectives-header">{collectivesData[button_state.value].caption} </figcaption>
        </figure>  
            <div className="collectives-header-paragraph-container">
                <p className="collectives-header-paragraph">Diving into the next <span className="small">{'( few )'}</span> lines, you'll <GiMagnifyingGlass className="glass-icon"/>discover<GiMagnifyingGlass className="glass-icon glass-icon2"/> the <span className="red">soundtracks</span> that unravel the essence of our <span className="red">gatherings</span>.</p>
                <div className="collectives-scroll-bar-container">
                    <span className="collectives-scroll-bar-2"></span>
                    <span className="scroll-text">{collectivesData[button_state.value].title}</span>
                    <span className="scroll-boxes-2"></span>
                    <span className="scroll-boxes-2"></span>
                </div>
            </div>
        </div>
        
    );
}

export default CollectivesHeader;