import firebase from "firebase"

import 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyC28-eqAelwDMyLG4wA8_kSGbGWZ2HjE_s",
    authDomain: "carrito-38d71.firebaseapp.com",
    projectId: "carrito-38d71",
    storageBucket: "carrito-38d71.appspot.com",
    messagingSenderId: "938919492227",
    appId: "1:938919492227:web:a24e33be6c459f9521b9b6"
  };


const app = firebase.initializeApp(firebaseConfig)


// export function getFirebase(){
//     return app
// }

export function getFirestore(){    
    return firebase.firestore(app)
}