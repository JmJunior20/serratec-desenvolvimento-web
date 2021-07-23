import React, { useState, useEffect } from "react";
import apiUsuarios from "../../services/usuario-api";
import utilStorage from "../../utils/storage";
const Home = () => {

    const [usuarios, setUsuarios] = useState([]);

    const obterUsuarios = () => {
        apiUsuarios.obterTodos()
        .then(resposta =>{
            // Eu poderia varrer o data e para cada item que veio na requisição
            // montar um novo array de new Usuario e depois salvar no state.
            setUsuarios(resposta.data);
        })
        .catch(erro =>{
            console.log(erro);
        })
    }

    useEffect(() =>{

        let token = utilStorage.obterTokenNaStorage();

        if(!token){
            window.open("/login", "_self");
            return;
        }

        obterUsuarios();
    });

    return (
        <center>
            {usuarios.map(usuario => (
                <div>
                    <p> <strong>Id:</strong> {usuario.id}</p>
                    <p> <strong>Nome:</strong> {usuario.nome}</p>
                    <p> <strong>E-mail:</strong> {usuario.email}</p>
                </div>
            ))}
        </center>
    );
}

export default Home;