// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPrU4uln7Ut2JM1M-fcGSj-ddED9ZRbIk",
    authDomain: "sk-certificate.firebaseapp.com",
    databaseURL: "https://sk-certificate-default-rtdb.firebaseio.com",
    projectId: "sk-certificate",
    storageBucket: "sk-certificate.appspot.com",
    messagingSenderId: "605657988251",
    appId: "1:605657988251:web:72a68bb4911fe4836a9a3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

// Handle form submission
document.getElementById('certificate-form').addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form data
    const internshipCertificate = document.getElementById('internship-certificate').value;
    const courseCertificate = document.getElementById('course-certificate').value;

    // Write data to Firebase Realtime Database
    set(ref(database, 'certificates/' + Date.now()), {
        internshipCertificate: internshipCertificate,
        courseCertificate: courseCertificate
    }).then(() => {
        alert('Certificates uploaded successfully!');
        // Redirect to homepage after successful submission
        window.location.href = "about us.html";
    }).catch((error) => {
        alert('Error uploading certificates: ' + error.message);
    });
});
