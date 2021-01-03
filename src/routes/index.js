import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Menu from '../components/menu/menu';
import Cadastrar from '../views/cadastro/cadastrar-produtos';

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Menu}/>
                <Route path="/cad" exact component={Cadastrar}/>
            </Switch>
        </BrowserRouter>
    )
}