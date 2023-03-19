
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.17.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBuVivvByhEg3b_6yuO0DO2ze78n91Fr8s",
    authDomain: "farm-fusion-ec5e3.firebaseapp.com",
    projectId: "farm-fusion-ec5e3",
    storageBucket: "farm-fusion-ec5e3.appspot.com",
    messagingSenderId: "44757465389",
    appId: "1:44757465389:web:f55887b831b79f506f3ba4",
    measurementId: "G-032J35Z012"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Get a reference to the authentication service
var auth = firebase.auth();

// Add login form submit event listener
document.getElementById('login-form').addEventListener('submit', function(event) {
	event.preventDefault(); // prevent default form submit behavior

	// Get user inputs
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	// Sign in user with email and password
	auth.signInWithEmailAndPassword(email, password)
		.then(function(userCredential) {
			// Signed in
			var user = userCredential.user;
			console.log(user);
			alert('Login successful!');
		})
		.catch(function(error) {
			// Error handling
			var errorCode = error.code;
			var errorMessage = error.message;
			alert(errorMessage);
		});
})
// Get elements from the DOM
const signupForm = document.querySelector('#signup-form');

// Add event listener to the signup form
signupForm.addEventListener('submit', (event) => {
  event.preventDefault();

  // Get user input values
  const email = signupForm['email'].value;
  const password = signupForm['password'].value;

  // Sign up the user with Firebase
  firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up successfully
      console.log('User signed up successfully!');
      console.log(userCredential);
    })
    .catch((error) => {
      // Failed to sign up the user
      console.error(error);
    });
});
