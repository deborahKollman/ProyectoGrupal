import axios from "axios"

const URL = "http://localhost:3001" 

export const DeletePublication = (id) => {
    try {
        const responce = axios.delete(`${URL}/publications/${id}`)
        return responce
    } catch (error) {
        console.log(error.message)
    }
}

export const GetPublicationByID = (id) => {
    try {
        const responce = axios.get(`${URL}/publications/${id}`)
        return responce
    } catch (error) {
        console.log(error.message)
    }
}