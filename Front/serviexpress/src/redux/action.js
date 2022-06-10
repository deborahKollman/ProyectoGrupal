const axios = require('axios');

export const TEMP_VARIABLES = 'TEMP_VARIABLES';
export const GET_SERVICES = 'GET_SERVICES'
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

//simulando la ruta para agregar informacion del usuario creado
export const postProfileUser = (input) => {
    return async (dispatch) => {
        try {
            let profileUser = await axios.post('unaurldementira', input)
            return dispatch({type: 'POST_PROFILEUSER', profileUser})
        } catch (error) {console.log(error)}
    }
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
