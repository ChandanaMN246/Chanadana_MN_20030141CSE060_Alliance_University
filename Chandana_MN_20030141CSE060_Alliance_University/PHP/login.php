<?php
include('../assets/database/db_connection.php');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';
    
    if (empty($email) || empty($password)) {
        echo json_encode(['status' => 'error', 'message' => 'All fields are required.']);
        exit();
    }

    $sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $email, $password);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        echo json_encode(['status' => 'success', 'message' => 'Login successful.']);
    } else {
        echo json_encode(['status' => 'error', 'message' => 'Invalid credentials.']);
    }

    $stmt->close();
} else {
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed.']);
}

$conn->close();
?>