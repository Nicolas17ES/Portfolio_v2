import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/about/About.css'
import ImageOverlay from '../shared/ImageOverlay';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import SplitTextJS from "split-text-js";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import Image from '../../images/Introducing.jpg'
import Image2 from '../../images/ChocoXNye.jpg'
import Image3 from '../../images/SonidoXWendy.jpg'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import CSSRulePlugin from "gsap/CSSRulePlugin";
import MagneticEffect from '../mouse/MagneticEffect';

gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(CSSRulePlugin);


function MusicCarousel() {
    // Accessing global context values
    const { display_image_overlay, dispatch, change_slide, display_body } = useContext(GlobalContext);
    const [activeIndexState, setActiveIndex] = useState(null);
    const [swiperInstance, setSwiperInstance] = useState(null);
    const [imageIndex, setImageIndex] = useState(null);



    useEffect(() => {
        if(activeIndexState !== null){
            const animateElements = (elements, animationOptions) => {
                elements.forEach((element) => {
                  gsap.from(element, animationOptions);
                });
            };
              
    
            const activeSlide = document.querySelector(`[data-swiper-slide-index="${activeIndexState}"]`);
            const largeTextBefore = activeSlide.querySelectorAll('.large-text.before');
            const largeTextAfter = activeSlide.querySelectorAll('.large-text.after');
            const images = activeSlide.querySelectorAll('.image-wrap img');
            const commonAnimationOptions = {
                x: 150,
                opacity: 0,
                duration: 1.1,
                ease: 'power2.inOut'
            };
    
            animateElements(largeTextBefore, commonAnimationOptions);
            animateElements(largeTextAfter, commonAnimationOptions);
    
            images.forEach((image) => {
                gsap.from(image, {
                    scale: 1.30,
                    duration: 1.1,
                    ease: 'power2.inOut'
                })
            })
        }
    }, [activeIndexState])



    useEffect(() => {
        if(activeIndexState !== null){
            gsap.from('.date', {
                opacity: 0,
                y: 10,
                duration: 1.1,
                ease: 'power2.inOut'
              });
              
              gsap.from('.designer', {
                opacity: 0,
                y: 10,
                duration: 1.1,
                ease: 'power2.inOut',
              });
        }
    }, [activeIndexState])

    const handleSlideChange = (swiper) => {
        
        setActiveIndex(swiper.realIndex);
    };

    const changeSlide = (direction) => {

        if (swiperInstance) {
            if (direction === 'next') {
                swiperInstance.slideNext();
            } else if (direction === 'prev') {
                swiperInstance.slidePrev();
            }
        }
        let value;
        if(direction === 'next'){
            value = +1
        } else if(direction === 'prev'){
            value = -1
        }

        let newIndex;
        if (direction === 'next' && activeIndexState === 2) {
            newIndex = 0;
        } else if (direction === 'prev' && activeIndexState === 0) {
            newIndex = 2;
        } else {
            newIndex = activeIndexState + value;
        }
        dispatch({
            type: 'SET_CHANGE_SLIDE',
            payload: { value: newIndex, origin: false },
        });
    };
    

    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper);
    };


    // DETECT IF THERES A CLICK ON THE BUTTONS BODY AND THEN CHANGE SLIDE HERE:
    useEffect(() => {
        
        if(change_slide.origin && (change_slide.value !== undefined && change_slide.value !== null) && swiperInstance){
            swiperInstance.slideTo(change_slide.value);
            console.log('change slide called', change_slide)
        }
    }, [change_slide])

    const carouselData = [
        {
            designer: 'Marina',
            date: '15 Feb 2022',
        },
        {
            designer: 'Fundrawings',
            date: '15 Feb 2020',
        },
        {
            designer: 'Yereyye',
            date: '15 Feb 2019',
        },
    ]

    const displayImageOverlay = (index) => {
        setImageIndex(index)
        dispatch({
            type: 'SET_IMAGE_OVERLAY',
            payload: true
        })
        
    }

    useGSAP(() => {
        if (display_image_overlay) {
          gsap.to(['.before', '.after'], {
            duration: 1, // Duration of the animation
            ease: 'Power1.easeOut',
            opacity: 0,
            delay: 0,
            onComplete: () => {
                dispatch({
                    type: 'SET_CHANGE_SLIDE',
                    payload: { value: null, origin: false },
                });
                dispatch({
                    type: 'SET_CLICKED_BUTTON',
                    payload: { clicked: true, value: imageIndex},
                });
              }
          });
        }
      }, [display_image_overlay]);
     

    //   useGSAP(() => {
    //     if (display_body && navbar_location === 'music') {
    //       const titles = gsap.utils.toArray('.bottom-nav-paragraph');
          
    //       titles.forEach(title => {
    //         const splitTitle = new SplitTextJS(title);
      
    //         splitTitle.chars.forEach((char, index) => {
    //           const tlx = gsap.timeline(); // Create a new timeline for each character
        
    //           tlx.from(char, {
    //             opacity: 0,
    //             duration: 0.2, // Adjust the duration as needed
    //             delay: "random(0, 2)" // Add a delay based on the index to stagger the animations
    //           }, '<');
        
    //           tlx.to(char, {
    //             opacity: 1,
    //             duration: 0.2, // Adjust the duration as needed
    //           }, '<0.1');
    //         });
    //       });
    //     }
    //   }, [display_body, navbar_location]);
      

    useGSAP(() => {
    if (display_image_overlay) {
        gsap.to('.carousel-info', {
        opacity: 0, // Set opacity to 0
        duration: 1, // Duration of the animation
        ease: 'linear', // Use linear easing for the animation
        });
    }
    }, [display_image_overlay]);

    const setCursorVisible = (value) => {
        dispatch({
            type: 'SET_VIEW_PROJECTS_CURSOR',
            payload: value,
        })
    }




    // ANIMATION TO LOAD THE IMAGE OVERLAY ON MOUNBT
    useEffect(() => {        
        const imageRevealReset = CSSRulePlugin.getRule(".image-wrap::before");
        gsap.to(imageRevealReset, { duration: 0, cssRule: { width: "100%" } });
        
        // Your animation setup
        const imageReveal = CSSRulePlugin.getRule(".image-wrap::before");
        let tl = gsap.timeline({defaults: { ease: 'Power1.easeOut'}})
                    .to(imageReveal, { duration: 1.3, delay: .7, cssRule: { width: "0%" } });
        
        // Cleanup function to kill the animation when the component unmounts or conditions change
        return () => {
          tl.kill(); // This will kill the timeline, stopping all animations in it
        };
    }, []);



    // ANIMATE THE CAROUSEL INFO ON MOUNT
    useGSAP(() => {
        if(display_body){
            gsap.fromTo('.carousel-info-element', 
                { xPercent: +150, opacity: 0}, // Starting properties
                { xPercent: 0, 
                    opacity: 1, 
                    duration: 1,  
                    ease: "power1.out", 
                    delay: .5, 
                    stagger: {
                        each: 0.1, // Time between each animation start
                        from: "start" // Start staggering from the end
                  }, } // Ending properties
            );
        }
      }, [display_body]);
    


    return (
           <section className="carousel">
             <div className="wrapper">
                <div className="row">
                    <div className="swiper one"> 
                        <Swiper
                            loop={true}
                            slidesPerView={'auto'}
                            // navigation={{
                            //     nextEl: '.swiper-button-next',
                            //     prevEl: '.swiper-button-prev',
                            //     clickable: true,
                            // }}
                            speed={600} // Adjust the speed of the slide transition (in milliseconds)
                            effect="slide"
                            // modules={[Navigation]}
                            onSwiper={handleSwiper}
                            onSlideChange={(swiper) => handleSlideChange(swiper)}
                        >
                            <SwiperSlide>
                                <div className="content">
                                    <span className="large-text before">SonidoClub</span> 
                                    <span className="large-text after">SonidoClub</span>
                                    <figure
                                        onMouseEnter={() => setCursorVisible(true)} 
                                        onMouseLeave={() => setCursorVisible(false)} 
                                        onClick={() => displayImageOverlay(0)}
                                        className="image-wrap"
                                        style={{ pointerEvents: display_image_overlay && 'none' }}
                                    >
                                     
                                        <img src={Image} alt="" className="carousel-image" />
                                        {imageIndex === 0 && <ImageOverlay />}
                                    </figure>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="content">
                                    <span className="large-text before">Unsilenced</span>
                                    <figure onClick={() => displayImageOverlay(1)}
                                        onMouseEnter={() => setCursorVisible(true)} 
                                        onMouseLeave={() => setCursorVisible(false)} 
                                        className="image-wrap" 
                                        style={{pointerEvents: display_image_overlay && 'none'}}>
                                        <img src={Image3} alt="" className="carousel-image" />
                                        {imageIndex === 1 && <ImageOverlay/>}
                                    </figure>
                                    <span className="large-text after">Unsilenced</span>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="content">
                                    <span className="large-text before">Aureabywc</span>
                                    <figure 
                                        onMouseEnter={() => setCursorVisible(true)} 
                                        onMouseLeave={() => setCursorVisible(false)} 
                                        onClick={() => displayImageOverlay(2)} 
                                        className="image-wrap" 
                                        style={{pointerEvents: display_image_overlay && 'none'}}
                                    >
                                        <img src={Image2} alt="" className="carousel-image" />
                                        {imageIndex === 2 && <ImageOverlay/>}
                                    </figure>
                                    <span className="large-text after">Aureabywc</span>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                        <div className="carousel-info">
                            {/* {activeIndexState !== null ? (
                                <>
                                    <span className="designer carousel-info-element">By: {carouselData[activeIndexState].designer}</span>
                                    <span className="date carousel-info-element">{carouselData[activeIndexState].date}</span>
                                </>
                            ) : (
                                <>
                                    <span className="designer carousel-info-element">By: Marina</span>
                                    <span className="date carousel-info-element">15 Feb 2023</span>
                                </>
                            )} */}
                            <div className="carousel-nav carousel-info-element">
                                <MagneticEffect>
                                <button className="btn prev swiper-button-prev"> 
                                <IoIosArrowDropleft onClick={() => changeSlide('prev')} className='carousel-icon'/>                          
                                </button>
                                </MagneticEffect>
                                <span className="counter-indicator">{activeIndexState + 1}/3</span>
                                <MagneticEffect>
                                <button className="btn next swiper-button-next">
                                <IoIosArrowDropright onClick={() => changeSlide('next')} className='carousel-icon'/> 
                                </button>
                                </MagneticEffect>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
             </div>
           </section>

    );
}

export default MusicCarousel;