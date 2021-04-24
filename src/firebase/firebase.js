  // Your web app's Firebase configuration
  import  firebase from 'firebase';

import 'firebase/storage';
import 'firebase/firestore';

const firebaseConfig = firebase.initializeApp ({
    apiKey: "AIzaSyBUajQceSiHK-IPDQeLHYyeUfO5-LynHZo",
    authDomain: "shubh-firebase.firebaseapp.com",
    projectId: "shubh-firebase",
    storageBucket: "shubh-firebase.appspot.com",
    messagingSenderId: "649803219718",
    appId: "1:649803219718:web:884c279850b712be595487",
    measurementId: "G-82WG18K35R"
  });
  // Initialize Firebase
    // firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectStore = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  export{ firebaseConfig,projectStorage, projectStore,timestamp};