const publicRoutes = {
    RAIZ:'/',
    HOME: 'home',
    REGISTER: '/registro',
    INICIOSESION: '/inicioSesion',
    DONACIONES: '/donaciones',
    ADOPCIONES: '/adopciones',
    DERECHOS: '/derechos',
};

const privateRoutes = {
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};
export default Routes;