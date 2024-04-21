import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

// The Projects component displays project sections and handles animations based on mouse movements.
function VideoPlayer() {

    const { display_vide_popup, dispatch } = useContext(GlobalContext);
    const [videoSrc, setVideoSrc] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const [videoLoaded, setVideoLoaded] = useState(false);
    const [controlsVisible, setControlsVisible] = useState(false);
    const videoRef = useRef(null);
    const overlayRef = useRef(null);
   
    useEffect(() => {
        if (display_vide_popup) {
            // Block scrolling
            document.body.style.overflowY = 'hidden';
        } else {
            // Enable scrolling
            document.body.style.overflowY = 'auto';
            // document.body.style.backdropFilter = 'blur(0px)';
        }

        // Cleanup function to ensure scrolling is enabled when the component unmounts or when display_video_popup becomes false
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [display_vide_popup]); 


    useEffect(() => {
        if (display_vide_popup.image) {
            setCoverImage(display_vide_popup.image); // Set cover image URL
        }
    }, [display_vide_popup]);

    useEffect(() => {
        const handleParentClick = () => {
          // Start the first animation
          gsap.to('.video-player', {
            xPercent: -150,
            opacity: 0,
            duration: 0.7,
            ease: "none",
            onComplete: () => {
              // Once the first animation completes, start the second
              gsap.to('.video-player-container', {
                opacity: 0,
                duration: 0.1,
                ease: "none",
                onComplete: () => {
                  // Dispatch and cleanup after the second animation
                  dispatch({
                    type: 'SET_DISPLAY_VIDEO_POPUP',
                    payload: { index: null, value: null, image: null },
                  });
                  setVideoSrc(null);
                }
              });
            }
          });
        };
      
        const handleChildClick = (event) => {
          event.stopPropagation(); // Prevents click from bubbling up to the parent
        };
      
        // Attach event listeners
        const parent = overlayRef.current;
        parent.addEventListener('click', handleParentClick);
      
        const child = videoRef.current;
        child.addEventListener('click', handleChildClick);
      
        // Cleanup function
        return () => {
          parent.removeEventListener('click', handleParentClick);
          child.removeEventListener('click', handleChildClick);
        };
      }, []); // Ensure this effect is only run on mount and unmount
      


      useEffect(() => {
        // Create a GSAP timeline
        const tl = gsap.timeline({
            onComplete: () => {
                // Set video source here to start loading the video after animations
                setTimeout(() => {
                    setVideoSrc(display_vide_popup.index);
                }, 400);
            }
        });
    
        // Assuming `videoPlayerRef` and `videoContainerRef` are created with useRef() and assigned to the respective elements
        tl.fromTo(videoRef.current, 
                  {xPercent: -150, opacity: 0}, 
                  {ease: "power2.out", xPercent: 0, duration: 0.7, opacity: 1})
          .fromTo(overlayRef.current, 
                  {opacity: 0}, 
                  {ease: "power2.out", duration: 0.7, opacity: 1}, 
                  "<"); // Start this animation at the same time as the previous
    
    }, [display_vide_popup]);
    



    return (
        <div ref={overlayRef} className="video-player-container">
            {/* {!videoLoaded && (
                <div className="loader-video-js">
                    Loading...
                </div>
            )}
             */}
            <video
                // onClick={(event) => {
                //     event.stopPropagation();
                //     videoRef.current.play();
                // }}
                ref={videoRef}
                poster={coverImage}
                className='video-player'
                id="myVideo"
                controls
                muted
            >
                {videoSrc && <source src={videoSrc} type="video/mp4" />}
                Your browser does not support the video tag.
            </video>
        </div>
    );
    
}

export default VideoPlayer;