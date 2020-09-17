import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Raiz from "../pages/Raiz";
import Home from '../pages/Home';
import Routes from '../constants/routes';
import Adopciones from "../pages/Adopciones";
import Donaciones from "../pages/Donaciones";
import Donacionesfisicas from "../pages/Donacionesfisicas";
import Donacionestransferencia from "../pages/Donacionestransferencia";
import Donacionesdebito from "../pages/Donacionesdebito";
import Derechos from "../pages/Derechos";
import RegisterPet from "../pages/RegisterPet";
import Galeria from "../pages/Galeria";
import Mision from "../pages/Mision";
import FirstAdoption from "../pages/FirstAdoption";
import FormAdoption from "../pages/FormAdoption";
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

            <Route path={Routes.DONACIONESDEBITO}>
                <Donacionesdebito/>
            </Route>

            <Route path={Routes.DONACIONESTRANSFERENCIA}>
                <Donacionestransferencia/>
            </Route>

            <Route path={Routes.DONACIONESFISICAS}>
                <Donacionesfisicas/>
            </Route>


        <Route path={ Routes.DERECHOS }>
               <Derechos />
        </Route>
        <Route path={ Routes.ADOPCIONES }>
                <Adopciones />
        </Route>
        <Route path={ Routes.REGISTROANIMAL }>
               <RegisterPet />
        </Route>
            <Route path={ Routes.ADOPTA }>
                <Galeria />
            </Route>
            <Route path={ Routes.MISION }>
                <Mision />
            </Route>
            <Route path={ Routes.FIRSTADOPTION }>
                <FirstAdoption />
            </Route>
            <Route path={ Routes.FORMADOPTION }>
                <FormAdoption />
            </Route>
        <Route path={ Routes.INICIOSESION }>
        </Route>
        </Switch>
);
};
export default AppRouter;