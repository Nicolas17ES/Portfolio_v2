import GlobalContext from "../../context/GlobalContext";
import { useContext, useState, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import '../../pages/projects/Projects.css'

gsap.registerPlugin(ScrollTrigger);

function AulartTools() {
     const {dispatch, exit_component, button_state} = useContext(GlobalContext);



    return (
         <div className="project-container">
         
        </div>
        
    );
}

export default AulartTools;