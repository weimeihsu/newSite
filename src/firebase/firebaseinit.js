import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyBXf3pa-SqzrpjjmxZhBH4o8k2PaaGkC90",
    authDomain: "my-vue-8743f.firebaseapp.com",
    projectId: "my-vue-8743f",
    storageBucket: "my-vue-8743f.appspot.com",
    messagingSenderId: "4609273216",
    appId: "1:4609273216:web:80654cc92dffde51e3e565",
    measurementId: "G-39QZ2V5DNF"
  };

firebase.initializeApp(firebaseConfig);
const firedb = firebase.firestore();

export default firedb