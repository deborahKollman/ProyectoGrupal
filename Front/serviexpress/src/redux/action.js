import axios from "axios";
import swal from "sweetalert"; 
export const LOGOUT_SESSION = "LOGOUT_SESSION";
export const AUTHENTICATE = "AUTHENTICATE";
const URL = `http://localhost:3001`;

// Para desloguearse
export const act_logout = () => {
  return { type: LOGOUT_SESSION}
}

// Para simular un login
export const fakeLogin = (pO_User) => {
  console.log(pO_User);
  return async (dispatch) => {
    const response = {
      "user":{
        "id":1,
        "email": "test@mail.com",
        "role": "admin",
        "avatar": "https://i.pravatar.cc/300?img=1",
        "createAt": "2020-01-01",
      },
      "login": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1MzI1NzYxMX0.ddFBn_SeeWJJGxO303d8lRl58P4x6WADvOeTXzfVj9Q"
    }
    dispatch({
      type: AUTHENTICATE,
      payload: response
    });
  };
};

// Para traer un usuario
export const getUser = (pO_User) => {
  return async (dispatch) => {
    const { data } = await axios.get("http://localhost:3001/login/success", pO_User, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    console.log(data,"ACTIONNNNNNNNNNNNN");
    dispatch({
      type: "GET_USER",
      payload: data,
    });
  };
};

// Para traer un usuario, esta repetida
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
      type: "GET_USER",
      payload: data,
    });
  };
};

// Para cuando se registra un usuario
export const registerUser = (user) => {
  return (dispatch) => {
    dispatch({
      type: "REGISTER_USER",
      payload: user
    })
  }
}

// Action para crear una publicacion
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

// Action creada por James
export const jalz_getAllCategories = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`http://127.0.0.1:3001/categories`);
      dispatch({
        type: "JALZ_GET_CATEGORIES",
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
      type: "GET_BY_ID",
      payload: publi.data,
    });
  };
};


//simulando la accion para el filtro por categorias
export function filterCategories(payload) {
  return { type: "FILTER_CATEGORIES", payload };
}

// Trae todas las categorias
export const getAllCategories = () => {
  return async (dispatch) => {
    try {
      const json = await axios.get(`${URL}/categories`);
       dispatch({ type: "GET_CATEGORIES", payload: json.data });
    } catch (error) {
      console.log(error);
    }
  };
};

//simulando la accion para hacer un post a la ruta y agregar informacion del usuario creado
export const postProfileUser = (input) => {
  return async (dispatch) => {
    try {
      let profileUser = await axios.post(`${URL}/users/`, input);
      return dispatch({ type: "POST_PROFILEUSER", profileUser });
    } catch (error) { console.log(error)}
  };
};

// Action para utilizar los loaders
export const swich_loading = (e) => {
  return { type: "SWICH_LOADING", payload: e };
};

//Nos trae las publicaciones para renderizar en el home
export function getPublications() {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:3001/publications");
      dispatch({
        type: "GET_PUBLICATIONS",
        payload: response.data,
      });
    } catch (error) { console.log("SERVICES NO FOUND")}
  };
}

// Nos trae el detalle de una publicacion
export const getPublicationId = (id) => {
  return async (dispatch) => {
    try {
      const publication = await axios.get(
        `http://localhost:3001/publications/${id}`,
      );
      return dispatch({ type: "GET_PUBLICATION_ID", payload: publication.data });
    } catch (e) {
      console.log(e);
      return dispatch({ type: "GET_PUBLICATION_ID", payload: [] });
    }
  };
};

// Para el search bar, nos trae la publicacion buscada por nombre
export function getPublicationsName(name){
  return function(dispatch){    
          axios.get(`http://localhost:3001/publications?title=` + name) 
                  .then(responese=>{return dispatch({
                      type: "GET_PUBLICATIONS_NAME", 
                      payload: responese.data
                  })})
                  .catch(function(){
                   ( swal({
                      title: "ERROR",
                      text: "Not Found",
                      icon: "https://filestore.community.support.microsoft.com/api/images/ext?url=https%3A%2F%2Fanswersstaticfilecdnv2.azureedge.net%2Fstatic%2Fimages%2Fimage-not-found.jpg",
                      dangerMode: true,
                    }))})
                  
              }}


// Busca un usuario en particular
export function getUserById(id) {
    return async (dispatch) => {
        try {     
            let data = await axios.get('http://localhost:3001/users/'+id);          
            dispatch({type: "GET_USER_BY_ID", payload: data.data.user});     
        } catch (error) {console.log(error)}
    }
};

// Trae todos los usuarios
export function getUsers() { 
  return async (dispatch) => {
    try { 
        let users = await axios.get('http://localhost:3001/users');   
        dispatch({type: "GET_USERS", payload: users.data.users});   
    } catch (error) {console.log(error);}
  }
};

export function getPublicationsByCategory(a) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3001/publications?cat_id=` + a);
    //  console.log(response.data)
      dispatch({
        type: "GET_PUBLICATIONS_BY_CATEGORIES",
        payload: response.data,
      });
    } catch (error) {
      console.log("SERVICES NO FOUND");
    }
  };
}