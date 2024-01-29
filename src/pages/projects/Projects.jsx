import ButtonsBody from '../../components/buttonsBody/ButtonsBoody'
import './Projects.css'
import useBodyAnimation from '../../hooks/useBodyAnimation'; // Import your custom hook


import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate } from 'react-router-dom';


function Projects() {

     // Get the current location from React Router
    const location = useLocation();
    const navigate = useNavigate();
    const pathname = location.pathname.substring(1); // Removes the leading slash

    const {dispatch, button_index, navbar_location} = useContext(GlobalContext);

    // add ref to the body
    const bodyRef = useRef(null);

    useBodyAnimation(bodyRef, navbar_location, pathname, navigate);


    const data = {
        location: 'about',
        buttons: [
            {name: '<project 1>'},
            {name: '<project 2>'}
        ]
    }

    return (
        <div ref={bodyRef} className="body-container">
            <ButtonsBody data={data}/>
        </div>
    )
}

export default Projects
