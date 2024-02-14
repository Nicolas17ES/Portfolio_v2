
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
      // if (namesArray.length && namesArray.indexOf(titleText) !== -1) {
      //   title.classList.remove('highlight-opacity');
      //   title.classList.add('highlight-glow');
      // } else if (namesArray.length && namesArray.indexOf(titleText) === -1) {
      //   title.classList.remove('highlight-glow');
      //   title.classList.add('highlight-opacity');
      // }

      const splitTitle = new SplitTextJS(title);

      tlx.from(splitTitle.chars, {
        onStart: () => setCurrentName(titles[index].textContent),
        opacity: 0,
        y:110,
        rotateX: -90,
        stagger: 0.04,
        duration: 3, 
      }, "<");

      tlx.to(splitTitle.chars, {
        opacity: .7,
        y: -110,
        rotateX: 90,
        stagger: 0.04,
        duration: 3,
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




// import '../../pages/music/Music.css'
// import GlobalContext from '../../context/GlobalContext'
// import { useEffect, useState, useContext, useRef } from 'react'

// /**
//  * NamesAnimations Component
//  * This component is responsible for displaying and animating a list of names.
//  * It uses the global context to determine which group of names to display based on the current button index.
//  * Each name is positioned and animated within the container with absolute positioning and dynamic style calculations.
//  */
// function NamesAnimations() {
//     // Accessing global context values
//     const { button_index } = useContext(GlobalContext);
//     const [randomNumber, SetRandomNumber] = useState(3);

//     // State to control the animation cycle
//     const [count, setCount] = useState(0);

//     // Mapping of button indices to specific name groups
//     const buttonIndexReferences = {
//         0: 'sonido',
//         1: 'unsilenced',
//         2: 'aurea',
//         3: 'aurea'
//     };

    
    

//     // Names to be displayed for each group
//     const names = {
//         sonido: ['Tzena', 'Ika & Usherenko', 'Tommy Pickles', 'Mathew Neequaye', 'Wendy', 'Gwenan', 'Malika', 'Raphael Carrau', 'Lyo'],
//         unsilenced: ['Lilley', 'Cess', 'Tafu', 'Jesse', 'Reiss'],
//         aurea: ['Tzena', 'Ika & Usherenko', 'Tommy Pickles', 'Lilley', 'Mathew Neequaye', 'Wendy', 'Gwenan', 'Malika', 'Raphael Carrau', 'Lyo','Sugar Free', , 'Clarens', 'Onut', 'Vonvon', 'Cess', 'Tafu', 'Jesse', 'Reiss', 'John Heaven', 'Daniel2000']
//     };

//     // Ref for the container to manage its dimensions
//     const containerRef = useRef(null);

//     // State for storing container dimensions
//     const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

//     // Effect to set the container size on initial render
//     useEffect(() => {
//         if (containerRef.current) {
//             setContainerSize({
//                 width: containerRef.current.offsetWidth,
//                 height: containerRef.current.offsetHeight
//             });
//         }
//     }, []);

//     // Function to calculate a random position for each name
//     const getRandomPosition = (index) => {
//         const maxNameWidth = 200;
//         const maxNameHeight = 50;

//         const x = Math.random() * (containerSize.width - maxNameWidth);
//         const y = Math.random() * (containerSize.height - maxNameHeight);

//         const safeX = Math.max(0, x);
//         const safeY = Math.max(0, y);

//         return { left: safeX, top: safeY };
//     };

//     // Effect to set up and clean up an interval for updating the count state
//     // Depending on the length of each collective names, it will change the delay time between each renderization of names
//     useEffect(() => {
//         if (randomNumber) {
//             const collectiveName = buttonIndexReferences[randomNumber];
//             const intervalCount = names[collectiveName].length * 1000;
            
//             const interval = setInterval(() => {
//                 setCount(prevCount => prevCount + 1);
//             }, intervalCount);

//             return () => clearInterval(interval);
//         }
//     }, []);


//     return (
//         <div ref={containerRef} className="animation-names-container">
//             {names[buttonIndexReferences[randomNumber]].map((name, index) => {
//                 const position = getRandomPosition(index);
//                 const style = {
//                     position: 'absolute',
//                     left: `${position.left}px`,
//                     top: `${position.top}px`,
//                     animationDelay: `${(1 * index) + (names[buttonIndexReferences[randomNumber]].length * count)}s`,
//                 };
//                 return (
//                     <span key={index} style={style} className={`artist-name`}>
//                         {name}
//                     </span>
//                 );
//             })}
//         </div>
//     );
// }

// export default NamesAnimations;