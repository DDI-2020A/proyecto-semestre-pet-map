import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Registro from '../pages/Registro';
import Routes from '../constants/routes';

const AppRouter = () => {
    return (
        <Switch>
            <Route exact path={ Routes.HOME }>
                <Home />
            </Route>
            <Route path={ Routes.REGISTER }>
                <Registro />
            </Route>
            <Route path={ Routes.INICIOSESION }>

            </Route>

        </Switch>
    );
};

export default AppRouter;
