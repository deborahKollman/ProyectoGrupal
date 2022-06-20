 
const initialState = {
  rdcr_darkMode: false,
  rdcr_users: [],
  rdcr_user: {},
  rdcr_categories: [],
  rdcr_category: {},
  rdcr_services: [],
};
const rootReducer = (state = initialState, action) => {
  const { type, payload } = action;
  const { rdcr_darkMode } = state;
  switch (type) {
    case "TOGGLE": {
      return {
        ...state,
        rdcr_darkMode: !rdcr_darkMode,
      };
    }
    case "GET_ALL_USERS": {
      return {
        ...state,
        rdcr_users: payload,
      };
    }
    case "GET_USER_BY_ID": {
      return {
        ...state,
        rdcr_user: payload,
      };
    }
    case "GET_ALL_CATEGORIES": {
      return {
        ...state,
        rdcr_categories: payload,
      };
    }
    case "GET_ALL_SERVICES": {
      return {
        ...state,
        rdcr_services: payload,
      };
    }
    default: return state; 
  }
};

export default rootReducer;
