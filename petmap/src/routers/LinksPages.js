import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Raiz from "../pages/Raiz";
import Home from '../pages/Home';
import Registro from '../pages/Registro';
import Routes from '../constants/routes';
import Adopciones from "../pages/Adopciones";
import Donaciones from "../pages/Donaciones";
import Derechos from "../pages/Derechos";
const AppRouter = () => {
    return (
        <Switch>
        <Route exact path={ Routes.RAIZ }>
            <Raiz />
        </Route>
        <Route path={ Routes.HOME }>
           <Home />
        </Route>
        <Route path={ Routes.REGISTER }>
            <Registro />
        </Route>
        <Route path={ Routes.REGISTER }>
            <Registro />
        </Route>
            <Route path={ Routes.ADOPCIONES }>
                <Adopciones />
            </Route>
            <Route path={ Routes.DONACIONES }>
                <Donaciones />
            </Route>
            <Route path={ Routes.DERECHOS }>
                <Derechos />
            </Route>
        <Route path={ Routes.INICIOSESION }>
        </Route>
        </Switch>
);
};
export default AppRouter;