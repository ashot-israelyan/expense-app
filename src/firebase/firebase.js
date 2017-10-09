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

// child_removed
database.ref('expenses').on('child_removed', snapshot => {
   console.log(snapshot.key, snapshot.val());
});

// child_changed
database.ref('expenses').on('child_changed', snapshot => {
    console.log(snapshot.key, snapshot.val());
});

// child_added
database.ref('expenses').on('child_added', snapshot => {
   console.log(snapshot.key, snapshot.val());
});

// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 976123498763
// });
//
// database.ref('expenses').push({
//     description: 'Phone bill',
//     note: '',
//     amount: 5900,
//     createdAt: 976123498763
// });
//
// database.ref('expenses').push({
//     description: 'Food',
//     note: '',
//     amount: 1200,
//     createdAt: 976123498763
// });