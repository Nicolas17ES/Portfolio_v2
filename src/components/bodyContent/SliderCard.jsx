import Introducing from '../../images/Introducing.jpg'; // Import the image
import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SliderCard({data}) {
    // Accessing global context values
    const { dispatch, slide_active_index } = useContext(GlobalContext);
    const [slideActiveIndex, setSlideActiveIndex] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [loadCount, setLoadCount] = useState(0);
    const [slidedToZero, setSlidedToZero] = useState(false);
    const [swiperInstance, setSwiperInstance] = useState(null);

    const [isSwiperVisible, setIsSwiperVisible] = useState(false); // New state for controlling visibility

console.log("slide_active_index", slide_active_index)
    // detect the current active slide
    const handleSlideChange = (swiper) => {  
      console.log('called to equal', swiper.realIndex)
      dispatch({
                type: 'SET_SLIDE_ACTIVE_INDEX',
                payload: swiper.realIndex,
            });
          setSlideActiveIndex(swiper.realIndex);  
        // console.log("slideActiveIndex", slideActiveIndex)
        // console.log("swiper", swiper.realIndex)
        // if(swiper.realIndex !== slideActiveIndex){
        //   console.log('called to equal')
        //   dispatch({
        //         type: 'SET_SLIDE_ACTIVE_INDEX',
        //         payload: swiper.realIndex,
        //     });
        //   setSlideActiveIndex(swiper.realIndex);
        // } 
    };

    const handleSwiper = (swiper) => {
      setSwiperInstance(swiper);
      setSlideActiveIndex(swiper.realIndex);
  };

  

  useEffect(() => {
    // Count how many images have loaded
    let imagesLoaded = 0;
    const totalImages = data.length * 2; // Assuming each data item has 2 images

    const updateLoadStatus = () => {
      imagesLoaded++;
      setLoadCount(imagesLoaded); // Update state to trigger re-render
      if (imagesLoaded === totalImages) {
        setLoaded(true); // All images have loaded
      }
    };

    data.forEach(item => {
      const img1 = new Image();
      const img2 = new Image();
      img1.src = item.image_one;
      img2.src = item.image_two;
      img1.onload = updateLoadStatus;
      img2.onload = updateLoadStatus;
      // Add similar logic for videos if needed
    });
    
  }, [data]);

  useEffect(() => {
    
    
  }, [data]);


//    // Navigate to the first slide once the swiper instance is available and images are loaded
//   useEffect(() => {
//     // This function is executed when the component mounts
//     if (swiperInstance && swiperInstance.__swiper__ && loaded) {
//         // swiperInstance.slideToLoop(0, 0);
//         setSlidedToZero(true);
//         setIsSwiperVisible(true);
//         // Dispatch action when the component mounts and conditions are met
//         dispatch({
//             type: 'SET_ACTIVE_SLIDER',
//             payload: true,
//         });
//     }

//     // Cleanup function to be called on component unmount
//     return () => {
//         // Dispatch action when the component is about to unmount
//         dispatch({
//             type: 'SET_ACTIVE_SLIDER',
//             payload: false,
//         });
//     };
// }, [swiperInstance, loaded, dispatch]); // Add `dispatch` to the dependency array if it's a prop or could change



    // if (!loaded) {
    //     // return <div>Loading images...</div>; // or any other loading indicator
    // }

    return (
        <div className={`body-slider-container ${loaded ? 'visible-slider' : 'hidden'}`}>
            <Swiper
                initialSlide={"4"}
                centeredSlidesBounds={true}
                effect={'coverflow'}
                onSwiper={handleSwiper}
                grabCursor={true}
                centeredSlides={true}
                loop={data.length > 1}
                slidesPerView={'auto'}
                spaceBetween={0}
                coverflowEffect={{
                    rotate: 0,
                    stretch: 0,
                    depth: 120,
                    modifier: 2.5,
                }}
                longSwipesRatio={0}
                pagination={{ el: '.swiper-pagination', clickable: true }}
                navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true,
                }}
                modules={[EffectCoverflow, Pagination, Navigation]}
                className="swiper_container"
                onSlideChange={handleSlideChange} 
                // slideToClickedSlide={true} 
            >
                {data.map((card) => (
                    <SwiperSlide key={card.id}>
                    <div className="flip-card">
                         <div className="flip-card-inner">
                         {/* <div className={`flip-card-inner ${slideActiveIndex === card.id ? 'rotate-slide' : null}`}> */}
                           <div className="flip-card-front">
                                <img className='flip-card-image' src={card.image_one} alt={card.alt} />
                            </div>
                            <div className="flip-card-back">
                                <img className='flip-card-image'  src={card.image_two} alt={card.alt} />
                            </div>
                        </div> 
                    </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
        
    );
}

export default SliderCard;