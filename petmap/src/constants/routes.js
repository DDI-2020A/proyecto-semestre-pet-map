const publicRoutes = {
    RAIZ:'/',
    HOME: 'Home',
    REGISTER: '/registro',
    INICIOSESION: '/inicioSesion',
    DONACIONES: '/donaciones',
    DONACIONESDEBITO: '/Donacionesdebito',
    DONACIONESFISICAS: '/Donacionesfisicas',
    DONACIONESTRANSFERENCIA: '/Donacionestransferencia',
    ADOPCIONES: '/adopciones',
    DERECHOS: '/derechos',
    REGISTROANIMAL: '/registroAnimal',
    ADOPTA: '/adota',
    MISION: '/mision',
    REGADOP: '/Reg_adop',
    FORMS: '/forms_adop',

};

const privateRoutes = {
};

const Routes = {
    ...publicRoutes,
    ...privateRoutes
};
export default Routes;