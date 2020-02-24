import React from 'react';

import Home from './Home';
import Criacao from './Criacao';

import { Switch, Route } from 'react-router-dom';

const router = () => (
    <Switch>
        <Route path="/" exact>
            <Home/>
        </Route>
        <Route path="/criacao">
            <Criacao/>
        </Route>
        <Route>
            {() => (
                <div>
                    <h1>404!</h1>
                </div>
            )}
        </Route>
    </Switch>
)

export default router;