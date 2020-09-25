 import React, {useEffect} from 'react';
import '../styles/App.less';
import AppRouter from "../routers/LinksPages";
import FIREBASE from "../firebase";
import {useHistory} from "react-router";
import Routes from "../constants/routes";



const App = () => {

    const history = useHistory();
    useEffect( () => {

        FIREBASE.auth.onAuthStateChanged( function( user ) {
            if( user ) {
                // User is signed in.
               let displayName = user.displayName;
               let email = user.email;
               let emailVerified = user.emailVerified;
               let photoURL = user.photoURL;
               let isAnonymous = user.isAnonymous;
               let uid = user.uid;
               let providerData = user.providerData;
             // ...
               console.log( 'user', user );
               console.log( 'uid', uid );
             // hacer la consulta a la bdd en el node (`users/${uid}`)
               //history.push( Routes.HOME );
         } else {
         // User is signed out.
           console.log( 'user loggedOut' );
           history.replace( Routes.RAIZ );
        }
       } );

        return () => {
            console.log( 'UNSUBSCRIBE' );
        };
    } );

    return (
                    <AppRouter />
    );
};

export default App;