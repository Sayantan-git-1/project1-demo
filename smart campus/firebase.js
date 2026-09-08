import { initializeApp } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-app.js";

import { getAuth } from
"https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";


const firebaseConfig = {
    apiKey: "AIzaSyDaW_ntpZi73tZjUxM_6nhUTjdc12Ow-5A",
    authDomain: "smart-campus-demo1.firebaseapp.com",
    projectId: "smart-campus-demo1",
    storageBucket: "smart-campus-demo1.firebasestorage.app",
    messagingSenderId: "519287641185",
    appId: "1:519287641185:web:ff32b9e50c154c83310e20",
    measurementId: "G-4KA3H394Y6"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth };