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
    const [hoverEnabled, setHoverEnabled] = useState(false);
    const [cursorVisible, setCursorVisible] = useState(false);



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





    const handleSlideChange = (swiper) => {
        
        setActiveIndex(swiper.realIndex);
    };



    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper);
    };


    // DETECT IF THERES A CLICK ON THE BUTTONS BODY AND THEN CHANGE SLIDE HERE:
    useEffect(() => {
        
        if(change_slide.origin && (change_slide.value !== undefined && change_slide.value !== null) && swiperInstance){
            swiperInstance.slideTo(change_slide.value);
        }
    }, [change_slide])



    const displayImageOverlay = (index) => {
        setImageIndex(index)
        dispatch({
            type: 'SET_IMAGE_OVERLAY',
            payload: true
        })
        
    }

    useGSAP(() => {
        if (display_image_overlay) {
            gsap.fromTo('.counter-indicator', {
                opacity: 1,
            }, {
                opacity: 0,
                duration: .75,
            })
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
                    setTimeout(() => {
                        dispatch({
                            type: 'SET_CLICKED_BUTTON',
                            payload: { clicked: true, value: imageIndex},
                        });
                    }, 500);
                }
            });
        }
      }, [display_image_overlay]);
     

    useGSAP(() => {
    if (display_image_overlay) {
            gsap.to('.carousel-info', {
            opacity: 0, // Set opacity to 0
            duration: 1, // Duration of the animation
            ease: 'linear', // Use linear easing for the animation
        });
    }
    }, [display_image_overlay]);

    useEffect(() => {
        if(cursorVisible && hoverEnabled){
            dispatch({
                type: 'SET_VIEW_PROJECTS_CURSOR',
                payload: {
                    text: 'VIEW',
                    value: true,
                    background: true,
                },
            })
        } else if (!cursorVisible && hoverEnabled){
            dispatch({
                type: 'SET_VIEW_PROJECTS_CURSOR',
                payload: {
                    text: 'VIEW',
                    value: false,
                    background: true,
                },
            })
        }
    }, [cursorVisible, hoverEnabled])




    // ANIMATION TO LOAD THE IMAGE OVERLAY ON MOUNBT
    useEffect(() => {        
        if(display_body){
            const imageRevealReset = CSSRulePlugin.getRule(".image-wrap::before");
            gsap.to(imageRevealReset, { duration: 0, cssRule: { width: "100%" } });
            
            // Your animation setup
            const imageReveal = CSSRulePlugin.getRule(".image-wrap::before");
            let tl = gsap.timeline({defaults: { ease: 'Power1.easeOut'}})
                        .to(imageReveal, { duration: 1.3, delay: 1.2, cssRule: { width: "0%" }, onComplete: () => setHoverEnabled(true) });
            
            // Cleanup function to kill the animation when the component unmounts or conditions change
            return () => {
                tl.kill(); // This will kill the timeline, stopping all animations in it
                setHoverEnabled(false);
            };
        }
    }, [display_body]);



    // ANIMATE THE CAROUSEL INFO ON MOUNT
    useGSAP(() => {
        if(display_body){

            gsap.from('.counter-indicator', {
                opacity:0,
                delay: 2,
                duration: .5,
            })
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
                            allowTouchMove={false}
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
                                        className={`image-wrap ${!hoverEnabled ? 'no-hover' : ''}`}
                                        style={{ pointerEvents: display_image_overlay && 'none' }}
                                    >
                                        <span className="counter-indicator">{activeIndexState + 1}/3</span>
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
                                        className={`image-wrap ${!hoverEnabled ? 'no-hover' : ''}`} 
                                        style={{pointerEvents: display_image_overlay && 'none'}}>
                                        <span className="counter-indicator">{activeIndexState + 1}/3</span>
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
                                        className={`image-wrap ${!hoverEnabled ? 'no-hover' : ''}`}
                                        style={{pointerEvents: display_image_overlay && 'none'}}
                                    >
                                        <span className="counter-indicator">{activeIndexState + 1}/3</span>
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
                           
                        </div>
                    {/* </div> */}
                </div>
             </div>
             {/* <div className="carousel-nav carousel-info-element">
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
                </div> */}
           </section>

    );
}

export default MusicCarousel;