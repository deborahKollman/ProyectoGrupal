import { JALZ_GET_CATEGORIES, GET_USER } from "./action";

const initialState = {
  rdcr_categories: [],
  rdcr_tempVariables: [1, 2, 3, 4, 5, 6],
  services: [],
  switchloading: false,

  detail: {},
  profileUser: [],
  categories: [],
  filteredCategories: [],

  user: {},
};

const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case JALZ_GET_CATEGORIES:
      return {
        ...state,
        rdcr_categories: payload,
      };
    case "TEMP_VARIABLES":
      return {
        ...state,
        rdcr_tempVariables: action.payload,
      };
    case "GET_SERVICES":
      return {
        ...state,
        services: action.payload,
      };
    case "GET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
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
    case GET_USER:
      return {
        ...state,
        user: payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
