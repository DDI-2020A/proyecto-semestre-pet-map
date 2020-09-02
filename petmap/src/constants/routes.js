const publicRoutes = {
    HOME: '/',
    REGISTER: '/registro',
    INICIOSESION: '/inicioSesion',
    MISION: '/mision',
};

const privateRoutes = {
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};
export default Routes;