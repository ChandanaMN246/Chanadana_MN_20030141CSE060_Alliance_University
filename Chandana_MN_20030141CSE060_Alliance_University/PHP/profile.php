<?php
include('../assets/database/db_connection.php');
require 'vendor/autoload.php';
use MongoDB\Client;
$mongoClient = new MongoDB\Driver\Manager("mongodb://localhost:27017");
$mongoDatabase = $mongoClient->selectDatabase('TechLearnHub');
$mongoCollection = $mongoDatabase->selectCollection('users');
$imagePath = $_POST['imagePath'];

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $user = [
        'username' => 'John Doe',  
        'email' => 'john@example.com',  
    ];

    $mongoCollection->updateOne(
        ['email' => $user['email']],
        ['$set' => $user],
        ['upsert' => true]
    );

    echo json_encode($user);
} else {
  
    echo json_encode(['status' => 'error', 'message' => 'Method Not Allowed.']);
}


$document = [
    'imagePath' => $imagePath,
];

$bulk = new MongoDB\Driver\BulkWrite;
$bulk->insert($document);
$mongoClient->executeBulkWrite('TechLearnHub.users', $bulk);
echo json_encode(['status' => 'success']);
?>
