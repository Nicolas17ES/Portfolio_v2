import { useEffect } from 'react';

function useBodyAnimation(bodyRef, navbar_location, pathname, navigate) {

  useEffect(() => {
    let timeoutId;
    if (bodyRef.current && navbar_location !== pathname && navbar_location !== '') {
      bodyRef.current.classList.add('shrink-body');

      timeoutId = setTimeout(() => {
        if (bodyRef.current) {
          bodyRef.current.classList.remove('shrink-body');
        }
        navigate('/' + navbar_location);
      }, 600);
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [navbar_location, navigate, pathname]);
}

export default useBodyAnimation;

