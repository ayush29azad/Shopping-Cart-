import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDKBMbdnHkejp4V5zXdxqUln5R5xlaLEoY",
  authDomain: "cart-26936.firebaseapp.com",
  projectId: "cart-26936",
  storageBucket: "cart-26936.appspot.com",
  messagingSenderId: "579571786736",
  appId: "1:579571786736:web:16acd367d72f3c556f3335"

};


// Initialize Firebase
firebase .initializeApp(firebaseConfig);

ReactDOM.render( <React.StrictMode><App /></React.StrictMode>,document.getElementById('root'));






// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
