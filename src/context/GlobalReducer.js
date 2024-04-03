

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
import { initialState } from "./GlobalContext"

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
        case 'SET_CHANGE_SLIDE':
            return {
                ...state,
                change_slide: action.payload,
            }
        case 'SET_ACTIVE_SLIDER':
            return {
                ...state,
                slider_activated: action.payload,
            }
        case 'SET_ANIMATION_VALUE':
            return {
                ...state,
                animation_value: action.payload,
            }
        case 'SET_BODY':
            return {
                ...state,
                display_body: action.payload,
            }
        case 'SET_SCROLL_POSITION':
            return {
                ...state,
                scroll_position: action.payload,
            }
        case 'SET_ANIMATION_FINISHED':
            return {
                ...state,
                animation_finished: action.payload,
            }
        case 'SET_TEXT_ANIMATION':
            return {
                ...state,
                animation_text_started: action.payload,
            }
        case 'SET_OVERLAY':
            return {
                ...state,
                display_overlay: action.payload,
            }
        case 'SET_IMAGE_OVERLAY':
            return {
                ...state,
                display_image_overlay: action.payload,
            }
        case 'SET_CAROUSEL':
            return {
                ...state,
                display_carousel: action.payload,
            }
        case 'SET_CAROUSEL_INDEX':
            return {
                ...state,
                carousel_index: action.payload,
            }
        case 'SET_VIEW_PROJECTS_CURSOR':
            return {
                ...state,
                view_projects_cursor: action.payload,
            }
        case 'SET_PROJECT_INDEX_HOVERED':
            return {
                ...state,
                project_index_hovered: action.payload,
            }
        case 'SET_MOUSE_POSITION':
            return {
                ...state,
                mouse_position: action.payload,
            }
        case 'SET_EXIT_COMPONENT':
            return {
                ...state,
                exit_component: action.payload,
            }
        case 'SET_HIDE_LOADER':
            return {
                ...state,
                hide_loader: action.payload,
            }
        case 'SET_NAVBAR_INDEX':
            return {
                ...state,
                navbar_active_index: action.payload,
            }
        case 'SET_START_LATERAL_NAV_ANIMATION':
            return {
                ...state,
                start_lateral_nav_animation: action.payload,
            }
        case 'SET_TITLE_ANIMATION_FINISHED':
            return {
                ...state,
                title_animation_finshed: action.payload,
            }
            case 'RESET_STATE':
                return {
                  ...initialState,
                  // Preserva el valor actual de display_header (u otros que necesites mantener)
                  display_header: state.display_header,
                };

        default: 
            return state;
    }
}

export default globalReducer