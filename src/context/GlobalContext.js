import {createContext, useReducer} from 'react'
import globalReducer from './GlobalReducer'



const GlobalContext = createContext();

export const GlobalProvider = ({children}) => {
    const initialState = {
        data: [],
    }
    const [state, dispatch] = useReducer(GlobalReducer, initialState)

    return <GlobalContext.Provider value={{
        data: state.data,
        dispatch,
    }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalContext 