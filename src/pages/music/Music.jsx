import './Music.css'
import ButtonsBody from '../../components/buttonsBody/ButtonsBoody'
import Introducing from '../../images/Introducing.jpg'; // Import the image
import SonidoxIkaUshe from '../../images/SonidoxIkaUshe.jpg'; // Import the image
import SonidoxMathew from '../../images/SonidoxMathew.jpg'; // Import the image
import SonidoXWendy from '../../images/SonidoXWendy.jpg'; // Import the image

import useBodyAnimation from '../../hooks/useBodyAnimation'; // Import your custom hook


import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate } from 'react-router-dom';




function Music() {

    const {dispatch, button_index, navbar_location} = useContext(GlobalContext);

     // Get the current location from React Router
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname.substring(1); // Removes the leading slash
    // add ref to the body
    const bodyRef = useRef(null);

    useBodyAnimation(bodyRef, navbar_location, pathname, navigate);


    const data = {
        location: 'about',
        buttons: [
                {name: '<Sonido_Club>'},
                {name: '<Unsilenced>'},
                {name: '<Aurea_by_WC>'}
            ]
    }

    const buttonIndexReferences = {
        0: 'Sonido_Club',
        1: 'Unsilenced',
        2: 'Aurea_by_WC'       
    }

  return (
      <div ref={bodyRef} className="body-container">
         <div className="body-container-top">
             <ButtonsBody data={data}/>
             {button_index === 0 && (
                <div className="hover-image-container">
                    <img
                        src={Introducing}
                        className="onhover-images"
                        alt="Introducing Sonido"
                    />
                </div>
        )}
         </div>
         
      </div>
  );
}

export default Music;