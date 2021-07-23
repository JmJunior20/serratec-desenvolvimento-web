import api from './api';

function obterTodos(){
    return new Promise((resolve, reject) => {
        return api.get('/api/produtos')
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function obterPorId(id){
    return new Promise((resolve, reject) => {
        return api.get(`/api/produtos/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function obterPorNome(nome){
    return new Promise((resolve, reject) => {
        return api.get(`/api/produtos/?nome=${nome}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function cadastrar(produto){
    return new Promise((resolve, reject) => {
        return api.post(`/api/produtos`, produto)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}


function atualizar(produto){
    return new Promise((resolve, reject) => {
        return api.put(`/api/produtos/${produto.id}`, produto)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

function deletar(id){
    return new Promise((resolve, reject) => {
        return api.delete(`/api/produtos/${id}`)
        .then(response => resolve(response))
        .catch(error => reject(error))
    });
}

export default {
    obterTodos,
    obterPorId,
    obterPorNome,
    cadastrar,
    atualizar,
    deletar
}