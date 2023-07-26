import {createContext, useReducer} from 'react'
import globalReducer from './GlobalReducer'



const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const initialState = {
        display_header: false,
        lateral_navbar: false,
        navbar_location: '',
        hide_nav: false,
        shrink_body: false,
        
    }
    const [state, dispatch] = useReducer(globalReducer, initialState)

    return <GlobalContext.Provider value={{
        display_header: state.display_header,
        lateral_navbar: state.lateral_navbar,
        navbar_location: state.navbar_location,
        hide_nav: state.hide_nav,
        shrink_body: state.shrink_body,
        dispatch,
    }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContext 