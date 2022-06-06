import {  
    TEMP_VARIABLES
} from "./action";

const initialState = {
    rdcr_tempVariables: [1,2,3,4,5,6],
}

const rootReducer = (state = initialState, action) => {

    const { type, payload } = action;

    switch (type){
        case TEMP_VARIABLES:
            return {
                ...state,
                rdcr_tempVariables: payload,
            }
        default:
            return state;
    }
}

export default rootReducer;
