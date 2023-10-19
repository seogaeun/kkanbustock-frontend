import cors from 'cors';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from 'axios'
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
// axios.defaults.withCredentials = true;

// const getAuth = () => axios.create({
//     baseURL: 'https://app-team-4.shinhansec-pda.net',
//     headers: {
//         "Content-Type": `application/json;charset=UTF-8`,
//         "Accept": "application/json",
//         "Authorization": "Bearer ",

//         // 추가
//         "Access-Control-Allow-Origin": "*",
//         'Access-Control-Allow-Credentials':"true",
//     }
// })
const headers = {
    "Content-Type": `application/json;charset=UTF-8`,
    "Accept": "application/json",
    "Authorization": "Bearer",

    // 추가
    "Access-Control-Allow-Origin": "*",
    'Access-Control-Allow-Credentials':"true",
}
root.headers(headers);
root.render(<App/>);