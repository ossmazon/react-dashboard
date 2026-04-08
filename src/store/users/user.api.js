import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL

export const getUsersApi = () => {
    //return axios.get("https://jsonplaceholder.typicode.com/users")
    return axios.get(`${API_URL}/api/users`)
}

export const deleteUserApi = (id) => {
    return axios.delete(`${API_URL}/api/users/${id}`)
}

export const createUserApi = (user) => {
    return axios.post(`${API_URL}/api/users`, user)
}

export const updateUserApi = (user) => {
    return axios.put(`${API_URL}/api/users/${user.id}`, user)
}