// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkwcP-xxi9Oegbq6xDHcgcvKFremhOhKA",
  authDomain: "genius-car-with-mongo.firebaseapp.com",
  projectId: "genius-car-with-mongo",
  storageBucket: "genius-car-with-mongo.appspot.com",
  messagingSenderId: "536663155397",
  appId: "1:536663155397:web:df08e3d73f49c1dc84c6ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;