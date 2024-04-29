import '../../pages/music/Music.css'
import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import Introducing from '../../images/Introducing.jpg'; // Import the image

// Sonido images
import SonidoXTzena from '../../images/SonidoXTzena.jpg'; // Import the image
import SonidoxIkaUshe from '../../images/SonidoxIkaUshe.jpg'; // Import the image
import SonidoxMathew from '../../images/SonidoxMathew.jpg'; // Import the image
import SonidoxTommy from '../../images/SonidoXtommy.jpg'; // Import the image
import SonidoxPoggio from '../../images/SonidoXPoggio.jpg'; // Import the image
import SonidoxSamovar from '../../images/SonidoXsamovar.jpg'; // Import the image
import SonidoxDulac from '../../images/SonidoXDulac.jpg'; // Import the image
import Sonidoxgarage from '../../images/SonidoXgarage.jpg'; // Import the image
import SonidoxDonnie from '../../images/SonidoXdonnie.jpg'; // Import the image
import SonidoXWendy from '../../images/SonidoXWendy.jpg'; 
import SliderCard from './SliderCard'


// whitechoco images
import ChocoXAfter from '../../images/ChocoXAfter.jpg'; // Import the image
import ChocoXBackyard from '../../images/ChocoXBackyard.jpg'; // Import the image
import ChocoXBosc from '../../images/ChocoXBosc.jpg'; // Import the image
import ChocoXMerce from '../../images/ChocoXMerce.jpg'; // Import the image
import ChocoXNye from '../../images/ChocoXNye.jpg'; // Import the image
import ChocoXNye2 from '../../images/ChocoXNye2.jpg'; // Import the image
import ChocoXReiss from '../../images/ChocoXReiss.jpg'; // Import the image
import ChocoXReiss2 from '../../images/ChocoXReiss2.jpg'; // Import the image
import ChocoXSugar from '../../images/ChocoXSugar.jpg'; // Import the image
import ChocoxSugar2 from '../../images/ChocoxSugar2.jpg'; // Import the image

// unsilenced images
import Unsilenced31 from '../../images/Unsilenced31.jpg'; // Import the image
import Unsilenced32 from '../../images/Unsilenced32.jpg'; // Import the image
import Unsilenced33 from '../../images/Unsilenced33.jpg'; // Import the image
import UnsilencedVA1 from '../../images/UnsilencedVA1.jpg'; // Import the image
import Unsilencedxchoco1 from '../../images/Unsilencedxchoco1.jpg'; // Import the image
import Unsilencedxchoco2 from '../../images/Unsilencedxchoco2.jpg'; // Import the image
import Unsilencedxchoco3 from '../../images/Unsilencedxchoco3.jpg'; // Import the image
import Unsilencedxgenerator from '../../images/Unsilencedxgenerator.jpg'; // Import the image
/**
 * BodySlider Component
 * This component represents a horizontal slider that will display a series of images and text representing different collectives.
 * It uses the global context to determine which group of names to display based on the current button index.
 */
