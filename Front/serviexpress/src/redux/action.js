const axios = require('axios');

export const TEMP_VARIABLES = 'TEMP_VARIABLES';
export const GET_SERVICES = 'GET_SERVICES';
export const  GET_BY_ID = 'GET_BY_ID';
const URL = `http://localhost:3001`;


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

export const getById = (id) => {
   
    return async (dispatch) => {
         const publi = await axios.get(`${URL}/publications/${id}`);
           
         dispatch({
            
            type: GET_BY_ID,
            payload: publi.data,
         })

    }

};






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
