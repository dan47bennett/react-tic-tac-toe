import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
const firebase = require('firebase');

const firebaseConfig = {
    apiKey: 'AIzaSyCD7PP3PzUuKPPRzYuKl5Lfn0jUXUCHqtY',
    authDomain: 'tic-tac-toe-dfc67.firebaseapp.com',
    databaseURL: 'https://tic-tac-toe-dfc67.firebaseio.com',
    projectId: 'tic-tac-toe-dfc67',
    storageBucket: 'tic-tac-toe-dfc67.appspot.com',
    messagingSenderId: '650631267928',
    appId: '1:650631267928:web:e3946ee1e3c062ac152c2d',
    measurementId: 'G-J15N6HXZQM'
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));
