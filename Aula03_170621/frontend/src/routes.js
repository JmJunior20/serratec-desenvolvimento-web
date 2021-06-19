import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Principal from "./pages/principal";
import Detalhes from "./pages/detalhes";

// Só posso fazer roteamento se o componente de rota estiver dentro do BrowserRouter.
// BrowserRouter - Fazer roteamento por Browser
// Switch - Um roteamento por página
// Route - É a própria rota em si
const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Principal} />
            <Route path="/detalhes/:id" component={Detalhes} />
        </Switch>
    </BrowserRouter>
)

export default Routes;