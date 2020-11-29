import axios from 'axios';

export const HTTP = axios.create({
    baseURL: `https://localhost:44370/api/`,
    headers: {
        "Content-Type": "application/json",
        // 'Access-Control-Allow-Origin': '*'
        // Authorization: 'Bearer {token}'
    }
})