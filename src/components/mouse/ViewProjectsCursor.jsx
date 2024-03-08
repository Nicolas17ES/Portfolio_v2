import { GiPentarrowsTornado } from "react-icons/gi";
import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/about/About.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ViewProjectsCursor.js

function ViewProjectsCursor({ text }) {
  const { view_projects_cursor } = useContext(GlobalContext);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cursorRef = useRef(null); // Use useRef to get a reference to the cursor element

  useEffect(() => {
    const updateCursorPosition = (event) => {
      setPosition({ x: event.clientX - 30, y: event.clientY - 30 });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, []);

  useEffect(() => {
    if (cursorRef.current) {
      cursorRef.current.style.left = `${position.x}px`;
      cursorRef.current.style.top = `${position.y}px`;
    }
  }, [position]);

  useGSAP(() => {
    const cursor = cursorRef.current;
    if (cursor && view_projects_cursor) {
      // Initial animation from scale 0 to 1
      gsap.fromTo(cursor, 
        { opacity: 0, scale: 0 }, // from state
        {
          opacity: 1,
          scale: 1,
          duration: .5, // Duration of the animation
          ease: 'linear', // Easing function for the animation
          // onComplete: () => {
          //   // Heartbeat animation that starts once the initial animation is complete
          //   const tl = gsap.timeline({ repeat: -1, yoyo: true });
          //   tl.to(cursor, {
          //     scale: 1.27, // Scale up
          //     duration: .75,
          //     ease: 'ease-in-out',
          //   })
          // }
        }
      );
    }
  }, [view_projects_cursor]);
  

  return (
    <div ref={cursorRef} className="custom-cursor">
      <div className="cursor-inner">{text ? text : 'VIEW'}</div>
    </div>
  );
}

export default ViewProjectsCursor;