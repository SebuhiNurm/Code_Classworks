import axios from "axios"
import { BASE_URL } from "./constant";
// get 

export async function getAll(endpoint){
    try {
        const response = await axios.get(BASE_URL+endpoint);
        return response.data
    } catch (error) {
        return error
    }
}