import React from 'react';
import videojs from 'video.js';
import 'video.js/dist/video-js.css';
import '../../../pages/projects/Projects.css'
import { useEffect, useRef } from 'react'
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);

const VideoJS = ({ options, onReady }) => {
    const videoRef = useRef(null);
  
    useEffect(() => {
      const vjsPlayer = videojs(videoRef.current, options);
      onReady && onReady(vjsPlayer);
  
      return () => {
        if (vjsPlayer) {
          vjsPlayer.dispose();
        }
      };
    }, [options, onReady]);
  
    return (
      <div data-vjs-player>
        <video ref={videoRef} className="video-js" />
      </div>
    );
  };
  
  export default VideoJS;