import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext } from 'react'
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function SliderCard({data}) {
    // Accessing global context values
    const { dispatch } = useContext(GlobalContext);
    const [slideActiveIndex, setSlideActiveIndex] = useState(null);
    const [loaded, setLoaded] = useState(false);
    const [loadCount, setLoadCount] = useState(0);
    const [swiperInstance, setSwiperInstance] = useState(null);


    // detect the current active slide
    const handleSlideChange = (swiper) => {  
      dispatch({
                type: 'SET_SLIDE_ACTIVE_INDEX',
                payload: swiper.realIndex,
            });
          setSlideActiveIndex(swiper.realIndex);  
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