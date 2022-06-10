import {  
    GET_CATEGORIES
} from "./action";

const initialState = {
    rdcr_categories: [],
    rdcr_tempVariables: [1,2,3,4,5,6],
    services: [],
    switchloading: false,
}

const rootReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (action.type){
        case GET_CATEGORIES:
            return {
                ...state,
                rdcr_categories: payload,
            }
        case 'TEMP_VARIABLES':
            return {
                ...state,
                rdcr_tempVariables: action.payload,
            }
        case 'GET_SERVICES':
            return{
                ...state,
                services: action.payload,
            }
        case 'SWICH_LOADING':
            return{
            switchloading: true,  
            }
        default:
            return state;
    }
}

export default rootReducer;
