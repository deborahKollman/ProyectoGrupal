import { 
  TOGGLE, 
  GET_ALL_USERS,
  GET_USER_BY_ID,
  GET_ALL_CATEGORIES,
} from "./action";

const initialState = {
  rdcr_darkMode: false,
  rdcr_users: [],
  rdcr_user: {},
  rdcr_categories: [],
  rdcr_category: {},
};
const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { rdcr_darkMode } = state;
  switch (type) {
    case TOGGLE: {
      return {
        ...state,
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
    default: return state; 
  }
};

export default rootReducer;
