import axios from "axios";
import swal from "sweetalert";
export const LOGOUT_SESSION = "LOGOUT_SESSION";
export const AUTHENTICATE = "AUTHENTICATE";
export const ADD_TO_FAVORITES = "ADD_TO_FAVORITES";
export const GET_FAVORITES = "GET_FAVORITES";
export const REMOVE_FAVORITES = "REMOVE_FAVORITES";
export const GET_MERCADOPAGO = "GET_MERCADOPAGO";
const URL = `http://localhost:3001`;

export const types = {
  ADD_TO_CART: "ADD_TO_CART",
  REMOVE_ONE_FROM_CART: "REMOVE_ONE_FROM_CART",
  REMOVE_ALL_FROM_CART: "V",
  CLEAR_CART: "CLEAR_CART",
};

export const myLocalStorage = () => {
  let productsInLocalStorage = window.localStorage.getItem("service");
  productsInLocalStorage = JSON.parse(productsInLocalStorage);
  console.log(productsInLocalStorage);
  return productsInLocalStorage;
};

// Para desloguearse
export const act_logout = () => {
  return (dispatch) => {
    dispatch({
      type: LOGOUT_SESSION,
    });
  };
};

// Para simular un login
export const fakeLogin = (pO_User) => {
  return async (dispatch) => {
    const response = {
      user: {
        id: 1,
        email: "test@mail.com",
        role: "admin",
        avatar: "https://i.pravatar.cc/300?img=1",
        createAt: "2020-01-01",
      },
      login:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTY1MzI1NzYxMX0.ddFBn_SeeWJJGxO303d8lRl58P4x6WADvOeTXzfVj9Q",
    };
    dispatch({
      type: AUTHENTICATE,
      payload: response,
    });
  };
};

