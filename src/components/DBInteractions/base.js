import Rebase from 're-base';
import firebase from 'firebase';


const app = firebase.initializeApp({
    apiKey: "AIzaSyB_eK6WQp6dX61gO1PDnRMnBQKYC6Jh2tg",
    authDomain: "finalstone-7ef90.firebaseapp.com",
    databaseURL: "https://finalstone-7ef90.firebaseio.com",
    projectId: "finalstone-7ef90",
    storageBucket: "finalstone-7ef90.appspot.com",
    messagingSenderId: "85580365081"
});
export const rebase = Rebase.createClass(app.database());

// //add the authProvides your app needs: google, facebook, twitter, github,
export const googleProvider = new firebase.auth.GoogleAuthProvider();