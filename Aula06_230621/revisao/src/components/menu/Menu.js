import React from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from "../../styles/geral-styles";

const Menu = () => {

    return(
        <NavBar>
            <li>
                <Link to={'/login'}>Login</Link>
            </li>
            <li>
                <Link to={'/'}>Home</Link>
            </li>             
        </NavBar>
    );
}

export default Menu;