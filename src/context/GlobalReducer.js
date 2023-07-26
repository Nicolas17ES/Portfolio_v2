
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
        default: 
            return state;
    }
}

export default globalReducer