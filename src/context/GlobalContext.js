/**
 * @file context/GlobalContext.js
 * @description Global context and provider for managing app-wide state.
 */

import {createContext, useReducer} from 'react'
import globalReducer from './GlobalReducer'



const GlobalContext = createContext();

// display_header: This variable controls the display of the header in your app. When display_header is true, the header is displayed; otherwise, it is hidden.

// lateral_navbar: This variable manages the visibility of the lateral (side) navigation bar. When lateral_navbar is true, the lateral navigation bar is displayed; otherwise, it is hidden.

// navbar_location: This variable keeps track of the current location or route in your app. It is used to determine the active location for navigation highlighting.

// hide_nav: This variable controls whether the navigation bar should be hidden or displayed. When hide_nav is true, the navigation bar is hidden; otherwise, it is displayed.

// shrink_body: This variable is used to control the shrinking effect on the app's body. When shrink_body is true, the body of the app is shrunk; otherwise, it remains at its normal size.

export const GlobalProvider = ({children}) => {
    const initialState = {
        display_header: false,
        lateral_navbar: false,
        navbar_location: '',
        hide_nav: false,
        shrink_body: false,
        button_index: null,
        display_mouse_tracker: false,
        button_state: null,
        slide_active_index: null,      
        slider_activated: false,      
    }

    const [state, dispatch] = useReducer(globalReducer, initialState)

    return <GlobalContext.Provider value={{
        display_header: state.display_header,
        lateral_navbar: state.lateral_navbar,
        navbar_location: state.navbar_location,
        hide_nav: state.hide_nav,
        shrink_body: state.shrink_body,
        button_index: state.button_index,
        display_mouse_tracker: state.display_mouse_tracker,
        button_state: state.button_state,
        slide_active_index: state.slide_active_index,
        slider_activated: state.slider_activated,
        dispatch,
    }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContext 