<?php

// Database connection
$host = "localhost";
$username = "root";
$password = "";
$dbname = "username";

$conn = mysqli_connect($host, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Encrypt password
$encrypted_password = password_hash($password, PASSWORD_DEFAULT);

// Insert data into database
$sql = "INSERT INTO users (name, email, password) VALUES ('$name', '$email', '$encrypted_password')";

if (mysqli_query($conn, $sql)) {
  echo "User registered successfully!";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>
