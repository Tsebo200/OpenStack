import axios from 'axios';

const BASE_URL = 'http://localhost:5001'

let refreshToken = localStorage.getItem("refreshToken");

export default axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'}
});

export const axiosPrivate =  axios.create({
    baseURL: BASE_URL,
    headers: {'Content-Type': 'application/json'},
    data: { refreshToken: refreshToken},
});