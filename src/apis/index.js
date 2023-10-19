import axios from "axios"
export const axiosF = axios.create({
    baseURL: "https://app-team-4.shinhansec-pda.net",
    headers: {
        "Content-Type": `application/json;charset=UTF-8`,
        "Accept": "application/json",
        "Authorization": "Bearer ",

        // 추가
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials':"true",
    }
})