import api from './api';

function logar(email, senha){
    return new Promise((resolve, reject) => {
        return api.post('/api/login', {email, senha})
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/api/usuarios')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function atualizar(usuario){
    return new Promise((resolve, reject) => {
        return api.put(`/api/usuarios/${usuario.id}`, usuario)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function deletar(id){
    return new Promise((resolve, reject) => {
        return api.delete(`/api/usuarios/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export default {
    logar,
    obterTodos,
    atualizar,
    deletar
}