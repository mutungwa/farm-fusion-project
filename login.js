firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User authenticated successfully
  })
  .catch((error) => {
    // Handle errors
  });
var user = firebase.auth().currentUser;
if (user) {
  // User is signed in
} else {
  // No user is signed in
}
firebase.auth().signOut()
  .then(() => {
    // User signed out successfully
  })
  .catch((error) => {
    // Handle errors
  });
