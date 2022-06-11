import axios from "axios";
 import swal from "sweetalert"; 
const GET_PUBLICATIONS = "GET_PUBLICATIONS";
const SWICH_LOADING = "SWICH_LOADING";
const GET_PUBLICATION_ID = "GET_PUBLICATION_ID";
const GET_PUBLICATIONS_NAME = "GET_PUBLICATIONS_NAME";
const POST_PUBLICATION = "POST_PUBLICATION";
const JALZ_GET_CATEGORIES = "JALZ_GET_CATEGORIES";
const TEMP_VARIABLES = "TEMP_VARIABLES";
const GET_CATEGORIES = "GET_CATEGORIES";
const GET_SERVICES = "GET_SERVICES";
const GET_USER = "GET_USER";
const GET_BY_ID = "GET_BY_ID";
const URL = `http://localhost:3001`;
const GET_USER_BY_ID = "GET_USER_BY_ID";
const GET_USERS = "GET_USERS";





export const getUser = () => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/login/success", {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });

    dispatch({
      type: GET_USER,
      payload: data,
    });
  };
};
export const getUserr = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post("http://localhost:3001/login", user, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    dispatch({
      type: GET_USER,
      payload: data,
    });
  };
};

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

export const getById = (id) => {
  return async (dispatch) => {
    const publi = await axios.get(`${URL}/publications/${id}`);

    dispatch({
      type: GET_BY_ID,
      payload: publi.data,
    });
  };
};

//simulando la accion para hacer un post a la ruta y agregar informacion del usuario creado

//simulando la accion para el filtro por categorias
export function filterCategories(payload) {
  return { type: "FILTER_CATEGORIES", payload };
}

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

export const swich_loading = (e) => {
  return { type: SWICH_LOADING, payload: e };
};

export function getPublications() {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/publications");
      dispatch({
        type: GET_PUBLICATIONS,
        payload: response.data,
      });
    } catch (error) {
      console.log("SERVICES NO FOUND");
    }
  };
}

export const getPublicationId = (id) => {
  return async (dispatch) => {
    try {
      const publication = await axios.get(
        `http://localhost:3001/publications/${id}`,
      );
      return dispatch({ type: GET_PUBLICATION_ID, payload: publication.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: GET_PUBLICATION_ID, payload: [] });
    }
  };
};

export function getPublicationsName(name) {
  return function (dispatch) {
    axios
      .get(`http://localhost:3001/publications?title=` + name)
      .then((responese) => {
        return dispatch({
          type: GET_PUBLICATIONS_NAME,
          payload: responese.data,
        });
      })

       .catch(function () {
        swal({
          title: "ERROR",
          text: "Recipe not found",
          icon: "https://filestore.community.support.microsoft.com/api/images/ext?url=https%3A%2F%2Fanswersstaticfilecdnv2.azureedge.net%2Fstatic%2Fimages%2Fimage-not-found.jpg",
          dangerMode: true,
        });
      }); 
  };
}


export function getUserById(id) {
    return async (dispatch) => {
        try {
          
            let data = await axios.get('http://localhost:3001/users/'+id);
            
            dispatch({type: GET_USER_BY_ID, payload: data.data.user});
          
        } catch (error) {
          console.log(error);
        }

    }



};


export function getUsers() {
  
  return async (dispatch) => {
    try {
      
        let users = await axios.get('http://localhost:3001/users');
        
        dispatch({type: GET_USERS, payload: users.data.users});
      
    } catch (error) {
      console.log(error);
    }

}



};