// Para traer un usuario
export const getUser = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`/login`, {
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

// Para traer un usuario, esta repetida
export const getUserr = (user) => {
  return async (dispatch) => {
    const { data } = await axios.post("/login", user, {
      withCredentials: true,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
    if (data.message) {
      dispatch({
        type: "GET_USER_ERROR",
        payload: data.message,
      });
    } else {
      dispatch({
        type: "GET_USER",
        payload: data,
      });
    }
  };
};

// Para cuando se registra un usuario
export const registerUser = (user) => {
  return async (dispatch) => {
    try {
      const { email, password } = user;
      const { data } = await axios.post("/users", {
        email,
        password,
      });
      dispatch({
        type: "REGISTER_USER",
        payload: "Usuario registrado correctamente", // mandar este mensaje por la ruta de users
      });
    } catch (error) {
      dispatch({
        type: "REGISTER_USER_ERROR",
        payload: error.response.data,
      });
    }
  };
};

// Action para crear una publicacion
export const createPublication = (pObjData) => {
  return async () => {
    try {
      const response = await axios.post(`/publications`, pObjData, {
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
      const { data } = await axios.get(`/categories`);
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
    const publi = await axios.get(`/publications/${id}`);
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
      const json = axios.get(`/categories`);
      return dispatch({
        type: "GET_CATEGORIES",
        payload: json.data.map((el) => el.name),
      });
    } catch (error) {
      console.log(error);
    }
  };
};

//simulando la accion para hacer un post a la ruta y agregar informacion del usuario creado
export const postProfileUser = (input) => {
  return async (dispatch) => {
    try {
      let profileUser = await axios.post(`/users/`, input);
      return dispatch({ type: "POST_PROFILEUSER", profileUser });
    } catch (error) {
      console.log(error);
    }
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
      const response = await axios.get("/publications");
      dispatch({
        type: "GET_PUBLICATIONS",
        payload: response.data,
      });
    } catch (error) {
      console.log("SERVICES NO FOUND");
    }
  };
}

// Nos trae el detalle de una publicacion
export const getPublicationId = (id) => {
  return async (dispatch) => {
    try {
      const publication = await axios.get(`/publications/${id}`);
      return dispatch({
        type: "GET_PUBLICATION_ID",
        payload: publication.data,
      });
    } catch (e) {
      console.log(e);
      return dispatch({ type: "GET_PUBLICATION_ID", payload: [] });
    }
  };
};

// Para el search bar, nos trae la publicacion buscada por nombre
export function getPublicationsName(name) {
  return function (dispatch) {
    axios
      .get(`/publications?title=` + name)
      .then((responese) => {
        dispatch({
          type: "GET_PUBLICATIONS_NAME",
          payload: responese.data,
        });
      })
      .catch(function () {
        swal({
          title: "ERROR",
          text: "Not Found",
          icon: "https://filestore.community.support.microsoft.com/api/images/ext?url=https%3A%2F%2Fanswersstaticfilecdnv2.azureedge.net%2Fstatic%2Fimages%2Fimage-not-found.jpg",
          dangerMode: true,
        });
      });
  };
}

// Busca un usuario en particular
export function getUserById(id) {
  return async (dispatch) => {
    try {
      let data = await axios.get("/users/" + id);
      dispatch({ type: "GET_USER_BY_ID", payload: data.data.user });
    } catch (error) {
      console.log(error);
    }
  };
}

// Trae todos los usuarios
export function getUsers() {
  return async (dispatch) => {
    try {
      let users = await axios.get("/users");
      dispatch({ type: "GET_USERS", payload: users.data.users });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getPublicationsByCategory(a) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/publications?cat_id=` + a);
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

//FUNCION PARA AGREGAR A FAV
export function addToFavorites(user, publication) {
  return async (dispatch) => {
    try {
      await axios.put(`/users/${user}/favorites`, publication);
      let fav = await axios.get(`/users/${user}/favorites`);

      dispatch({
        type: ADD_TO_FAVORITES,
        payload: fav.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
//FUNCION PARA TRAER FAVORITOS
export function getFavorites(user) {
  return async (dispatch) => {
    try {
      const fav = await axios.get(`/users/${user}/favorites`);

      dispatch({
        type: GET_FAVORITES,
        payload: fav.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// PARA BORRAR
export function removeFavorites(user, publication) {
  return async (dispatch) => {
    try {
      await axios.delete(`/users/${user}/favorites`, {
        data: publication,
      });
      const fav = await axios.get(`/users/${user}/favorites`);
      dispatch({
        type: REMOVE_FAVORITES,
        payload: fav.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function confirmPassword(form) {
  return async (dispatch) => {
    try {
      const response = await axios.get(`/register/success`, {
        withCredentials: true,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      });
      const { data } = await axios.put(`/register/confirm`, {
        ...form,
        ...response.data,
      });
      console.log(data);
    } catch (e) {
      console.log(e.message);
    }
  };
}

export function myLocalStorageTwo() {
  //Ojo al piojo:: hay 2 de estas cuidado se cruzen
  let productsInLocalStorage = localStorage.getItem("itemCar");
  productsInLocalStorage = JSON.parse(productsInLocalStorage);
  console.log(productsInLocalStorage);
  return productsInLocalStorage;
}

export function getErrorRegister() {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/register/error`);
      console.log(data);
      dispatch({
        type: "GET_ERROR_REGISTER",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function clearErrorRegister() {
  return async (dispatch) => {
    const { data } = await axios.post(`/register/logout`);
    dispatch({
      type: "CLEAR_ERROR_REGISTER",
      payload: data,
    });
  };
}

export function clearUserRegister() {
  return (dispatch) => {
    dispatch({
      type: "CLEAR_USER_REGISTER",
    });
  };
}

export function getMercadoPago(title, price) {
  return async (dispatch) => {
    const { data } = await axios.post(`${URL}/payments/mercado`, {
      title,
      price,
    });

    dispatch({
      type: GET_MERCADOPAGO,
      payload: data,
    });
  };
}

export function sendEmail({ email, type }) {
  return async (dispatch) => {
    try {
      console.log(type);
      const { data } = await axios.post(`/email?type=${type}`, {
        email,
      });
      dispatch({
        type: "SEND_MAIL",
        payload: !!data.state,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
