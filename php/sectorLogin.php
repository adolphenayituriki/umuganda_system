<?php
// Database connection
$servername = "localhost"; 
$username = "root"; 
$password = ""; 
$dbname = "umuganda";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$full_name = $_POST['full_name'];
$district = $_POST['district'];
$sector = $_POST['sector'];
$password_input = $_POST['password'];

// Query
$sql = "SELECT * FROM sector_credential
        WHERE full_name = '$full_name'
        AND district = '$district'
        AND sector = '$sector'
        AND password = '$password_input'";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // User exists
    header("Location: /umuganda_system/html/ManageFines.html");
    exit();
} else {
    // User not found
    echo "<script>alert('Login failed! No user found.'); window.history.back();</script>";
}

$conn->close();
?>
