import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = ({
    apiKey: "AIzaSyAzGVrtjui4ZuA6nsM9td0e1ehtNL3QSXU",
    authDomain: "chat-42ca5.firebaseapp.com",
    projectId: "chat-42ca5",
    storageBucket: "chat-42ca5.appspot.com",
    messagingSenderId: "609584484925",
    appId: "1:609584484925:web:10d957a7fdd55892421054"
  })

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);
const auth = getAuth(app);

export{app,auth,db};