import { useState, useEffect, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';


function useScrollPosition() {
  const { dispatch } = useContext(GlobalContext);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    function handleScroll() {
      const position = window.scrollY;
      setScrollPosition(position);
      dispatch({
        type: 'SET_SCROLL_POSITION',
        payload: position,
      });
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPosition;
}

export default useScrollPosition;


