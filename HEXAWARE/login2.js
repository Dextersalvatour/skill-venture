// Import Firebase SDKs
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js";

// Your web app's Firebase configuration (Updated)
const firebaseConfig = {
  apiKey: "AIzaSyDVgwADe7KciSj2UtJnj2_WyrfMbb117w0",
  authDomain: "skill-venture-student.firebaseapp.com",
  projectId: "skill-venture-student",
  storageBucket: "skill-venture-student.appspot.com",
  messagingSenderId: "202139259298",
  appId: "1:202139259298:web:14d504b7adced6d6f4a2fb",
  measurementId: "G-683JJPPN1Q"  // Updated credentials
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Get form elements
const loginForm = document.getElementById('loginForm');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('passcode');

// Add event listener for form submission
loginForm.addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent default form submission

  const email = emailField.value;
  const password = passwordField.value;

  // Firebase Authentication: Sign in with email and password
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in successfully
      const user = userCredential.user;
      alert(`Welcome, ${user.email}!`);
      // Redirect or do something upon successful login
      window.location.href = "about us.html"; // Redirect to the desired page
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
        alert('Incorrect email or passcode. Please try again or contact admin.');
      } else {
        alert(`Error: ${errorMessage} (Code: ${errorCode})`);
      }
    });
});
