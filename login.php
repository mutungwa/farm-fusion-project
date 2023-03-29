<?php

// Database connection
$host = getenv('MYSQL_HOST');
$username = getenv('MYSQL_USER');
$password = getenv('MYSQL_PASSWORD');
$dbname = getenv('MYSQL_DATABASE');

$conn = mysqli_connect($host, $username, $password, $dbname);
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}

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
