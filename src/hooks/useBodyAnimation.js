import { useEffect } from 'react';

/**
 * Custom React hook for animating a page body element during navigation.
 * 
 * @param {object} bodyRef - A React ref object attached to the DOM element to be animated.
 * @param {string} navbar_location - The target navigation path derived from the navbar.
 * @param {string} pathname - The current location's pathname.
 * @param {function} navigate - Function from React Router for programmatically navigating to a new route.
 * 
 * This hook is designed to be used in components that involve navigation and require an animation effect
 * on the body element during the navigation process. It listens for changes in the navbar location,
 * and if the current pathname is different from the navbar location and is not an empty string,
 * it triggers an animation on the body element.
 * 
 * The animation is achieved by adding a CSS class to the body element that applies a 'shrink' effect.
 * After a specified delay (600ms), the animation class is removed, and a navigation action is performed
 * to the new route. The delay allows the animation to complete before the route change occurs.
 * 
 * If the component unmounts before the timeout completes, the timeout is cleared to prevent
 * memory leaks and potential bugs from the callback executing after the component has unmounted.
 */
function useBodyAnimation(bodyRef, navbar_location, pathname, navigate) {
  useEffect(() => {
    let timeoutId;
    if (bodyRef.current && navbar_location !== pathname && navbar_location !== '') {
      // Add a class to trigger the shrink animation
      bodyRef.current.classList.add('shrink-body');

      // Set a timeout for the duration of the animation
      timeoutId = setTimeout(() => {
        // Ensure the ref is still valid
        if (bodyRef.current) {
          // Remove the animation class
          bodyRef.current.classList.remove('shrink-body');
        }
        // Navigate to the new route
        navigate('/' + navbar_location);
      }, 600); // Duration of the animation
    }

    // Cleanup function to clear the timeout
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [navbar_location, navigate, pathname]); // Depend on navbar_location, navigate, and pathname
}

export default useBodyAnimation;

