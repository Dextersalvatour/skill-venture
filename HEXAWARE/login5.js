// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDio97JL_8Sq9V1maUElX6d7OiWtBZWWnw",
    authDomain: "sk-student-info.firebaseapp.com",
    databaseURL: "https://sk-student-info-default-rtdb.firebaseio.com",
    projectId: "sk-student-info",
    storageBucket: "sk-student-info.appspot.com",
    messagingSenderId: "879721749421",
    appId: "1:879721749421:web:b75078ae6336a8a06d9f24",
    measurementId: "G-26ENBPJCWT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Handle form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('student-info-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const degree = document.getElementById('degree').value;
        const specialization = document.getElementById('specialization').value;
        const phone = document.getElementById('phone').value;
        const certification = document.getElementById('certification').value;

        // Save form data to Firebase Realtime Database
        const studentId = Date.now(); // Unique ID based on timestamp
        set(ref(database, 'students/' + studentId), {
            name: name,
            email: email,
            degree: degree,
            specialization: specialization,
            phone: phone,
            certification: certification
        }).then(() => {
            alert('Data submitted successfully!');
            window.location.href = "interndetail.html"; // Redirect after successful submission
        }).catch((error) => {
            console.error('Error submitting data:', error);
            alert('Error submitting data.');
        });
    });
});
