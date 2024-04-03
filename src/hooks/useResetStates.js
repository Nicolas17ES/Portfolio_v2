import { useEffect, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import GlobalContext from '../context/GlobalContext';

export default function useResetStates() {
  const { dispatch } = useContext(GlobalContext);
  const location = useLocation();

  const staticRoutes = [
    '/about',
    '/interviews',
    '/projects', 
    '/music',
    '/contact',
  ];


  useEffect(() => {
    const isStaticRouteMatched = staticRoutes.some(route => location.pathname === route);

    const isProjectViewRoute = location.pathname.startsWith('/projects/view/');

    if (isStaticRouteMatched || isProjectViewRoute) {
      dispatch({ type: 'SET_LATERAL_NAV', payload: true});
      dispatch({ type: 'SET_HEADER', payload: true});
      dispatch({type: 'SET_ANIMATION_VALUE', payload: null})
      dispatch({type: 'SET_NAV_LOCATION', payload: location.pathname.slice(1)});
      dispatch({ type: 'SET_TEXT_ANIMATION', payload: true});
      dispatch({type: 'SET_CLICKED_BUTTON', payload: null,});
      dispatch({ type: 'SET_BUTTON_INDEX', payload: null });
      dispatch({ type: 'SET_HIDE_LOADER', payload: true});
    }

  }, []); 
}
