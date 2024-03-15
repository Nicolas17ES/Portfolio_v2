import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useResetScroll = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
};

export default useResetScroll;