import { 
  LIGHT, 
  DARK, 
  TOGGLE, 
  GET_ALL_USERS,
  GET_USER_BY_ID,
  GET_ALL_CATEGORIES
} from "./action";

const initialState = {
  rdcr_darkMode: false,
  rdcr_users: [],
  rdcr_user: {},
  rdcr_categories: [],
};
const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { rdcr_darkMode } = state;
  switch (type) {
    case LIGHT: {
      console.log("LIGHT");
      return {
        rdcr_darkMode: false,
      };
    }
    case DARK: {
      return {
        rdcr_darkMode: true,
      };
    }
    case TOGGLE: {
      return {
        rdcr_darkMode: !rdcr_darkMode,
      };
    }
    case GET_ALL_USERS: {
      return {
        ...state,
        rdcr_users: payload,
      };
    }
    case GET_USER_BY_ID: {
      return {
        ...state,
        rdcr_user: payload,
      };
    }
    case GET_ALL_CATEGORIES: {
      return {
        ...state,
        rdcr_categories: payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default rootReducer;
