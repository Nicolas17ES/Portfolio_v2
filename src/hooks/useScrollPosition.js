import { useState, useEffect, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function useScrollPosition(containerRef) {
  const { dispatch } = useContext(GlobalContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    if (!containerRef.current) return;

    function handleScroll() {
      const position = containerRef.current.scrollTop;
      setScrollPosition(position);
      dispatch({
        type: 'SET_SCROLL_POSITION',
        payload: position,
      });
    }

    containerRef.current.addEventListener('scroll', handleScroll);

    return () => {
      containerRef.current.removeEventListener('scroll', handleScroll);
    };
  }, [containerRef, dispatch]);

  return scrollPosition;
}

export default useScrollPosition;

