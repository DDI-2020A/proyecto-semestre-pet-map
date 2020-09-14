import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Raiz from "../pages/Raiz";
import Home from '../pages/Home';
import Routes from '../constants/routes';
import Adopciones from "../pages/Adopciones";
import Donaciones from "../pages/Donaciones";
import Derechos from "../pages/Derechos";
import Regpet from "../pages/Regpet";
import Galeria from "../pages/Galeria";
import Mision from "../pages/Mision";
import Reg_Adop from "../pages/First_adop";
import forms_adop from "../pages/forms_adop";
import InicioSesion from "../pages/InicioSesion";


const AppRouter = () => {
    return (
        <Switch>
        <Route exact path={ Routes.RAIZ }>
            <Raiz />
        </Route>
        <Route path={ Routes.HOME }>
           <Home />
        </Route>
        <Route path={ Routes.INICIOSESION }>
           <InicioSesion />
        </Route>
        <Route path={ Routes.DONACIONES }>
                <Donaciones />
        </Route>
        <Route path={ Routes.DERECHOS }>
               <Derechos />
        </Route>
        <Route path={ Routes.ADOPCIONES }>
                <Adopciones />
        </Route>
        <Route path={ Routes.REGISTROANIMAL }>
               <Regpet />
        </Route>
            <Route path={ Routes.ADOPTA }>
                <Galeria />
            </Route>
            <Route path={ Routes.MISION }>
                <Mision />
            </Route>
            <Route path={ Routes.REGADOP }>
                <Reg_Adop />
            </Route>
            <Route path={ Routes.FORMS }>
                <forms_adop />
            </Route>
        <Route path={ Routes.INICIOSESION }>
        </Route>
        </Switch>
);
};
export default AppRouter;