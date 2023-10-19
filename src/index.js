import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'axios'
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(<App/>);

const getAuth = (token) => axios.create({
    baseURL: "app-team-4.shinhansec-pda.net",
    headers: {
        "Content-Type": `application/json;charset=UTF-8`,
        "Accept": "application/json",
        "Authorization": "Bearer "+token,

        // 추가
        "Access-Control-Allow-Origin": "*",
        'Access-Control-Allow-Credentials':"true",
    }
})