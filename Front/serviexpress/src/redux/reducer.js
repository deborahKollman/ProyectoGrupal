const initialState = {
    rdcr_tempVariables: [1,2,3,4,5,6],
    Publications: [],
    switchloading: false,
    profileUser: [],
    categories: [],
    filteredCategories: [],
    publicationById: {}

}

const rootReducer = (state = initialState, action) => {
    switch (action.type){
        case 'TEMP_VARIABLES':
            return {
                ...state,
                rdcr_tempVariables: action.payload,
            }
        case 'GET_PUBLICATIONS':
            return{
            ...state,
            Publications: action.payload,
                }
                case 'GET_PUBLICATIONS_NAME':
                    return{
                    ...state,
                    Publications: action.payload,
                        }
        case 'GET_CATEGORIES': 
            return {
                ...state,
                categories: action.payload
            }
            case 'GET_PUBLICATION_ID': 
            return {
                ...state,
                publicationById: action.payload
            }
        case 'SWICH_LOADING':
            return{
                switchloading: action.payload,  
                }
        case 'POST_PROFILEUSER':
            return {
                ...state,
                profileUser: [...action.payload]
            }
        case 'FILTER_CATEGORIES':
            let categoriesCopy = state.categories
            let filtered = 
                action.payload === 'all' 
                ? categoriesCopy
                : categoriesCopy.filter((category) => category.name === action.payload)
            if (filtered.length <= 0) {filtered = categoriesCopy}
            return {
                ...state,
                filteredCategories: [...filtered]
            }
        default:
            return state;
    }
}

export default rootReducer;
