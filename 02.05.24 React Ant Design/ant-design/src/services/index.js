import { BASE_URL } from "./constant";
import axios from "axios";
// get all
async function getAll(endpoint) {
    try {
        const response = await axios.get(BASE_URL + endpoint);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}
// getOneId
async function getOneId(endpoint, id) {
    try {
        const response = await axios.get(BASE_URL + endpoint + `/${id}`);
        return response.data;
    } catch (error) {
        console.log(error.message);
    }
}
// delete id
async function deleteOneID(endpoint, id) {
    try {
        const response = await axios.delete(BASE_URL + endpoint + `/${id}`);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}
async function patch(endpoint, id, payload) {
    try {
        const response = await axios.patch(BASE_URL + endpoint + `/${id}`, payload);
        return response;
    } catch (error) {
        console.log(error.message);
    }
}
export { getAll, getOneId, deleteOneID, patch };
