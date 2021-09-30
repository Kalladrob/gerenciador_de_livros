import React from 'react';
import {Switch, Route} from 'react-router-dom';
import { Title } from './containers/Main/MainStyled.js';
import Main from './containers/Main/Main';
import Register from './containers/Register/Register';
import Login from './containers/login/Login';

function Routes() {
    return (
        <>
        <Title>Minha Biblioteca</Title>
        <Switch>            
            <Route path="/" component={Main} exact/>
            <Route path="/new" component={Register} exact/>
            <Route path="/new/:id" component={Register} exact/>
            <Route path="/login" component={Login} exact/>
        </Switch>
        </>
    );
}

export default Routes;