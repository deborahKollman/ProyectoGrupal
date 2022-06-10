const axios = require("axios");

export const POST_PUBLICATION = "POST_PUBLICATION";
export const JALZ_GET_CATEGORIES = "JALZ_GET_CATEGORIES";
export const TEMP_VARIABLES = "TEMP_VARIABLES";
export const GET_CATEGORIES = "GET_CATEGORIES";
export const GET_SERVICES = "GET_SERVICES";
export const  GET_BY_ID = 'GET_BY_ID';
const URL = `http://localhost:3001`;

export const createPublication = (pObjData) => {
  return async () => {
    try {
      const response = await axios.post(`${URL}/publications`, pObjData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      return response;
    } catch (e) {
      console.log(e.message);
    }
  };
};

export const jalz_getAllCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:3001/categories`);
      dispatch({
        type: JALZ_GET_CATEGORIES,
        payload: data,
      });
    } catch (error) {
      return error.message;
    }
  };
};

export const getAllServices = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}/cat_services`);
      dispatch({
        type: TEMP_VARIABLES,
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};


export const getById = (id) => {
   
    return async (dispatch) => {
         const publi = await axios.get(`${URL}/publications/${id}`);
           
         dispatch({
            
            type: GET_BY_ID,
            payload: publi.data,
         })

    }

};






export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const json = axios("urldementira");
      return dispatch({ type: "GET_CATEGORIES", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//simulando la accion para hacer un post a la ruta y agregar informacion del usuario creado
export const postProfileUser = (input) => {
  return async (dispatch) => {
    try {
      let profileUser = await axios.post("unaurldementira", input);
      return dispatch({ type: "POST_PROFILEUSER", profileUser });
    } catch (error) {
      console.log(error);
    }
  };
};

//simulando la accion para el filtro por categorias
export function filterCategories(payload) {
  return { type: "FILTER_CATEGORIES", payload };
}

//Traer All services
// export function getServices(){
//     return async (dispatch)=>{
//         try{
//         const serv = await axios.get(`${URL}/services`)
//         dispatch({
//             type:GET_SERVICES,
//             payload:response.data
//         });
//     } catch (error){
//         console.log("SERVICES NO FOUND")
//     }
//     }
// }

// export const swich_loading = (e) => {

//     return ({ type: SWICH_LOADING, payload: e  });

//         };
