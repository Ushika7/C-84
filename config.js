import firebase from "firebase";
require("@firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyBuMO24PBAU17uddKAsqZQudVuiSvIZb-I",
  authDomain: "e-library-2a80c.firebaseapp.com",
  projectId: "e-library-2a80c",
  storageBucket: "e-library-2a80c.appspot.com",
  messagingSenderId: "1074534293344",
  appId: "1:1074534293344:web:e6cee95d1d1f38a1f24805"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
