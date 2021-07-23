import axios from "axios";
import utilStorage from "../utils/storage";

const api = axios.create({
    baseURL:'https://seguranca-web-serratec.herokuapp.com'
})

//Esse interceptor vai interceptar qualquer requisição antes dela acontecer.
//Aqui estamos pegando o token na storage e enviando no headers.
api.interceptors.request.use((config) => {
    // Aqui tenho que pegar o token do storage e enviar na requisição.
    let token = utilStorage.obterTokenNaStorage();

    if(token) {
        config.headers.Authorization = token; 
    }

    return config;
});


export default api;