import React, { useState, useEffect } from "react";
import { DivPersonalizada } from "../../styles/geral-styles";
import { InputText, Button } from "../../styles/forms-styles";

import apiUsuario from "../../services/usuario-api";
import utilStorage from "../../utils/storage";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const efetuarLogin = () => {
        
        if(!email || !senha){
            alert("Favor informar e-mail e senha");
            return;
        }

        apiUsuario.logar(email, senha)
        .then(resposta => {
            const { token } = resposta.data;
            utilStorage.salvarTokenNaStorage(token);
            window.open("/", "_self");
        })
        .catch(erro => {
            // Aqui poderia mandar mensagem personalizada ao usuario.
            console.log(erro);
        })
    };

    useEffect(() => {
        let token = utilStorage.obterTokenNaStorage();

        if(token){
           window.open("/", "_self");
        }
    });

    return (
        <DivPersonalizada width="250px" border="1px solid #ddd" margin="auto" marginTop="50px">
            <h1>Login</h1>
            
            <label htmlFor="email">Email</label>
            <InputText 
                id="email" 
                value={email} 
                onChange={e => setEmail(e.target.value)}
                placeholder="exemplo@exemplo.com"
            ></InputText>

            <label htmlFor="senha">Senha</label>
            <InputText 
                id="senha" 
                type="password" 
                value={senha} 
                onChange={e => setSenha(e.target.value)}
                placeholder="123456"
            ></InputText>

            <Button onClick={efetuarLogin}> Entrar</Button>

        </DivPersonalizada>
        
    );
}

export default Login;