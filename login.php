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
$email = $_POST['email'];
$password = $_POST['password'];

// Check if user exists in database
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
  $row = mysqli_fetch_assoc($result);
  $encrypted_password = $row['password'];

  // Verify password
  if (password_verify($password, $encrypted_password)) {
    echo "Login successful!";
  } else {
    echo "Incorrect password.";
  }
} else {
  echo "User not found.";
}

mysqli_close($conn);

?>
