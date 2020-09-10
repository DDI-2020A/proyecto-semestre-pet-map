const publicRoutes = {
    RAIZ:'/',
    HOME: 'home',
    REGISTER: '/registro',
    INICIOSESION: '/inicioSesion',
    DONACIONES: '/donaciones',
    ADOPCIONES: '/adopciones',
    DERECHOS: '/derechos',
    REGISTROANIMAL: '/registroAnimal',
    ADOPTA: '/adota',
    MISION: '/mision',
};

const privateRoutes = {
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};
export default Routes;