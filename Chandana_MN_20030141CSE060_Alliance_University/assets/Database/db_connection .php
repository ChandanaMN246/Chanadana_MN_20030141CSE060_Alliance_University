<?php
$servername = "chandu";
$username = "root";
$password = "root";
$dbname = "TechLearnHub";
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
