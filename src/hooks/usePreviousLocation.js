import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

function usePreviousLocation() {
  const [prevLocation, setPrevLocation] = useState();
  const location = useLocation();

  useEffect(() => {
    // Update the state to store the current location as the previous location
    setPrevLocation(location.pathname);
  }, [location]); // Re-run the effect only if the location changes

  return prevLocation;
}

export default usePreviousLocation;
