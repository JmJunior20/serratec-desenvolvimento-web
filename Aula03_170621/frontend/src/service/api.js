import axios from 'axios';

const api = axios.create({baseURL: "https://padaria-do-junior.herokuapp.com"});

export default api;