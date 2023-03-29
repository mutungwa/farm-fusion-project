<?php

// MySQL database configuration
$host = "localhost";
$username = "root";
$password = "";
$database = "user";

// Create a connection to the database
$conn = mysqli_connect($host, $username, $password, $database);

// Check if the connection was successful
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Connection was successful
echo "Connected successfully to the database.";


// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$password = $_POST['password'];

// Encrypt password
$encrypted_password = password_hash($password, PASSWORD_DEFAULT);

// Insert data into database
$sql = "INSERT INTO users (username, email, password) VALUES ('$name', '$email', '$encrypted_password')";

if (mysqli_query($conn, $sql)) {
  echo "User registered successfully!";
} else {
  echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);

?>
