import SoundCloudPlayer from "./SoundCloudPlayer";
import GlobalContext from "../../context/GlobalContext";
import { useContext, useState } from "react";
import Tommy from '../../audio/TommyPickles.mp3'
import Mathew from '../../audio/Matthew.mp3'
import IkaUsherenko from '../../audio/IkaUsherenko.mp3'
import Tzena from '../../audio/Tzena.mp3'
import SonidoXTzena from '../../images/SonidoXTzena.jpg';
import SonidoxIkaUshe from '../../images/SonidoxIkaUshe.jpg';
import SonidoxMathew from '../../images/SonidoxMathew.jpg';
import SonidoxTommy from '../../images/SonidoXtommy.jpg';
import { PiVinylRecordLight, PiRadioLight } from "react-icons/pi";


function Sonido() {
     const {dispatch} = useContext(GlobalContext);
     const [hoveredIndex, setHoveredIndex] = useState(null);


     const audioData = [
        {
            id: 1,
            resume: 'Event we did at Les Enfants Brillants where we invited the talented Slovenian artist Tzena to healdine the party along local talent Jason. On warm up duties we had our residents Bruno&Marco.',
            src: Tzena,
            type: <PiVinylRecordLight className="player-icon"/>,
            title: 'Allegro',
            artist: 'Nace Tzena',
            image:  <img  src={SonidoXTzena} alt="" className="player-image" />,
        },
        {
            id: 2,
            resume: 'For our November residency at Enfants we had the pleasure to host Georgian legends Ika & Usherenko, owners of Small Moves record shop and label and bookers of legendary club Mtkvarze. On warm up duties we had our resident Conor.',
            src: IkaUsherenko,
            type: <PiRadioLight  className="player-icon"/>,
            title: 'BadumTish',
            artist: 'Ika & Usherenko',
            image: <img  src={SonidoxIkaUshe} alt="" className="player-image" />,
        },
        {
            id: 3,
            resume: 'For our first night at club Red58, we welcomed Butter Side Up resident Mathew Neequaye, who brought an exceptional selection of tracks.  Alongside him, our residents Bruno & Marco delivered equally compelling sets.',
             src: Mathew,
             type: <PiRadioLight className="player-icon"/>,
            title: 'Dimensions',
            artist: 'Mathew Neequaye',
            image: <img  src={SonidoxMathew} alt="" className="player-image" />,
        },
        {
            id: 4,
            resume: 'We had the privilege of featuring Tommy Pickles, a DJ hailing from the UK, as our headliner. Known for his profound understanding of the dance floor. The night started with an energizing warm-up set by our very own resident, Conor.',
            src: Tommy,
            type: <PiRadioLight className="player-icon"/>,
            title: 'Cartulis',
            artist: 'Tommy Pickles',
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




    return (
         <div style={{margin: '30px 0px 60px 0'}} onMouseLeave={handleMouseLeave}>
         {audioData.map((audio, index) => (
             <div onMouseEnter={() => handleMouseEnter(index)} key={audio.id}>
                 <SoundCloudPlayer audio={audio} isHovered={index === hoveredIndex} />
             </div>
         ))}
     </div>
        
    );
}

export default Sonido;