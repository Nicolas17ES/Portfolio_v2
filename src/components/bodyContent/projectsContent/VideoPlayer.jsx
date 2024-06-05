import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useState, useContext, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

// The Projects component displays project sections and handles animations based on mouse movements.
function VideoPlayer() {

    const { display_vide_popup, dispatch } = useContext(GlobalContext);
    const [videoSrc, setVideoSrc] = useState(null);
    const [coverImage, setCoverImage] = useState(null);
    const videoRef = useRef(null);
    const overlayRef = useRef(null);
   

console.log("videoSrc", videoSrc)
    return (
        <div ref={overlayRef} className="video-player-container">
            
            <video
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