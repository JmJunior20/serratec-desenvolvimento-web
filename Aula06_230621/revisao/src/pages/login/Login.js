import React from "react";
import { DivPersonalizada } from "../../styles/geral-styles";
import { InputText, Button } from "../../styles/forms-styles";

import apiUsuario from "../../services/usuario-api";

const Login = () => {

    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const efetuarLogin = () => {
        // apiUsuario.logar("email", "senha")
        // .then()
        // .catch()
    }

    return (
        <DivPersonalizada width="400px" border="1px solid #ddd" margin="auto" marginTop="50px">
            <h1>Login</h1>
            
            <label htmlFor="email">Email</label>
            <InputText id="email" value={email} onChange={e => setEmail(e.target.value)}></InputText>

            <label htmlFor="senha">Senha</label>
            <InputText id="senha" type="password" value={senha} onChange={e => setSenha(e.target.value)}></InputText>

            <Button onClick={efetuarLogin}>Entrar</Button>
        </DivPersonalizada>
    );
}

export default Login;