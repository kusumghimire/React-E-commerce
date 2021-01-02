import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyA1Qb6fhUatAJ_SB4NNEiBjIuZ-GQKRI74",
    authDomain: "crwn-db-f5444.firebaseapp.com",
    databaseURL: "https://crwn-db-f5444.firebaseio.com",
    projectId: "crwn-db-f5444",
    storageBucket: "crwn-db-f5444.appspot.com",
    messagingSenderId: "213897354899",
    appId: "1:213897354899:web:17ab6da80832057e5bf766",
    measurementId: "G-2MWW1SRMTT"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ propt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;