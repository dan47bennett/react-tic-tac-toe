import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import firebaseConfig from './config/firebaseConfig'
const firebase = require('firebase');
firebase.initializeApp(firebaseConfig);

ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
