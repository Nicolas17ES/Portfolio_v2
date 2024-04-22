// hooks/useIsMobile.js
import { useEffect, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';

function useIsMobile() {
    const { dispatch } = useContext(GlobalContext);

    useEffect(() => {
        // Function to update the mobile state in the context
        const updateMobileState = () => {
            dispatch({
                type: 'SET_IS_MOBILE',
                payload: window.innerWidth < 520
            });
        };

        // Call once on mount to set the initial state based on current window size
        updateMobileState();

        // Set up the event listener for resizing
        window.addEventListener('resize', updateMobileState);

        // Cleanup function to remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateMobileState);
        };
    }, [dispatch]); // Dependency on `dispatch` to ensure it’s up-to-date if context changes

    // No need to return anything, as this hook is only for setting global state
}

export default useIsMobile;
