const axios = require('axios');

const TEMP_VARIABLES = 'TEMP_VARIABLES';
const GET_PUBLICATIONS = 'GET_PUBLICATIONS'
const SWICH_LOADING = 'SWICH_LOADING'
const URL = `http://127.0.0.1:4001`;


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
    }
}

export const getAllCategories = () => {
    return async (dispatch) => {
        try {
            const json = axios('urldementira')
            return dispatch({type: 'GET_CATEGORIES', payload: json.data})
        } catch (error) {
            console.log(error)
        }
    }
}

//simulando la accion para hacer un post a la ruta y agregar informacion del usuario creado
export const postProfileUser = (input) => {
    return async (dispatch) => {
        try {
            let profileUser = await axios.post('unaurldementira', input)
            return dispatch({type: 'POST_PROFILEUSER', profileUser})
        } catch (error) {console.log(error)}
    }
}

//simulando la accion para el filtro por categorias
export function filterCategories(payload) {
    return {type: 'FILTER_CATEGORIES', payload}
}

export const swich_loading = (e) => {
 
    return ({ type: SWICH_LOADING, payload: e  });
           
        };

        export function getPublications(){
            return async (dispatch)=>{
                try{
                const response = await axios.get("http://localhost:3001/publications")
                dispatch({
                    type:GET_PUBLICATIONS,
                    payload:response.data
                });
            } catch (error){
                console.log("SERVICES NO FOUND")
            }
            }
        }
        
