import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

export const getUsersApi = () => {
    //return axios.get("https://jsonplaceholder.typicode.com/users")
    return axios.get(`${API_URL}/api/users`)
}