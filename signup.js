firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // User account created successfully
  })
  .catch((error) => {
    // Handle errors
  });
