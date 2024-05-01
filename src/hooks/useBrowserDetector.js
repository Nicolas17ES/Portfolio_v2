import { useEffect, useState, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';


function useBrowserDetection() {
  const [browser, setBrowser] = useState('');
  const { dispatch, } = useContext(GlobalContext);
  useEffect(() => {
    
    const userAgent = window.navigator.userAgent;
    let detectedBrowser = '';

    if (userAgent.indexOf('Firefox') > -1) {
      detectedBrowser = 'Firefox';
    } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
      detectedBrowser = 'Opera';
    } else if (userAgent.indexOf('Trident') > -1) {
      detectedBrowser = 'Internet Explorer';
    } else if (userAgent.indexOf('Edge') > -1) {
      detectedBrowser = 'Edge';
    } else if (userAgent.indexOf('Chrome') > -1) {
      detectedBrowser = 'Chrome';
    } else if (userAgent.indexOf('Safari') > -1) {
      detectedBrowser = 'Safari';
    }

    dispatch({
        type: 'SET_BROWSER',
        payload: detectedBrowser
    })
  }, []);

  return browser;
}

export default useBrowserDetection;
