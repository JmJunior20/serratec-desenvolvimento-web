// Biblioteca que sabe fazer requisições HTTP.
// Melhor biblioteca da atualidade.
import axios from 'axios';

// Criamos uma configuração já passando a url base da nossa api.
const api = axios.create({baseURL: "https://padaria-do-junior.herokuapp.com"});

// Exportando nosso axios configurado.
export default api;