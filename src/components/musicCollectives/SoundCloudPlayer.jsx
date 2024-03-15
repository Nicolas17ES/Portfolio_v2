import { GiPentarrowsTornado } from "react-icons/gi";
import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/about/About.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Tommy from '../../audio/TommyPickles.mp3'
import { FaPause, FaPlay } from "react-icons/fa";



gsap.registerPlugin(ScrollTrigger);

function SoundCloudPlayer({audio}) {
    const {} = useContext(GlobalContext);
    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [viewText, setViewText] = useState(0);
    const audioRef = useRef(null);
    const progressRef = useRef(null);

    const togglePlayback = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleTimeUpdate = () => {
        
            setCurrentTime(audioRef.current.currentTime);
            const progress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
            if(progressRef.current){
                progressRef.current.value = progress;
            }    
    };

    const handleLoadedMetadata = () => {
        setDuration(audioRef.current.duration);
    };

    const handleProgressChange = (e) => {
        const targetTime = (e.target.value / 100) * audioRef.current.duration;
        audioRef.current.currentTime = targetTime;
    };

    useEffect(() => {
        const audio = audioRef.current;
        const handleTimeUpdateLocal = () => handleTimeUpdate();
    
        if (audio) {
            audio.addEventListener('timeupdate', handleTimeUpdateLocal);
            audio.addEventListener('loadedmetadata', handleLoadedMetadata);
        }
    
        return () => {
            if (audio) {
                audio.removeEventListener('timeupdate', handleTimeUpdateLocal);
                audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
            }
        };
    }, []);
    

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useGSAP(() => {
        if(isPlaying){
            gsap.from('.fade-in-player', {
                opacity: 0,
                duration: .7,
                stagger: .08,
                ease: 'power1.inOut'
            })
        }
    }, [isPlaying])

    useGSAP(() => {
        if(!isPlaying){
            gsap.from('.fade-in-paused', {
                opacity: 0,
                duration: .7,
                stagger: .08,
                ease: 'power1.inOut'
            })
            gsap.to('.fade-in-paused', {
                opacity: 1,
                duration: .7,
                stagger: .08,
                ease: 'power1.inOut'
            })
        }
    }, [isPlaying])

    function truncateText(text, limit) {
        if(viewText){
            limit = 1000;
        }
        const words = text.split(' ');
        if (words.length > limit) {
          return words.slice(0, limit).join(' ') + '...';
        } else {
          return text;
        }
      }

    if(!audio) return null

    return (
        <section style={{borderTop: audio.id === 1 ? '.3px solid rgb(var(--black))' : null}} className="soundcloud-player-container">
            <div className="audio-player">
                <audio ref={audioRef} src={audio.src} preload="auto" />
                {!isPlaying ? (
                    <div className="player-data-container-top">
                            <div className="player-data-left">
                                <button className="play-button" onClick={togglePlayback}>
                                    {isPlaying ? <FaPause className="icon-player"/> : <FaPlay className="icon-player"/>}
                                </button>
                                <h5 className="player-artist fade-in-paused">{audio.artist}</h5>
                                <div className="time-player-container fade-in-paused">
                                    <span>{formatTime(duration)} min</span>
                                </div>
                            </div>
                            <h4 className="player-title fade-in-paused">{audio.title}</h4>
                    </div>
                ) : (
                    <div style={{backgroundColor: 'rgb(var(--black))'}} className="player-data-container-top">
                            <div className="player-data-left-playing">
                                <button className="play-button" onClick={togglePlayback}>
                                    {isPlaying ? <FaPause className="icon-player"/> : <FaPlay className="icon-player"/>}
                                </button>
                                <div style={{padding: '0'}} className="time-player-container-playing fade-in-player">
                                    <span>{formatTime(currentTime)}</span> | <span>{formatTime(duration)} </span>
                                </div>
                                <h4 className="player-title  fade-in-player">{audio.artist}</h4>
                                <input
                                    
                                    className="player-progress-bar  fade-in-player"
                                    type="range" 
                                    ref={progressRef} 
                                    defaultValue="0" 
                                    step="0.01" 
                                    onChange={handleProgressChange} 
                                />
                                <span className="player-type fade-in-player">Type: {audio.type}</span>
                            </div> 
                              
                </div>
                )}
                
            </div>
        </section>
    );
}

export default SoundCloudPlayer;
//     return (
//         <section style={{borderTop: audio.id === 1 ? '.3px solid rgb(var(--black))' : null}} className="soundcloud-player-container">
//             <div className="audio-player">
//                 <audio ref={audioRef} src={audio.src} preload="auto" />
//                 {!isPlaying ? (
//                     <div className="player-data-container-top">
//                         <div className="player-data-header">
//                             <p className="player-resume" style={{cursor: viewText ? 'zoom-out' : 'zoom-in'}} onClick={()=> setViewText(!viewText)}>{truncateText(audio.resume, 20)}</p>
//                         </div>
//                         <div className="player-data-bottom">
//                             <div className="player-data-left">
//                                 <button className="play-button" onClick={togglePlayback}>
//                                     {isPlaying ? <FaPause className="icon-player"/> : <FaPlay className="icon-player"/>}
//                                 </button>
//                                 <h5 className="player-artist fade-in-paused">{audio.artist}</h5>
//                                 <div className="time-player-container fade-in-paused">
//                                     <span>{formatTime(duration)} min</span>
//                                 </div>
//                             </div>
//                             <h4 className="player-title fade-in-paused">{audio.title}</h4>
//                         </div>
//                     </div>
//                 ) : (
//                     <div style={{backgroundColor: 'rgb(var(--black))'}} className="player-data-container-top">
//                         <div className="player-data-header">
//                             <p className="player-resume" style={{color: 'rgb(var(--white))', cursor: viewText ? 'zoom-out' : 'zoom-in'}} onClick={()=> setViewText(!viewText)}>{truncateText(audio.resume, 20)}</p>
//                         </div>
//                         <div className="player-data-bottom">
//                             <div className="player-data-left-playing">
//                                 <button className="play-button" onClick={togglePlayback}>
//                                     {isPlaying ? <FaPause className="icon-player"/> : <FaPlay className="icon-player"/>}
//                                 </button>
//                                 <div style={{padding: '0'}} className="time-player-container-playing fade-in-player">
//                                     <span>{formatTime(currentTime)}</span> | <span>{formatTime(duration)} </span>
//                                 </div>
//                                 <h4 className="player-title  fade-in-player">{audio.artist}</h4>
//                                 <input
                                    
//                                     className="player-progress-bar  fade-in-player"
//                                     type="range" 
//                                     ref={progressRef} 
//                                     defaultValue="0" 
//                                     step="0.01" 
//                                     onChange={handleProgressChange} 
//                                 />
//                                 <span className="player-type fade-in-player">Type: {audio.type}</span>
//                             </div> 
//                         </div>
                              
//                 </div>
//                 )}
                
//             </div>
//         </section>
//     );
// }

// export default SoundCloudPlayer;