const GlobalReducer = (state, action) => {
    switch(action.type){
        case 'GET_DATA':
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        default: 
            return state;
    }
}

export default dataReducer