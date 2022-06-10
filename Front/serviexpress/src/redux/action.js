const axios = require('axios');

export const TEMP_VARIABLES = 'TEMP_VARIABLES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_SERVICES = 'GET_SERVICES'
const URL = `http://127.0.0.1:3001`;


export const getAllCategories = () => {
  return async (dispatch) => {
      try {
          const {data} = await axios.get(`http://127.0.0.1:3001/categories`);
            dispatch({
                type: GET_CATEGORIES,
                payload: data,
            })
      } catch (error) {
        return error.message;
      }
    }
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
