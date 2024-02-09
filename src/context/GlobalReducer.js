

/**
 * @file context/globalReducer.js
 * @description Reducer function for managing global state.
 */

/**
 * Reducer function for handling actions and updating global state.
 * @param {Object} state - The current global state.
 * @param {Object} action - An action object with a type and payload.
 * @returns {Object} - The new global state.
 */

const globalReducer = (state, action) => {
    switch(action.type){
        case 'SET_HEADER':
            return {
                ...state,
                display_header: action.payload,
            }
        case 'SET_LATERAL_NAV':
            return {
                ...state,
                lateral_navbar: action.payload,
            }
        case 'SET_NAV_LOCATION':
            return {
                ...state,
                navbar_location: action.payload,
            }
        case 'SET_HIDE_NAV':
            return {
                ...state,
                hide_nav: action.payload,
            }
        case 'SET_BODY_SHRINK':
            return {
                ...state,
                shrink_body: action.payload,
            }
        case 'SET_BUTTON_INDEX':
            return {
                ...state,
                button_index: action.payload,
            }
        case 'SET_CLICKED_BUTTON':
            return {
                ...state,
                button_state: action.payload,
            }
        case 'SET_DISPLAY_MOUSETRACKER':
            return {
                ...state,
                display_mouse_tracker: action.payload,
            }
        case 'SET_SLIDE_ACTIVE_INDEX':
            return {
                ...state,
                slide_active_index: action.payload,
            }
        case 'SET_ACTIVE_SLIDER':
            return {
                ...state,
                slider_activated: action.payload,
            }
        default: 
            return state;
    }
}

export default globalReducer