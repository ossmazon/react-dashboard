import axios from "axios";
export const getUsersApi = () => {
    //return axios.get("https://jsonplaceholder.typicode.com/users")
    return axios.get("https://dashboard-api-ff75.onrender.com/api/users")
}