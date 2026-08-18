import { initializeApp } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase } from
"https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

const firebaseConfig = {
  apiKey: "AIzaSyCFC5JwSODcWIcmn9kYmi6kWbR2gJQ7GbA",
  authDomain: "student-registration-e1e3e.firebaseapp.com",
  databaseURL: "https://student-registration-e1e3e-default-rtdb.firebaseio.com",
  projectId: "student-registration-e1e3e",
  storageBucket: "student-registration-e1e3e.firebasestorage.app",
  messagingSenderId: "602047759362",
  appId: "1:602047759362:web:ff85e413d98231757a531b",
  measurementId: "G-G7G27FPTHQ"
};

const app = initializeApp(firebaseConfig);
export const database = getDatabase(app);
