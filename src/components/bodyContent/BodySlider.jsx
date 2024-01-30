import '../../pages/music/Music.css'
import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import Introducing from '../../images/Introducing.jpg'; // Import the image
import SonidoxIkaUshe from '../../images/SonidoxIkaUshe.jpg'; // Import the image
import SonidoxMathew from '../../images/SonidoxMathew.jpg'; // Import the image
import SonidoXWendy from '../../images/SonidoXWendy.jpg'; // Import the image

/**
 * BodySlider Component
 * This component represents a horizontal slider that will display a series of images and text representing different collectives.
 * It uses the global context to determine which group of names to display based on the current button index.
 */
function BodySlider() {
    // Accessing global context values
    const { button_index } = useContext(GlobalContext);

    // Mapping of button indices to specific name groups
    const buttonIndexReferences = {
        0: 'sonido',
        1: 'unsilenced',
        2: 'aurea'
    };

    return (
        <div className="body-slider-container">
                <div className="hover-image-container">
                    <img
                        src={Introducing}
                        className=""
                        alt="Introducing Sonido"
                    />
                </div>
        </div>
    );
}

export default BodySlider;