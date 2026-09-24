import { initializeApp } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.19.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyAwreGA_Ni0om_TykrL8s7YCIV97RxLsrU",
  authDomain: "pharmacyguides26-talent.firebaseapp.com",
  projectId: "pharmacyguides26-talent",
  storageBucket: "pharmacyguides26-talent.firebasestorage.app",
  messagingSenderId: "789527078072",
  appId: "1:789527078072:web:8bb2c132a6ae83a7b4404d"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
