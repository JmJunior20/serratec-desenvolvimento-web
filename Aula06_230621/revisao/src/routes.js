import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";

import Menu from "./components/menu/Menu";
import Login from "./pages/login/Login";
import Home from "./pages/home/Home";

const Routes = () => (
    <BrowserRouter>
        <Menu ></Menu>
        <Switch>
            <Route exact path={'/'} component={Home}></Route>
            <Route path={'/login'} component={Login}></Route>
        </Switch>
    </BrowserRouter>
);

export default Routes;