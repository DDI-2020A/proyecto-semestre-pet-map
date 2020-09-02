const publicRoutes = {
    HOME: '/',
    REGISTER: '/registro',
    INICIOSESION: '/inicioSesion',
};

const privateRoutes = {
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};
export default Routes;