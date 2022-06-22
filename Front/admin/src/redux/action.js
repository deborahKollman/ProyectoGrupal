import axios from "axios";

export const GET_ORDERS = "GET_ORDERS";


 
 const URL = "http://localhost:3001";
 
export const act_themeTogle = () => {
  return {
    type: "TOGGLE",
  };
};

export const act_getAllUsers = () => {
  return async (dispatch) => {
    try {
      console.log("first");
      const { data } = await axios.get(`/users`);
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
        `/users/${pIdentity}`
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
    const { data } = await axios.get( `/categories/${pIdentity}` );
    return data
  } catch (error) {console.log(error);}
}

export function act_getAllCategories() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/categories/only`
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
        `/categories`,
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
        `/categories/${pIdentity}`
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
      const { data } = await axios.get(`/services`);
      dispatch({
        type: "GET_ALL_SERVICES",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const act_filterServicesByCategory = (pObj) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(
        `/services/category/${pObj.id}`
      );
      //add foreign key to services
      data.forEach((pI) => {
        pI.categories = [pObj];
      });

      dispatch({
        type: "FILTER_SERVICES_BY_CATEGORY",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
}

export const act_clearServices = () => {
  return {
    type: "CLEAR_SERVICES",
  };
}

export function getOrders(){

    return async (dispatch) => {
      try {
         const {data} = await axios.get(`${URL}/contracts`);

         dispatch({
            type: GET_ORDERS,
            payload: data,
         })

        
      } catch (error) {
          console.log(error);
      }

    }


};