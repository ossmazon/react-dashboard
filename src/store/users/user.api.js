import axios from "axios";
export const getUsersApi = () => {
    return axios.get("https://jsonplaceholder.typicode.com/users")
}