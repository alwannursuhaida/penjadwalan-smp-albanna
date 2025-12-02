// config.js

// 1. Import Library dari CDN (Wajib pakai ini agar jalan di browser tanpa Node.js)
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set, push, onValue, remove, update } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

// 2. Konfigurasi Firebase (Data dari Anda)
const firebaseConfig = {
  apiKey: "AIzaSyDrurUzpsUoTg2pj1IGZLsftzRnPiRJD4I",
  authDomain: "jadwal-smp-albanna.firebaseapp.com",
  databaseURL: "https://jadwal-smp-albanna-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "jadwal-smp-albanna",
  storageBucket: "jadwal-smp-albanna.firebasestorage.app",
  messagingSenderId: "479463025402",
  appId: "1:479463025402:web:0fb644f0ba8bfcf38bf743"
};

// 3. Inisialisasi Firebase App
const app = initializeApp(firebaseConfig);

// 4. Inisialisasi Realtime Database
const db = getDatabase(app);

// 5. Export variables agar bisa di-import di file lain
export { db, ref, set, push, onValue, remove, update };
