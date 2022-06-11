const initialState = {
  rdcr_categories: [],
  rdcr_tempVariables: [1, 2, 3, 4, 5, 6],
  Publications: [],
  switchloading: false,

  detail: {album: []},
  profileUser: [],
  categories: [],
  filteredCategories: [],
  publicationById: {},
  userId: {seller_opinions: []},
  user: {},
  users: [],
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (action.type) {
    case "JALZ_GET_CATEGORIES":
      return {
        ...state,
        rdcr_categories: payload,
      };
    case "TEMP_VARIABLES":
      return {
        ...state,
        rdcr_tempVariables: action.payload,
      };
    case "GET_PUBLICATIONS":
      return {
        ...state,
        Publications: action.payload,
      };
    case "GET_PUBLICATIONS_NAME":
      return {
        ...state,
        Publications: action.payload,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    case "GET_PUBLICATION_ID":
      return {
        ...state,
        publicationById: action.payload,
      };
    case "SWICH_LOADING":
      return {
        switchloading: true,
      };

    case "GET_BY_ID":
      let aux = action.payload;
      aux.date = aux.date.slice(0, 10);
      return {
        ...state,
        detail: aux,
      };
    case "POST_PROFILEUSER":
      return {
        ...state,
        profileUser: [...action.payload],
      };
    case "FILTER_CATEGORIES":
      let categoriesCopy = state.categories;
      let filtered =
        action.payload === "all"
          ? categoriesCopy
          : categoriesCopy.filter(
              (category) => category.name === action.payload,
            );
      if (filtered.length <= 0) {
        filtered = categoriesCopy;
      }
      return {
        ...state,
        filteredCategories: [...filtered],
      };
    case "GET_USER":
      return {
        ...state,
        user: payload,
      };
    case "GET_USER_BY_ID":
      
      
      return{
        ...state,
        userId: action.payload,

      }
      case "GET_USERS":
      
      
        return{
          ...state,
          users: action.payload,
  
        }





    default:
      return state;
  }
};

export default rootReducer;
