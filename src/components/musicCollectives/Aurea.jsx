import SoundCloudPlayer from "./SoundCloudPlayer";
import GlobalContext from "../../context/GlobalContext";
import { useContext, useState, useEffect } from "react";
import SonidoXTzena from '../../images/SonidoXTzena.jpg';
import SonidoxIkaUshe from '../../images/SonidoxIkaUshe.jpg';
import SonidoxMathew from '../../images/SonidoxMathew.jpg';
import SonidoxTommy from '../../images/SonidoXtommy.jpg';
import { PiVinylRecordLight, PiRadioLight } from "react-icons/pi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Aurea() {
     const {dispatch, exit_component, button_state} = useContext(GlobalContext);
     const [hoveredIndex, setHoveredIndex] = useState(null);


     const audioData = [
        {
            id: 9,
            resume: 'Event we did at Les Enfants Brillants where we invited the talented Slovenian artist Tzena to healdine the party along local talent Jason. On warm up duties we had our residents Bruno&Marco.',
            src: 'https://storage.googleapis.com/audio_porftolio/SugarFree.mp3',
            type: <PiVinylRecordLight className="player-icon"/>,
            title: 'Dimensions',
            artist: 'Sugar Free',
            image:  <img  src={SonidoXTzena} alt="" className="player-image" />,
        },
        {
            id: 10,
            resume: 'For our November residency at Enfants we had the pleasure to host Georgian legends Ika & Usherenko, owners of Small Moves record shop and label and bookers of legendary club Mtkvarze. On warm up duties we had our resident Conor.',
            src: 'https://storage.googleapis.com/audio_porftolio/marcobruno.mp3',
            type: <PiRadioLight  className="player-icon"/>,
            title: 'Podcast',
            artist: 'Bruno&Marco',
            image: <img  src={SonidoxIkaUshe} alt="" className="player-image" />,
        },
        {
            id:11,
            resume: 'For our first night at club Red58, we welcomed Butter Side Up resident Mathew Neequaye, who brought an exceptional selection of tracks.  Alongside him, our residents Bruno & Marco delivered equally compelling sets.',
             src: 'https://storage.googleapis.com/audio_porftolio/former.mp3',
             type: <PiRadioLight className="player-icon"/>,
            title: 'Uns Podcats',
            artist: 'Former',
            image: <img  src={SonidoxMathew} alt="" className="player-image" />,
        },
        {
            id: 12,
            resume: 'We had the privilege of featuring Tommy Pickles, a DJ hailing from the UK, as our headliner. Known for his profound understanding of the dance floor. The night started with an energizing warm-up set by our very own resident, Conor.',
            src: 'https://storage.googleapis.com/audio_porftolio/JohnHeaven.mp3',
            type: <PiRadioLight className="player-icon"/>,
            title: 'Aurea Podcast',
            artist: 'John Heaven',
            image: <img  src={SonidoxTommy} alt="" className="player-image" />,
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
      }, []);

      useEffect(() => {
        if(button_state.value === 2 && exit_component){
            gsap.to(".soundcloud-outer-animation", {
                yPercent: 440,
                duration: 2,
                stagger: {
                    amount: 0.26,
                    from: "end", // Change the direction to start from the end
                },
                opacity: 0
            });
        }

      }, [exit_component, button_state]);


    




    return (
         <div style={{margin: '30px 0px 60px 0'}} onMouseLeave={handleMouseLeave}>
         {audioData.map((audio, index) => (
             <div className="soundcloud-outer-animation" onMouseEnter={() => handleMouseEnter(index)} key={audio.id}>
                 <SoundCloudPlayer audio={audio} isHovered={index === hoveredIndex} />
             </div>
         ))}
     </div>
        
    );
}

export default Aurea;