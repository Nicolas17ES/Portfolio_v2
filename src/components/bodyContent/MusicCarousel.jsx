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

gsap.registerPlugin(ScrollTrigger);


function MusicCarousel() {
    // Accessing global context values
    const { display_image_overlay, dispatch, navbar_location, display_body } = useContext(GlobalContext);
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
                x: 100,
                opacity: 0,
                duration: .85,
                ease: 'power2.inOut'
            };
    
            animateElements(largeTextBefore, commonAnimationOptions);
            animateElements(largeTextAfter, commonAnimationOptions);
    
            images.forEach((image) => {
                gsap.from(image, {
                    scale: 1.15,
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
        dispatch({
            type: 'SET_CAROUSEL_INDEX',
            payload: swiper.realIndex,
        })
    };  
    const handleSwiper = (swiper) => {
        setSwiperInstance(swiper);
    };

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
            delay: 1,
            onComplete: () => {
                dispatch({
                    type: 'SET_CLICKED_BUTTON',
                    payload: { clicked: true, value: imageIndex},
                });
              }
          });
        }
      }, [display_image_overlay]);
     

      useGSAP(() => {
        if (display_body && navbar_location === 'music') {
          const titles = gsap.utils.toArray('.bottom-nav-paragraph');
          
          titles.forEach(title => {
            const splitTitle = new SplitTextJS(title);
      
            splitTitle.chars.forEach((char, index) => {
              const tlx = gsap.timeline(); // Create a new timeline for each character
        
              tlx.from(char, {
                opacity: 0,
                duration: 0.2, // Adjust the duration as needed
                delay: "random(0, 2)" // Add a delay based on the index to stagger the animations
              }, '<');
        
              tlx.to(char, {
                opacity: 1,
                duration: 0.2, // Adjust the duration as needed
              }, '<0.1');
            });
          });
        }
      }, [display_body, navbar_location]);
      

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


    return (
           <section className="carousel">
             <div className="wrapper">
                <div className="row">
                    <div className="swiper one"> 
                        <Swiper
                            loop={true}
                            slidesPerView={'auto'}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                                clickable: true,
                            }}
                            speed={600} // Adjust the speed of the slide transition (in milliseconds)
                            effect="slide"
                            modules={[Navigation]}
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
                            {activeIndexState !== null ? (
                                <>
                                    <span className="designer">By: {carouselData[activeIndexState].designer}</span>
                                    <span className="date">{carouselData[activeIndexState].date}</span>
                                </>
                            ) : (
                                <>
                                    <span className="designer">By: Marina</span>
                                    <span className="date">15 Feb 2023</span>
                                </>
                            )}
                            <div className="carousel-nav">
                                <button className="btn prev swiper-button-prev"> 
                                <IoIosArrowDropleft className='carousel-icon'/>                          
                                </button>
                                <span className="counter-indicator">{activeIndexState + 1}/3</span>
                                <button className="btn next swiper-button-next">
                                <IoIosArrowDropright className='carousel-icon'/> 
                                </button>
                            </div>
                        </div>
                    {/* </div> */}
                </div>
             </div>
           </section>

    );
}

export default MusicCarousel;