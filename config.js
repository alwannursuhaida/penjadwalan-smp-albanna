// Import fungsi yang dibutuhkan dari SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// --- GANTI BAGIAN INI DENGAN DATA DARI FIREBASE CONSOLE ANDA ---
const firebaseConfig = {
  apiKey: "AIzaSyDrurUzpsUoTg2pj1IGZLsftzRnPiRJD4I",
  authDomain: "jadwal-smp-albanna.firebaseapp.com",
  databaseURL: "https://jadwal-smp-albanna-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jadwal-smp-albanna",
  storageBucket: "jadwal-smp-albanna.firebasestorage.app",
  messagingSenderId: "479463025402",
  appId: "1:479463025402:web:0fb644f0ba8bfcf38bf743"
};
// ---------------------------------------------------------------

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

// Export agar bisa dipakai di file lain
export { db, ref, set, push, onValue, remove, update };
