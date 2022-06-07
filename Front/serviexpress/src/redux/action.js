const axios = require('axios');

export const TEMP_VARIABLES = 'TEMP_VARIABLES';

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
