<?php
header('Content-Type: application/json; charset=utf-8');
header('Access-Control-Allow-Methods: POST');
// header('Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept');

$url        = 'https://notify-api.line.me/api/notify';
$token      = 'AALDtW9mChJkQrVKbxkwwHUG27lNxiMhhCGnhfCQvtT';
$headers    = [
                'Content-Type: application/x-www-form-urlencoded',
                'Authorization: Bearer '.$token
            ];
$fields     = 'real test';

$ch = curl_init();
curl_setopt( $ch, CURLOPT_URL, $url);
curl_setopt( $ch, CURLOPT_POST, 1);
curl_setopt( $ch, CURLOPT_POSTFIELDS, $fields);
curl_setopt( $ch, CURLOPT_HTTPHEADER, $headers);
curl_setopt( $ch, CURLOPT_RETURNTRANSFER, 1);
$result = curl_exec( $ch );
curl_close( $ch );

$result = json_decode($result,TRUE);
var_dump($result);

// if ($conn->query($query) === TRUE) {
//     echo "{ \"status\": \"success\",
//         \"message\": \"เพิ่มข้อมูลสำเร็จ\",
//         \"code\": \"000\" }";
// } else {
//     echo "{ \"status\": \"error\",
//         \"message\": \"Error: " . $query . "<br>" . $conn->error . "\",
//         \"code\": \"001\" }";
// }