import { LIGHT, DARK, TOGGLE } from "./action";
const initialState = {
  rdcr_darkMode: false,
};
const rootReducer = (state = initialState, action) => {
  const { type } = action;
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
    default: {
      return state;
    }
  }
};

export default rootReducer;
