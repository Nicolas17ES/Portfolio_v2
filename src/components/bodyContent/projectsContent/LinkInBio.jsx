import '../../../pages/projects/Projects.css'
import GlobalContext from '../../../context/GlobalContext';
import { useEffect, useState, useContext, useRef } from 'react'
import { useLocation,   useNavigate, useParams } from 'react-router-dom';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";


// The Projects component displays project sections and handles animations based on mouse movements.
function LinkInBio() {

    // State and context for managing cursor visibility, animations, and global app state.
    const { view_projects_cursor, display_body, navbar_location, dispatch, mouse_position } = useContext(GlobalContext);

    return (
        <div className="body-container project-container">
            bio
        </div>
    )
}

export default LinkInBio