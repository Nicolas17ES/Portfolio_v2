import { GiPentarrowsTornado } from "react-icons/gi";
import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'
import '../../pages/about/About.css'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ViewProjectsCursor.js

function ViewProjectsCursor({ }) {
  const { view_projects_cursor, mouse_position } = useContext(GlobalContext);
  const [position, setPosition] = useState({ x: null, y: null });
  const [cursorRendered, setCursorRendered] = useState(false);
  const cursorRef = useRef(null); // Use useRef to get a reference to the cursor element

  useEffect(() => {
    setPosition({x: mouse_position.x, y: mouse_position.y})
  }, [])

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
      setCursorRendered(true)
      cursorRef.current.style.left = `${position.x - 10}px`;
      cursorRef.current.style.top = `${position.y - 10}px`;
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
          duration: .4, // Duration of the animation
          ease: 'power1.out', // Easing function for the animation
        }
      );
    }
  }, [view_projects_cursor]);
  

  if(position.y === 0 || position.x === 0) return null;

    return (
      <div ref={cursorRef} className="custom-cursor" style={{mixBlendMode:view_projects_cursor.background ? 'difference' : null}}>
        <div className="cursor-inner">{view_projects_cursor.text ? view_projects_cursor.text : 'VIEW'}</div>
      </div>
    )
}

export default ViewProjectsCursor;