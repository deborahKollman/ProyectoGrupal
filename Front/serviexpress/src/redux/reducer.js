import {  
    GET_SERVICES,
    TEMP_VARIABLES
} from "./action";

const initialState = {
    rdcr_tempVariables: [1,2,3,4,5,6],
    services: [],
    switchloading: false,
}

const rootReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type){
        case TEMP_VARIABLES:
            return {
                ...state,
                rdcr_tempVariables: payload,
            }
        case GET_SERVICES:
            return{
                ...state,
                services: action.payload,
            }
        case SWITCH_LOADING:
            return{
            switchloading: true,  
            }
        default:
            return state;
    }
}

export default rootReducer;
