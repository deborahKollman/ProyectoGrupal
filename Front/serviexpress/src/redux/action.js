import axios from 'axios';
import swal from 'sweetalert';

const TEMP_VARIABLES = 'TEMP_VARIABLES';
const GET_PUBLICATIONS = 'GET_PUBLICATIONS'
const SWICH_LOADING = 'SWICH_LOADING'
const GET_PUBLICATION_ID = 'GET_PUBLICATION_ID'
const GET_PUBLICATIONS_NAME = 'GET_PUBLICATIONS_NAME'
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
        
        export const getPublicationId = (id) => {
            return async (dispatch) => {
               
                try {
                    const publication = await axios.get(`http://localhost:3001/publications/${id}`);
                    return dispatch({ type: GET_PUBLICATION_ID, payload: publication.data });
                } catch (e) {
                    console.log(e);
                    return dispatch({ type: GET_PUBLICATION_ID, payload: [] });
                }
            };
        }

        export function getPublicationsName(name){
            return function(dispatch){
              
                    axios.get(`http://localhost:3001/publications?title=`+name) 
                    .then(responese=>{return dispatch({
                        type: GET_PUBLICATIONS_NAME, 
                        payload: responese.data
                    })})
        
                    .catch(function(){ swal({
                        title: "ERROR",
                        text: "Recipe not found",
                        icon: "https://filestore.community.support.microsoft.com/api/images/ext?url=https%3A%2F%2Fanswersstaticfilecdnv2.azureedge.net%2Fstatic%2Fimages%2Fimage-not-found.jpg",
                        dangerMode: true,
                      });})
                    
                }
            }       