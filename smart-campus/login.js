import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/12.1.0/firebase-auth.js";

const loginButton = document.querySelector("#loginButton");
const signupButton = document.querySelector("#signupButton");

loginButton.addEventListener("click", async () => {

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const message = document.querySelector("#message");

    if (!email || !password) {
        message.textContent = "⚠️ Please enter email and password.";
        return;
    }

    try {
        await signInWithEmailAndPassword(auth, email, password);

        message.textContent = "✅ Login successful!";

        setTimeout(() => {
            window.location.href = "index.html";
        }, 1000);

    } catch (error) {
        console.error(error);
        message.textContent = "❌ " + error.message;
    }
});


signupButton.addEventListener("click", async () => {

    const email = document.querySelector("#email").value.trim();
    const password = document.querySelector("#password").value;
    const message = document.querySelector("#message");

    if (!email || !password) {
        message.textContent = "⚠️ Please enter email and password.";
        return;
    }

    try {
        await createUserWithEmailAndPassword(auth, email, password);

        message.textContent = "✅ Account created successfully!";

    } catch (error) {
        console.error(error);
        message.textContent = "❌ " + error.message;
    }
});