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

export const initialState = {
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
    animation_value: null,      
    display_body: false,      
    scroll_position: false,      
    animation_finished: false,      
    display_overlay: false,      
    display_image_overlay: false,      
    display_carousel: false,      
    carousel_index: null,      
    animation_text_started: null,      
    view_projects_cursor: false,      
    project_index_hovered: false,      
    change_slide: {value: 0, origin: null},      
    mouse_position:  { x:0, y: 0 },
    exit_component: null,      
    hide_loader: false,      
    navbar_active_index: null,      
    start_lateral_nav_animation: false,      
    title_animation_finshed: false,      
    display_resumes: false,      
    projects_resumes_animation_finished: false,      
    boxes_animations_finsished: false,      
    display_vide_popup: {index: null, value: null},      
    isMobile: false,      
    screenWidth: null,      
    hideNavBar: false,      
    displayHiddenNavBar: false,      
    displayMobileNavBar: false,      
    display_soundcloud_player: false,      
    browser: null,      
}
export const GlobalProvider = ({children}) => {
    

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
        animation_value: state.animation_value,
        display_body: state.display_body,
        scroll_position: state.scroll_position,
        animation_finished: state.animation_finished,
        display_overlay: state.display_overlay,
        display_image_overlay: state.display_image_overlay,
        display_carousel: state.display_carousel,
        carousel_index: state.carousel_index,
        animation_text_started: state.animation_text_started,
        view_projects_cursor: state.view_projects_cursor,
        project_index_hovered: state.project_index_hovered,
        mouse_position: state.mouse_position,
        change_slide: state.change_slide,
        exit_component: state.exit_component,
        hide_loader: state.hide_loader,
        navbar_active_index: state.navbar_active_index,
        start_lateral_nav_animation: state.start_lateral_nav_animation,
        title_animation_finshed: state.title_animation_finshed,
        display_resumes: state.display_resumes,
        projects_resumes_animation_finished: state.projects_resumes_animation_finished,
        boxes_animations_finsished: state.boxes_animations_finsished,
        display_vide_popup: state.display_vide_popup,
        isMobile: state.isMobile,
        screenWidth: state.screenWidth,
        hideNavBar: state.hideNavBar,
        displayHiddenNavBar: state.displayHiddenNavBar,
        displayMobileNavBar: state.displayMobileNavBar,
        display_soundcloud_player: state.display_soundcloud_player,
        browser: state.browser,
        dispatch,
    }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContext 