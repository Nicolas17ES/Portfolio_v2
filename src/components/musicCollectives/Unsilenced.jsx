import SoundCloudPlayer from "./SoundCloudPlayer";
import GlobalContext from "../../context/GlobalContext";
import { useContext, useState } from "react";
import former from '../../audio/former.mp3'
import legramvg from '../../audio/legramvg.mp3'
import marcobruno from '../../audio/IkaUsherenko.mp3'
import paradise from '../../audio/Tzena.mp3'
import SonidoXTzena from '../../images/SonidoXTzena.jpg';
import SonidoxIkaUshe from '../../images/SonidoxIkaUshe.jpg';
import SonidoxMathew from '../../images/SonidoxMathew.jpg';
import SonidoxTommy from '../../images/SonidoXtommy.jpg';
import { PiVinylRecordLight, PiRadioLight } from "react-icons/pi";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

function Unsilenced() {
     const {dispatch} = useContext(GlobalContext);
     const [hoveredIndex, setHoveredIndex] = useState(null);


     const audioData = [
        {
            id: 1,
            resume: 'Event we did at Generator Hostel as our first event where we launched Unsilenced music collective.',
            src: former,
            type: <PiRadioLight className="player-icon"/>,
            title: 'Unsilenced Poddy',
            artist: 'Former',
            image:  <img  src={SonidoXTzena} alt="" className="player-image" />,
        },
        {
            id: 2,
            resume: 'For our anniversary we joined forces with WhiteChoco Barcelona and hold an amazing party at Osterbar, local talend and VBX resident Reiss headlined the night. Bruno&Marco brought the magic straight from Barcelona and on warm up duties we had our residents Former.',
            src: marcobruno,
            type: <PiRadioLight  className="player-icon"/>,
            title: 'Unsilenced Poddy',
            artist: 'Marco&Bruno',
            image: <img  src={SonidoxIkaUshe} alt="" className="player-image" />,
        },
        {
            id: 3,
            resume: 'For our first music release, we welcomed italian producer Paradise City Breakers along Denalia, Outcast Torino resident. On the B side french producer DAIF and Sevenbeatz brought their A game.',
             src: paradise,
             type: <PiVinylRecordLight className="player-icon"/>,
            title: 'Unsilenced',
            artist: 'Paradise City Breakers',
            image: <img  src={SonidoxMathew} alt="" className="player-image" />,
        },
        {
            id: 4,
            resume: 'We had the privilege of featuring LegramVG, a DJ duo switzerland, as our headliners. Known for his profound understanding of the dance floor.  The night started with an energizing warm-up set by our very own resident, Malom.',
            src: legramvg,
            type: <PiRadioLight className="player-icon"/>,
            title: 'ItemCast 033',
            artist: 'LegramVG',
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

          xPercent: -200,
          duration: 1,
          stagger: 0.4,
        });
      }, []);
    




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

export default Unsilenced;