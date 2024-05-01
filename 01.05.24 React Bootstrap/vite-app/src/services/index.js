import axios from "axios"
import { BASE_URL, endpoint } from "./constant"

// get All 
async function getAll(endpoint) {
    try {
        const response = await axios.get(BASE_URL + endpoint);
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}

// getOneId 
async function getOneId(endpoint, id) {
    try {
        const response = await axios.get(BASE_URL + endpoint + `/${id}`);
        return response.data
    } catch (error) {
        console.log(error.message);
    }
}
async function deleteOneID(endpoint, id) {
    try {
        const response = await axios.delete(BASE_URL + endpoint + `/${id}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}
export { getAll, getOneId, deleteOneID }