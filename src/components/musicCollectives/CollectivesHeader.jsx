import GlobalContext from "../../context/GlobalContext";
import { useContext, useEffect, useRef } from "react";
import ReissUnsilenced from '../../images/ReissUnsilenced.jpeg';
import WhiteChocoNye from '../../images/WhiteChocoNye.jpeg';
import SonidoXEnfants from '../../images/SonidoEnfants2.png';
import { GiMagnifyingGlass } from "react-icons/gi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function CollectivesHeader() {
   
  const { screenWidth, button_state, dispatch } = useContext(GlobalContext);
  const introTag2 = useRef(null);

  const collectivesData = [
    {
      title: 'Sonido Club',
      image: SonidoXEnfants,
      caption: 'Sonido x Les Enfants with Keras',
      paragraph: 'Sonido Club is a music collective established in <span class="red">Barcelona</span>, founded on the idea of showcasing low-key artists from around the world. These artists have solidified <span class="red">strong foundations</span> within their <span class="red">local scenes</span> but their talents are still under the global radar. With a club residency at <span class="red">Les Enfants Brillants</span>, Sonido Club occupies one of the citys most unique venues.'
    },
    {
      title: 'Unsilenced',
      image: ReissUnsilenced,
      caption: 'Unsilenced x WC at Oosterbar Amsterdam',
      paragraph: 'Unsilenced Music sprang to life in <span class="red">Amsterdam in 2018</span>, born from the shared vision of five friends who were <span class="red">deeply in sync</span> musically. They formed this collective with the initial aim of championing local talent. However, the venture quickly blossomed beyond its original scope, expanding into a formidable <span class="red">music label</span> that now amplifies voices both <span class="red">locally and beyond.</span>'
    },
    {
      title: 'Aurea',
      image: WhiteChocoNye,
      caption: 'NYE 20219 Event',
      paragraph: 'Aurea BY WC began as a vibrant project in <span class="red">Barcelona</span>, organizing events across <span class="red">various venues</span> featuring an array of <span class="red">local artists</span>. What started merely as casual gatherings among friends quickly transformed into a profound movement, where exceptional music was played and shared.'
    },
  ]
  // IMAGE ANIMATION

  useEffect(() => {
    if(screenWidth > 700){
      gsap.fromTo(".collectives-header-image-container", { opacity: 0, y: 300, x: 300 }, { opacity: 1, y: 0, x: 0, duration: 1.5, ease: "power3.out" });
    }
  }, [screenWidth]);

    useGSAP(() => {
      if(screenWidth > 700){
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
      }
        
    }, [screenWidth]);

    useGSAP(() => {
      if(screenWidth > 700){
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
      }
    }, [screenWidth]);


    useEffect(() => {
      if(screenWidth > 700){
        gsap.fromTo(".collectives-titles-container", { opacity: 0, y: 300, x: -300, }, { opacity: 1, y: 0, x: 1, duration: 1.5, ease: "power3.out" });
      }
      
    }, [screenWidth]);

  
  //   // TITLES ANIMATION
    
   useEffect(() => {
    if(screenWidth > 700){
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
    }
        
      }, [screenWidth]);


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
      if(screenWidth > 700){
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
      }
    }, [screenWidth]);

    useGSAP(() => {
      gsap.from(".collectives-header-podacts-titles", {
        scrollTrigger: {
          trigger: ".collectives-header-podacts-titles",
          start: "center center",
          end: "bottom center",
          scrub: 1,
        },
        opacity: 0,
      });
    }, []);

    useGSAP(() => {
      if(screenWidth <= 700){
        gsap.from('.collectives-header-title-mobile', {
          opacity: 0,
          duration: 1,
          ease: 'power2.in'
        })
        gsap.from('.collectives-header-image-container', {
          opacity: 0,
          duration: 1,
          ease: 'power2.in'
        })
      }
    }, [])

    useEffect(() => {
      // Check if the target paragraph is rendered
      if(screenWidth <= 700 && introTag2.current){
        let wordClass = ''; 
     
          // Split text into characters
          const characters = introTag2.current.textContent.split(" ").map((char) => {
              if (["Barcelona,", "strong", "foundations", "local", "scenes", "Les", "Enfants", "Brillants", "foundations "].includes(char)) {
                  wordClass = 'red'; // Assign the class 'red' if the word matches
                  return `<span style="position: relative;" class="gsap-char ${wordClass}">${char} </span>`;
              } else {
                  return `<span style="position: relative;" class="gsap-char">${char} </span>`;
              }
              // Wrap each character in a span, replace space with a non-breaking space for correct spacing
              
          }).join("");

          
  
          // Set the innerHTML of the paragraph to the new string with spans
          introTag2.current.innerHTML = characters;
  
          // Animate with GSAP
          animateWithGSAP();

      }
  }, [introTag2, screenWidth]); // Empty dependency array to run once on mount
  

  const animateWithGSAP = () => {
      gsap.fromTo(".gsap-char", { opacity: 0 }, {
          delay: 1,
          opacity: 1,
          stagger: 0.048, // Adjust time between each letter appearing
          ease: "linear",
          onComplete: () => {
            dispatch({
              type: 'SET_DISPLAY_SOUNDCLOUD_PLAYER',
              payload: true,
            })
          }
      });
  };

    

    return (
      <>
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
        {(screenWidth <= 700) && (
              <h2 className="collectives-header-title-mobile">{collectivesData[button_state.value].title}</h2>
          )}
        <figure className="collectives-header-image-container">
          <img src={collectivesData[button_state.value].image} alt="" className="collectives-header-image" />
          <figcaption className="figcaption-collectives-header">{collectivesData[button_state.value].caption} </figcaption>
        </figure>  
      <div className="collectives-header-paragraph-container">
        <p ref={introTag2} className="collectives-header-paragraph"
          dangerouslySetInnerHTML={{ __html: collectivesData[button_state.value].paragraph }}>
        </p> 
             
      <div className="collectives-scroll-bar-container">
                    <span className="collectives-scroll-bar-2"></span>
                    <span className="scroll-text">{collectivesData[button_state.value].title}</span>
                    <span className="scroll-boxes-2"></span>
                    <span className="scroll-boxes-2"></span>
                </div>
            </div>
        </div>
        <h5 className="collectives-header-podacts-titles">
        Music by our guests:
      </h5> 
      </>
    );
}

export default CollectivesHeader;

