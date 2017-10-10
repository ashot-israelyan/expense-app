import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyD6778CdblWu3ArLk8pt2ZRVHLH7wLgHCk",
    authDomain: "expensify-113db.firebaseapp.com",
    databaseURL: "https://expensify-113db.firebaseio.com",
    projectId: "expensify-113db",
    storageBucket: "expensify-113db.appspot.com",
    messagingSenderId: "46065090054"
};

firebase.initializeApp(config);

const database = firebase.database();

export { firebase, database as default };