function BodySlider() {
    // Accessing global context values
    const { button_index, button_state } = useContext(GlobalContext);

    // Mapping of button indices to specific name groups
    const buttonIndexReferences = {
        0: 'sonido',
        1: 'unsilenced',
        2: 'aurea'
    };

    const cardsData = {
        0: [
            {
                image_one: SonidoxSamovar,
                image_two: SonidoxMathew,
                // video: MathewVideo,
                id: 6,
                alt: 'Sonido x Samovar',
                title: 'Sonido x Samovar',
                paragraph: 'Samovar, Conor Brophy, Bruno&Marco',
                location: 'Tunnel Barcelona',
                date: '8.5.2022'
                
            },
            {
                image_one: Sonidoxgarage,
                image_two: SonidoxIkaUshe,
                // video: MathewVideo,
                id: 7,
                alt: 'Sonido X Carrau',
                title: 'Sonido X Carray',
                paragraph: 'Raphael Carrau, Lyo, Sebastian, Remy, Bruno&Marco',
                location: 'Garage Of The Bass Valley',
                date: '15.2.2022'
                
            },
            {
                image_one: SonidoxDonnie,
                image_two: SonidoxIkaUshe,
                // video: MathewVideo,
                id: 8,
                alt: 'Sonido X Donnie',
                title: 'Sonido X Donnie',
                paragraph: 'Donnie, Bruno&Marco',
                location: 'Bus Terraza',
                date: '19.11.2021'
                
            },
            {
                image_one: SonidoXWendy,
                image_two: SonidoxIkaUshe,
                // video: MathewVideo,
                id: 9,
                alt: 'Sonido X Wendy',
                title: 'Sonido X Wendy',
                paragraph: 'Wendy',
                location: 'Bus Terraza',
                date: '10.10.2021'              
            },
            {
                image_one: SonidoXTzena,
                image_two: SonidoxIkaUshe,
                // video: MathewVideo,
                id: 0,
                alt: 'Sonido X Tzena',
                title: 'Sonido X Tzena',
                paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt impedit, commodi architecto recusandae maxime',
                location: 'Les enfants brillants',
                date: '13.1.2024'
            },
            {
                image_one: SonidoxIkaUshe,
                image_two: SonidoxMathew,
                // video: MathewVideo,
                id: 1,
                alt: 'Sonido x Ika & Usherenko',
                title: 'Sonido x Ika & Usherenko',
                paragraph: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt impedit, commodi architecto recusandae maxime',
                location: 'Les enfants brillants',
                date: '18.11.2023'
            },
            {
                image_one: SonidoxMathew,
                image_two: SonidoXWendy,
                // video: MathewVideo,
                id: 2,
                alt: 'Sonido x Mathew Neequaye',
                title: 'Sonido x Mathew Neequaye',
                paragraph: 'Mathew Neequaye, Bruno&Marco',
                location: 'Red58',
                date: '26.5.2023'
            },
            {
                image_one: SonidoxTommy,
                image_two: SonidoxIkaUshe,
                // video: MathewVideo,
                id: 3,
                alt: 'Sonido X Tommy',
                title: 'Sonido X Tommy',
                paragraph: 'Tommy Pickles, Christian, Conor',
                location: 'Les enfants brillants',
                date: '14.1.2023'
            },
            {
                image_one: SonidoxPoggio,
                image_two: SonidoxMathew,
                // video: MathewVideo,
                id: 4,
                alt: 'Sonido x Poggio',
                title: 'Sonido x Poggio',
                paragraph: 'Poggio, Silvio, Bruno&Marco',
                location: 'Les enfants brillants',
                date: '21.10.2022'
            },
            {
                image_one: SonidoxDulac,
                image_two: SonidoXWendy,
                // video: MathewVideo,
                id: 5,
                alt: 'Sonido x Felix Dulac',
                title: 'Sonido x Felix Dulac',
                paragraph: 'Felix Dulac, Conor & Onoffon, Max TA',
                location: 'Secre Warehouse',
                date: '1.07.2022'
            },
        ],
        1: [
            {
                image_one: Unsilencedxchoco1,
                image_two: Unsilencedxchoco1,
                id: 1,
                alt: 'Unsilenced X WhiteChoco',
                title: 'Unsilenced X WhiteChoco',
                paragraph: 'Reiss, Former, Bruno&Marco',
                location: 'Oosterbar',
                date: '6.3.2020'
            },
            {
                image_one: Unsilencedxchoco2,
                image_two: Unsilencedxchoco2,
                id: 2,
                alt: 'Unsilenced X WhiteChoco',
                title: 'Unsilenced X WhiteChoco',
                paragraph: 'Reiss, Former, Bruno&Marco',
                location: 'Oosterbar',
                date: '6.3.2020'
            },
            {
                image_one: Unsilencedxchoco3,
                image_two: Unsilencedxchoco3,
                id: 3,
                alt: 'Unsilenced X WhiteChoco',
                title: 'Unsilenced X WhiteChoco',
                paragraph: 'Reiss, Former, Bruno&Marco',
                location: 'oosterbar',
                date: '6.3.2020'
            },
            {
                image_one: UnsilencedVA1,
                image_two: UnsilencedVA1,
                id: 4,
                alt: 'UnsilencedVA1',
                title: 'UnsilencedVA2',
                paragraph: 'Paradise City Breakers, Daif, Sevenbeatz, Denalia',
                location: 'Amsterdam',
                date: '3.2.2021'
            },
            {
                image_one: Unsilenced31,
                image_two: Unsilenced31,
                id: 5,
                alt: 'Unsilenced Anniversary',
                title: 'Unsilenced Anniversary',
                paragraph: 'LegramVG, DJ Senc, Malom',
                location: 'Oosterbar',
                date: '1.4.2022'
            },
            {
                image_one: Unsilenced32,
                image_two: Unsilenced32,
                id: 6,
                alt: 'Unsilenced Anniversary2',
                title: 'Unsilenced Anniversary2',
                paragraph: 'LegramVG, DJ Senc, Malom',
                location: 'Oosterbar',
                date: '1.4.2022'
            },
            {
                image_one: Unsilenced33,
                image_two: Unsilenced33,
                id: 7,
                alt: 'Unsilenced Anniversary3',
                title: 'Unsilenced Anniversary3',
                paragraph: 'LegramVG, DJ Senc, Malom',
                location: 'Oosterbar',
                date: '1.4.2022'
            },
            {
                image_one: Unsilenced33,
                image_two: Unsilenced33,
                id: 8,
                alt: 'Unsilenced Anniversary3',
                title: 'Unsilenced Anniversary3',
                paragraph: 'LegramVG, DJ Senc, Malom',
                location: 'Oosterbar',
                date: '1.4.2022'
                
            },
            {
                image_one: Unsilenced33,
                image_two: Unsilenced33,
                id: 9,
                alt: 'Unsilenced Anniversary3',
                title: 'Unsilenced Anniversary3',
                paragraph: 'LegramVG, DJ Senc, Malom',
                location: 'Oosterbar',
                date: '1.4.2022'
                
            },
        ],
        2: [
            {
                image_one: ChocoXNye,
                image_two: ChocoXSugar,
                id: 6,
                alt: 'Aurea X ',
                title: 'Aurea X NYE',
                paragraph: 'Clarens, Onut, John Heaven',
                location: 'Secret Location',
                date: '31.12.2019'     
            },
            {
                image_one: ChocoXNye2,
                image_two: ChocoXSugar,
                id: 7,
                alt: 'Aurea X NYE',
                title: 'Aurea X NYE',
                paragraph: 'Clarens, Onut, John Heaven',
                location: 'La Torre dels Lleons',
                date: '31.12.2019'                           
            },
            {
                image_one: ChocoXBackyard,
                image_two: ChocoXSugar,
                id: 8,
                alt: 'Aurea X Backyard',
                title: 'Aurea X Backyard',
                paragraph: 'Clarens, Gerard, Vonvon, Hoder Mofeti',
                location: 'Parc del Eina',
                date: '9.11.2019'
                   
            },
            {
                image_one: ChocoXMerce,
                image_two: ChocoXSugar,
                id: 9,
                alt: 'Aurea X Merce',
                title: 'Aurea X Merce',
                paragraph: 'Dani2000, Jay Darvishan, Sensat',
                location: 'Parc del Eina',
                date: '20.9.2019'               
            },
            {
                image_one: ChocoXSugar,
                image_two: ChocoXSugar,
                id: 0,
                alt: 'Aurea X Pumarejo',
                title: 'Aurea X Pumarejo',
                paragraph: 'Sugar Free',
                location: 'El Pumarejo',
                date: '5.1.2021'

            },
            {
                image_one: ChocoxSugar2,
                image_two: ChocoxSugar2,
                id: 1,
                alt: 'Aurea X Pumarejo',
                title: 'Aurea X Pumarejo',
                paragraph: 'Sugar Free',
                location: 'El Pumarejo',
                date: '5.1.2021'

            },
            {
                image_one: ChocoXBosc,
                image_two: ChocoXSugar,
                id: 2,
                alt: 'Aurea X Melisa',
                title: 'Aurea X Melisa',
                paragraph: 'Melisa, Bruno&Marco, Nicolás',
                location: 'Buena Onda Social Club',
                date: '25.7.2020'
            },
            {
                image_one: ChocoXReiss,
                image_two: ChocoXSugar,
                id: 3,
                alt: 'Aurea X Unsilenced',
                title: 'Aurea X Unsilenced',
                paragraph: 'Reiss, Former',
                location: 'Oosterbar',
                date: '6.3.2020'
            },
            {
                image_one: ChocoXReiss2,
                image_two: ChocoXSugar,
                id: 4,
                alt: 'Aurea X Unsilenced',
                title: 'Aurea X Unsilenced',
                paragraph: 'Reiss, Former',
                location: 'Oosterbar',
                date: '6.3.2020'
            },
            {
                image_one: ChocoXAfter,
                image_two: ChocoXSugar,
                id: 5,
                alt: 'Aurea X Secret',
                title: 'Aurea X Secret',
                paragraph: 'IdaYvuelta, Gerard, Nicolás',
                location: 'Secret Location',
                date: '1.1.2020'             
            },
        ]
    }

    return (
        
            <SliderCard data={cardsData[button_state.value]}/>
    );
}

export default BodySlider;