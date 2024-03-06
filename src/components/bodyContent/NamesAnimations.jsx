
import React, { useEffect, useContext, useState } from "react";
import GlobalContext from '../../context/GlobalContext';
import gsap from "gsap";
import SplitTextJS from "split-text-js";
import { useGSAP } from "@gsap/react";

function NamesAnimations() {
  
  const {button_index, dispatch} = useContext(GlobalContext);
  const [namesArray, setNamesArray] = useState([]);
  const [currentName, setCurrentName] = useState("");

  // Names to be displayed for each group
  const names =  {
  sonido: ["TZENA", "IKA & USHERENKO", "TOMMY PICKLES", "MATHEW NEEQUAYE", "WENDY", "GWENAN", "MALIKA", "RAPHA CARRAU", "LYO"],
  unsilenced: [ "LILLEY", "CESS", "TAFU", "JESSE", "REISS"],
  aurea: [ "CLARENS", "ONUT", "VONVON", "SUGAR FREE", "JOHN HEAVEN", "DANIEL2000"],
  all: [ "IKA & USHERENKO", "TOMMY PICKLES", "MATHEW NEEQUAYE", "RAPHA CARRAU", "SUGAR FREE", "JOHN HEAVEN", "DANIEL2000", "GWENAN", "MALIKA", "LILLEY",  "CESS", "TAFU",  "TZENA", "ONUT", "WENDY","LYO", "JESSE", "REISS", "CLARENS", "VONVON"]
}



     // References for button indices to manage content rendering.
    const buttonIndexReferences = {
        0: 'sonido',
        1: 'unsilenced',
        2: 'aurea'
    };


  useGSAP(() => {
    const titles = gsap.utils.toArray(".animation-names-container p");
    const tlx = gsap.timeline({ repeat: -1, repeatDelay: 0 });

    titles.forEach((title, index) => {
      const titleText = title.textContent.trim().replace(/\u00A0/g, ' ').toUpperCase();

      const splitTitle = new SplitTextJS(title);

      tlx.from(splitTitle.chars, {
        onStart: () => setCurrentName(titles[index].textContent),
        opacity: 0,
        y:90,
        rotateX: -90,
        stagger: 0.04,
        duration: 1, 
      }, "<");
        tlx.to(splitTitle.chars, {
          opacity: 1, // Fade in to full visibility
          duration: .5, // Duration of staying fully visible
      }, "<.5")

      tlx.to(splitTitle.chars, {
        opacity: 0,
        y: -90,
        rotateX: 90,
        stagger: 0.04,
        duration: 1,
      }, "<1");
    });
  }, );


  useEffect(() => {
    if(names.aurea.includes(currentName)){
      dispatch({
        type: 'SET_ANIMATION_VALUE',
        payload: 2
      })
    } else if(names.unsilenced.includes(currentName)){
      dispatch({
        type: 'SET_ANIMATION_VALUE',
        payload: 1
      })
    } else {
      dispatch({
        type: 'SET_ANIMATION_VALUE',
        payload: 0
      })
    }
  }, [currentName])

  useEffect(() => {
    if(button_index !== null){
      const upperCaseArray = names[buttonIndexReferences[button_index]].map(element => element.toUpperCase());
      setNamesArray(upperCaseArray)
    }
  }, [button_index])
    

    return (
        <div className="animation-names-container">
            {names.all.map((name, index) => (
              
                <p key={index} className='single-artist-name'>
                        {name}
                    </p>  
              
            ))}
        </div>
    );
}

export default NamesAnimations;



