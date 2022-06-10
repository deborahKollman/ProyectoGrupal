const initialState = {
    rdcr_tempVariables: [1,2,3,4,5,6],
    services: [],
    switchloading: false,
    profileUser: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
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
        case 'POST_PROFILEUSER':
            return {
                ...state,
                profileUser: [...action.payload]
            }
        default:
            return state;
    }
}

export default rootReducer;
