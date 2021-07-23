import React from "react";
import { Link, useLocation } from "react-router-dom";
import { NavBar } from "../../styles/geral-styles";
import utilsStorage from "../../utils/storage";

const Menu = () => {

    const logout = () => {
    // O Certo era aqui fazer uma requisição para api
    // para invalidar o token
      utilsStorage.removerAutenticacao();
      window.open("/login", "_self");
    }
    
    if(useLocation().pathname !== "/login"){
        return (
            <NavBar>
                <li>
                    <Link  to={'/'}>Inicio</Link>
                </li>

                <li>
                    <Link  to={'/contato'}>Contato</Link>
                </li>
                <li>
                    <Link  to={'/sobre-nos'}>Sobre</Link>
                </li>

                <li> 
                    <a href="#" onClick={logout}> Sair</a>
                </li>
            </NavBar>
        );
    }
    return (<div></div>);


}

export default Menu;