import '../../pages/music/Music.css'
import GlobalContext from '../../context/GlobalContext'
import { useEffect, useState, useContext, useRef } from 'react'

/**
 * NamesAnimations Component
 * This component is responsible for displaying and animating a list of names.
 * It uses the global context to determine which group of names to display based on the current button index.
 * Each name is positioned and animated within the container with absolute positioning and dynamic style calculations.
 */
function NamesAnimations() {
    // Accessing global context values
    const { button_index } = useContext(GlobalContext);

    // State to control the animation cycle
    const [count, setCount] = useState(0);

    // Mapping of button indices to specific name groups
    const buttonIndexReferences = {
        0: 'sonido',
        1: 'unsilenced',
        2: 'aurea'
    };

    // Names to be displayed for each group
    const names = {
        sonido: ['Tzena', 'Ika & Usherenko', 'Tommy Pickles', 'Mathew Neequaye', 'Wendy', 'Gwenan', 'Malika', 'Raphael Carrau', 'Lyo'],
        unsilenced: ['Lilley', 'Cess', 'Tafu', 'Jesse', 'Reiss'],
        aurea: ['Sugar Free', 'John Heaven', 'Daniel2000', 'Clarens', 'Onut', 'Vonvon']
    };

    // Ref for the container to manage its dimensions
    const containerRef = useRef(null);

    // State for storing container dimensions
    const [containerSize, setContainerSize] = useState({ width: 0, height: 0 });

    // Effect to set the container size on initial render
    useEffect(() => {
        if (containerRef.current) {
            setContainerSize({
                width: containerRef.current.offsetWidth,
                height: containerRef.current.offsetHeight
            });
        }
    }, []);

    // Function to calculate a random position for each name
    const getRandomPosition = (index) => {
        const maxNameWidth = 200;
        const maxNameHeight = 50;

        const x = Math.random() * (containerSize.width - maxNameWidth);
        const y = Math.random() * (containerSize.height - maxNameHeight);

        const safeX = Math.max(0, x);
        const safeY = Math.max(0, y);

        return { left: safeX, top: safeY };
    };

    // Effect to set up and clean up an interval for updating the count state
    // Depending on the length of each collective names, it will change the delay time between each renderization of names
    useEffect(() => {
        if (button_index !== null && button_index !== undefined) {
            const collectiveName = buttonIndexReferences[button_index];
            const intervalCount = names[collectiveName].length * 1000;
            
            const interval = setInterval(() => {
                setCount(prevCount => prevCount + 1);
            }, intervalCount);

            return () => clearInterval(interval);
        }
    }, [button_index]);


    return (
        <div ref={containerRef} className="animation-names-container">
            {names[buttonIndexReferences[button_index]].map((name, index) => {
                const position = getRandomPosition(index);
                const style = {
                    position: 'absolute',
                    left: `${position.left}px`,
                    top: `${position.top}px`,
                    animationDelay: `${(1 * index) + (names[buttonIndexReferences[button_index]].length * count)}s`,
                };
                return (
                    <span key={index} style={style} className={`artist-name`}>
                        {name}
                    </span>
                );
            })}
        </div>
    );
}

export default NamesAnimations;