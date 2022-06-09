const initialState = {
    rdcr_tempVariables: [1,2,3,4,5,6],
    services: [],
    switchloading: false,
}

const rootReducer = (state = initialState, action) => {

    switch (action.type){
        case 'TEMP_VARIABLES':
            return {
                ...state,
                rdcr_tempVariables: payload,
            }
        case 'GET_SERVICES':
            return{
                ...state,
                services: action.payload,
            }
<<<<<<< HEAD
        // case SWITCH_LOADING:
        //     return{
        //     switchloading: true,  
        //     }
=======
        case 'SWICH_LOADING':
            return{
            switchloading: true,  
            }
>>>>>>> 4a6bbc9a7b83931156725e6cf099d54eee9c12f3
        default:
            return state;
    }
}

export default rootReducer;
