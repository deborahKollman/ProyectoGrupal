import axios from "axios";
 
// const URL = "http://localhost:3001/";
 
export const act_themeTogle = () => {
  return {
    type: "TOGGLE",
  };
};

export const act_getAllUsers = () => {
  return async (dispatch) => {
    try {
      console.log("first");
      const { data } = await axios.get(`http://localhost:3001/users`);
      console.log("second", data);
      dispatch({
        type: "GET_ALL_USERS",
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
        type: "GET_USER_BY_ID", 
        payload: data.user 
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export async function act_getOneCategory (pIdentity) {
  try {
    const { data } = await axios.get( `http://localhost:3001/categories/${pIdentity}` );
    return data
  } catch (error) {console.log(error);}
}

export function act_getAllCategories() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/categories/only`
      );
      dispatch({ 
        type: "GET_ALL_CATEGORIES", 
        payload: data
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const act_postCategory = (oCategory) => {
  return async () => {
    try {
      const data = await axios.post(
        `http://localhost:3001/categories`,
        oCategory
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}

export const act_deleteCategory = (pIdentity) => {
  return async () => {
    try {
      const data = await axios.delete(
        `http://localhost:3001/categories/${pIdentity}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
}


export const act_getAllServices = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://localhost:3001/services`);
      dispatch({
        type: "GET_ALL_SERVICES",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};