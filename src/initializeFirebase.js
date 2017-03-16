let firebase;
let firebaseApp;
let database;
let auth;

if (typeof window !== 'undefined') {
  firebase = require('firebase/app');
  require('firebase/auth');
  require('firebase/database');
  require('firebase/storage');

  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCcfZvfjJErpXWk-bKavpDrGBDpfvp2bi4",
    authDomain: "test-firebase-push.firebaseapp.com",
    databaseURL: "https://test-firebase-push.firebaseio.com",
  });

  database = firebaseApp.database();
  auth = firebaseApp.auth();
}

export {
  firebase,
  firebaseApp,
  database,
  auth,
};
