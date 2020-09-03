const publicRoutes = {
    HOME: '/',
    REGISTRO: '/registro',
    INICIOSESION: '/inicioSesion',
};

const privateRoutes = {
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};
export default Routes;