import SoundCloudPlayer from "./SoundCloudPlayer";
import GlobalContext from "../../context/GlobalContext";
import { useContext, useState, useEffect } from "react";
import { PiVinylRecordLight, PiRadioLight } from "react-icons/pi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Sonido() {
     const {dispatch, exit_component, button_state, display_soundcloud_player, screenWidth, browser} = useContext(GlobalContext);
     const [hoveredIndex, setHoveredIndex] = useState(null);


     const audioData = [
        {
            id: 1,
            resume: 'Event we did at Les Enfants Brillants where we invited the talented Slovenian artist Tzena to healdine the party along local talent Jason. On warm up duties we had our residents Bruno&Marco.',
            src: browser === 'Safari' ? ' https://storage.googleapis.com/audio_porftolio/legramvg.mp3' : 'https://storage.googleapis.com/audio_porftolio/Tzena.mp3',
            type: <PiVinylRecordLight className="player-icon"/>,
            title: 'Allegro',
            artist: 'Nace Tzena',
        },
        {
            id: 2,
            resume: 'For our November residency at Enfants we had the pleasure to host Georgian legends Ika & Usherenko, owners of Small Moves record shop and label and bookers of legendary club Mtkvarze. On warm up duties we had our resident Conor.',
            src: 'https://storage.googleapis.com/audio_porftolio/IkaUsherenko.mp3',
            type: <PiRadioLight  className="player-icon"/>,
            title: 'BadumTish',
            artist: 'Ika & Usherenko',
        },
        {
            id: 3,
            resume: 'For our first night at club Red58, we welcomed Butter Side Up resident Mathew Neequaye, who brought an exceptional selection of tracks.  Alongside him, our residents Bruno & Marco delivered equally compelling sets.',
             src: 'https://storage.googleapis.com/audio_porftolio/Matthew.mp3',
             type: <PiRadioLight className="player-icon"/>,
            title: 'Dimensions',
            artist: 'Mathew Neequaye',
        },
        {
            id: 4,
            resume: 'We had the privilege of featuring Tommy Pickles, a DJ hailing from the UK, as our headliner. Known for his profound understanding of the dance floor. The night started with an energizing warm-up set by our very own resident, Conor.',
            src: 'https://storage.googleapis.com/audio_porftolio/TommyPickles.mp3',
            type: <PiRadioLight className="player-icon"/>,
            title: 'Cartulis',
            artist: 'Tommy Pickles',
        },
     ]


    const handleMouseEnter = (index) => {
        setHoveredIndex(index);
        dispatch({
            type: 'SET_PROJECT_INDEX_HOVERED',
            payload: index +1
        })
    };

    const handleMouseLeave = () => {
        setHoveredIndex(null);
        dispatch({
            type: 'SET_PROJECT_INDEX_HOVERED',
            payload: null
        })
    };

    useGSAP(() => {
        gsap.from(".soundcloud-outer-animation", {
          scrollTrigger: {
            trigger: ".soundcloud-outer-animation",
            start: "top 85%", // Adjust as needed
            end: "top 70%",
            scrub: false,
          },

          xPercent: -100,
          duration: 1.4,
          stagger: 0.2,
        });
      }, [display_soundcloud_player]);

      useEffect(() => {
        if(button_state.value === 0 && exit_component){
            gsap.to(".soundcloud-outer-animation", {
                duration: .9,
                opacity: 0
            });
        }

      }, [exit_component]);
    




    return (
         <div className="music-collectives-bottom-container" style={{margin: '30px 0px 60px 0'}}>
         {audioData.map((audio, index) => (
             <div className="soundcloud-outer-animation" onMouseLeave={handleMouseLeave} onMouseEnter={() => handleMouseEnter(index)} key={audio.id}>
                 {screenWidth > 700 ? (
                        <SoundCloudPlayer audio={audio} isHovered={index === hoveredIndex} />
                    ) : (
                        display_soundcloud_player && <SoundCloudPlayer audio={audio} isHovered={index === hoveredIndex} />
                    )}
             </div>
         ))}
     </div>
        
    );
}

export default Sonido;