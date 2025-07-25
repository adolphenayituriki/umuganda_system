<?php
// php/sectorLeaderLogin.php
session_start();

// Enable error reporting (remove in production)
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Database config
$host = 'localhost';
$db = 'umuganda';
$user = 'root';  // Adjust if needed
$pass = '';      // Adjust if needed

// Connect
$conn = new mysqli($host, $user, $pass, $db);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get inputs and sanitize
$full_name = trim($_POST['full_name']);
$district = trim($_POST['district']);
$sector = trim($_POST['sector']);
$password = $_POST['password'];

// Prepare query
$sql = "SELECT * FROM sector_leaders WHERE full_name = ? AND district = ? AND sector = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("sss", $full_name, $district, $sector);
$stmt->execute();
$result = $stmt->get_result();

if ($result->num_rows === 1) {
    $user = $result->fetch_assoc();
    // Verify password
    if (password_verify($password, $user['password'])) {
        // Login success
        $_SESSION['leader_id'] = $user['id'];
        $_SESSION['leader_name'] = $user['full_name'];
        header("Location: ../dashboard.php");  // Redirect to dashboard
        exit;
    } else {
        echo "❌ Incorrect password.";
    }
} else {
    echo "❌ Leader not found.";
}

$conn->close();
?>
