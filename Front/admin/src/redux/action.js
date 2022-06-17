import axios from "axios";

export const LIGHT = "LIGHT";
export const DARK = "DARK";
export const TOGGLE = "TOGGLE";
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER_BY_ID = "GET_USER_BY_ID";

// const URL = "http://localhost:3001/";

export const act_themeLight = () => {
  return {
    type: LIGHT,
  };
};
export const act_themeDark = () => {
  return {
    type: DARK,
  };
};
export const act_themeTogle = () => {
  return {
    type: TOGGLE,
  };
};

export const act_getAllUsers = () => {
  return async (dispatch) => {
    try {
      console.log("first");
      const { data } = await axios.get(`http://localhost:3001/users`);
      console.log("second", data);
      dispatch({
        type: GET_ALL_USERS,
        payload: data.users,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export function act_getUserById(pIdentity) {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/users/${pIdentity}`
      );
      dispatch({ 
        type: GET_USER_BY_ID, 
        payload: data.user 
      });
    } catch (error) {
      console.log(error);
    }
  };
}
