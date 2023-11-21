<?php
// Retrieve form data and sanitize inputs
$username = $_POST['username'];
$password = $_POST['password'];
$membershipPlan = $_POST['membership-plan'];
$locker = $_POST['locker'];
$paymentOption = $_POST['payment-option'];

// Connect to MySQL (replace these with your actual database credentials)
$host = 'localhost';
$user = 'root';
$pass = 'Namitaneja';
$dbname = 'GYM_MEMBERSHIP';
$conn = new mysqli($host, $user, $pass, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and execute SQL INSERT statement using prepared statement
$stmt = $conn->prepare("INSERT INTO members (username, password, membership_plan, locker, payment_option) 
                        VALUES (?, ?, ?, ?, ?)");
$stmt->bind_param("sssss", $username, $password, $membershipPlan, $locker, $paymentOption);

if ($stmt->execute()) {
    echo "New record created successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close statement and database connection
$stmt->close();
$conn->close();
?>
