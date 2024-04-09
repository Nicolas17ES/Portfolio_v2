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


    const handleClickOutside = (event) => {
        if (overlayRef.current && !overlayRef.current.contains(event.target)) {
            gsap.fromTo(
                ".video-player-container",
                {xPercent: -50, opacity: 1, scale: 1},
                {ease: "power1.inOut", xPercent: -220, opacity: 1, duration: .6,
                onComplete: () => {
                    dispatch({
                        type: 'SET_DISPLAY_VIDEO_POPUP',
                        payload: { index: null, value: null },
                    });
                    setVideoSrc(null)
                }
            },
            )
        }
    };
console.log("videoLoaded", videoLoaded)
    useEffect(() => {
        // Add when the component mounts
        document.addEventListener('mousedown', handleClickOutside);
        // Return a function to be called when it unmounts
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [dispatch]);


    useEffect(() => {
        if (display_vide_popup.image) {
            setCoverImage(display_vide_popup.image); // Set cover image URL
        }
    }, [display_vide_popup]);

    useEffect(() => {
        const videoElement = document.querySelector('.video-player');
        const handleVideoLoad = () => setVideoLoaded(true);
    
        if (videoElement) {
            videoElement.addEventListener('loadeddata', handleVideoLoad);
        }
    
        // Cleanup
        return () => {
            if (videoElement) {
                videoElement.removeEventListener('loadeddata', handleVideoLoad);
            }
        };
    }, [videoSrc]); // Re-run this effect if the video source changes
    
    

    useEffect(() => {


        gsap.fromTo(
            ".video-player-container",
            {xPercent: -200, opacity: 1},
            {delay: .4, ease: "power1.inOut", xPercent: -50, duration: .55,
            onComplete: () => {
                // Set video source here to start loading the video
                setVideoSrc(display_vide_popup.index);
            }
        },
        )
    }, [display_vide_popup]);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
    
        const videoPausePlayHandler = (e) => {
          if (e.type === 'playing') {
            setControlsVisible(true);
          } else if (e.type === 'pause') {
            setControlsVisible(false);
          }
        };
    
        video.addEventListener('playing', videoPausePlayHandler);
        video.addEventListener('pause', videoPausePlayHandler);
    
        // Autoplay logic
        video.play().catch(error => console.error('Video play failed', error));
    
        return () => {
          video.removeEventListener('playing', videoPausePlayHandler);
          video.removeEventListener('pause', videoPausePlayHandler);
        };
      }, []);
    



    return (
        <div ref={overlayRef} className="video-player-container">
            {!videoLoaded && (
                <div className="loader-video-js">
                    Loading...
                </div>
            )}
            <video onClick={() => videoRef.current.play()}  ref={videoRef} poster={coverImage} className='video-player' id="myVideo" width="100%" height="100%" controls={controlsVisible}>
                {videoSrc && <source src={videoSrc} type="video/mp4" />}
                Your browser does not support the video tag.
            </video>
        </div>
    );
    
}

export default VideoPlayer;