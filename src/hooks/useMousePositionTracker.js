import { useEffect, useContext } from 'react';
import GlobalContext from '../context/GlobalContext'; // Adjust the import path as needed

// Custom hook for tracking mouse position globally
const useMousePositionTracker = () => {
  const { dispatch } = useContext(GlobalContext);

  useEffect(() => {
    const updateCursorPosition = (event) => {
      dispatch({
        type: 'SET_MOUSE_POSITION',
        payload: { x: event.clientX, y: event.clientY},
      });
    };

    window.addEventListener('mousemove', updateCursorPosition);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('mousemove', updateCursorPosition);
    };
  }, [dispatch]); // Added dispatch to the dependency array for completeness, though it's likely stable
};

export default useMousePositionTracker;
