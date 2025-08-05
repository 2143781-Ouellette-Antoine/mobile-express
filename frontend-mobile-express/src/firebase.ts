import { initializeApp } from 'firebase/app';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { type NavigateOptions, type To } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyDETOfNZXP7ab3YYPXNwRQH6QlIEev1hHQ",
  authDomain: "mobile-express-efef5.firebaseapp.com",
  projectId: "mobile-express-efef5",
  storageBucket: "mobile-express-efef5.firebasestorage.app",
  messagingSenderId: "669771152392",
  appId: "1:669771152392:web:f8efdf241f080aece865bd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export const logInWithEmailAndPassword = async (
    email: string,
    password: string
) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err: any) {
        console.error(err);
        alert(err.message);
    }
};

export const getToken = async () => {
    if (!auth.currentUser) return;
  
    return await auth.currentUser
        .getIdToken(false)
        .then(function (idToken) {
            return idToken;
        })
        .catch(function (error) {
            console.log(error);
            return null;
        });
};