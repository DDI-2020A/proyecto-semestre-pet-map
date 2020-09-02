import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../pages/Home';
import Registro from '../pages/Registro';
import Routes from '../constants/routes';
import Mision from "../pages/Mision";

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

            <Route path={ Routes.MISION }>
                <Mision />
            </Route>

        </Switch>
    );
};

export default AppRouter;
