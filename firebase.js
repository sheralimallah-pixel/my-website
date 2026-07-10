import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";

const firebaseConfig = {
  // Yahan apna firebaseConfig paste karo
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
