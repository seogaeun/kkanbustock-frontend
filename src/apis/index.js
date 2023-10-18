import axios from "axios"
export const axiosF = axios.create({
        baseURL: "http://localhost:8080",
        headers: {
        'Content-Type': 'application/json',
        withCredentials: true,
    }
    })
// // $(process.)4
// process.env.REACT_APP_ENDPOINT
// "http://localhost:8080"