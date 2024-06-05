
import { useEffect, useState, useRef } from 'react'
import '../../pages/about/About.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaPause, FaPlay } from "react-icons/fa";
import { useAudioPlayer } from "../../context/AudioPlayerContext";

gsap.registerPlugin(ScrollTrigger);

function SoundCloudPlayer({audio}) {
    const { isPlaying, currentPlayingId, playTrack, stopTrack } = useAudioPlayer();
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [audioId, setAudioId] = useState(0);
    const [id, setId] = useState(0);
    const audioRef = useRef(null);
    const progressRef = useRef(null);

    useEffect(() => {
        setId(audio.id)
    }, [])

    // Play or stop this track based on context state
    useEffect(() => {
        if (isPlaying && currentPlayingId === audio.id) {
            audioRef.current.play();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentPlayingId, audio.id]);

    const togglePlayback = (id) => {
        setAudioId(id)
        if (currentPlayingId === audio.id && isPlaying) {
            stopTrack();
        } else {
            playTrack(audio.id);
        }
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
    }, [audioRef]);
    

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    useGSAP(() => {
        if(isPlaying && (currentPlayingId === audio.id)){
            gsap.from(`.fade-in-player${audio.id}`, {
                opacity: 0,
                duration: .7,
                stagger: .08,
                ease: 'power1.inOut'
            })
        }
    }, [isPlaying, currentPlayingId, audio.id])

    useGSAP(() => {
        if(!isPlaying && !currentPlayingId && (audio.id === audioId)){
            gsap.from(`.fade-in-paused${audio.id}`, {
                opacity: 0,
                duration: .7,
                stagger: .08,
                ease: 'power1.inOut'
            })
    
        }
    }, [isPlaying, currentPlayingId, audio.id])

    
    
    const borderAudioIds = [1, 5, 9];

    if(!audio) return null

    return (
        <section style={{borderTop: borderAudioIds.includes(audio.id) ? '.3px solid rgb(var(--black))' : null}} className="soundcloud-player-container">
            
            <div className="audio-player">
                <audio ref={audioRef} src={audio.src} type="audio/mpeg" preload="auto" />
                {isPlaying && (currentPlayingId === audio.id) ? (

                    <div style={{backgroundColor: 'rgb(var(--black))'}} className="player-data-container-top">
                    <div className="player-data-left-playing">
                        <button className="play-button" onClick={()=>togglePlayback(audio.id)}>
                            {isPlaying && (currentPlayingId === audio.id) ? <FaPause className="icon-player"/> : <FaPlay className="icon-player"/>}
                        </button>
                        <div style={{padding: '0'}} className={`time-player-container-playing fade-in-player${audio.id}`}>
                            <span>{formatTime(currentTime)}</span> | <span>{formatTime(duration)} </span>
                        </div>
                        <h4 className={`player-title fade-in-player${audio.id}`}>{audio.artist}</h4>
                        <input
                            className={`player-progress-bar fade-in-player${audio.id}`}
                            type="range" 
                            ref={progressRef} 
                            defaultValue="0" 
                            step="0.01" 
                            onChange={handleProgressChange} 
                        />
                        <span className={`player-type fade-in-player${audio.id}`}>Type: {audio.type}</span>
                    </div> 
                    </div>
                ) : (
                    <div className="player-data-container-top">
                            <div className="player-data-left">
                                <button className="play-button" onClick={() => togglePlayback(audio.id)}>
                                    {isPlaying && (currentPlayingId === audio.id) ? <FaPause className="icon-player"/> : <FaPlay className="icon-player"/>}
                                </button>
                                <h5 className={`player-artist fade-in-paused${audio.id}`}>{audio.artist}</h5>
                                <div className={`time-player-container fade-in-paused${audio.id}`}>
                                    <span>{formatTime(duration)} min</span>
                                </div>
                            </div>
                            <h4 className={`player-title fade-in-paused${audio.id}`}>{audio.title}</h4>
                            
                    </div>
                    
               
                )}              
            </div>
        </section>
    
    );
}

export default SoundCloudPlayer;
