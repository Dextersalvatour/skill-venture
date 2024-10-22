// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB0W18ps0UzjqbfV01rZ4LhhYAOJyOfKEs",
    authDomain: "sk-intern-a22f8.firebaseapp.com",
    databaseURL: "https://sk-intern-a22f8-default-rtdb.firebaseio.com",
    projectId: "sk-intern-a22f8",
    storageBucket: "sk-intern-a22f8.appspot.com",
    messagingSenderId: "438805183462",
    appId: "1:438805183462:web:3085838b574c1c2db33427",
    measurementId: "G-TPS0Q40XD5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

// Handle form submission
document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('internship-form');

    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission

        // Collect form data
        const internship = document.getElementById('internship').value;
        const course = document.getElementById('course').value;
        const linkedin = document.getElementById('linkedin').value;
        const github = document.getElementById('github').value;
        const languages = document.getElementById('languages').value;

        // Save the form data to Firebase Realtime Database
        const submissionId = Date.now(); // Use a timestamp as the unique ID
        set(ref(database, 'internships/' + submissionId), {
            internship: internship,
            course: course,
            linkedin: linkedin,
            github: github,
            languages: languages
        }).then(() => {
            alert('Data submitted successfully!');
            window.location.href = "certificate.html"; // Redirect to certificate page
        }).catch((error) => {
            console.error('Error saving data:', error);
            alert('Error submitting data.');
        });
    });
});
