<?php
$conn = new mysqli("localhost", "root", "", "lagunawise_db");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $lname     = mysqli_real_escape_string($conn, $_POST['last_name']);
    $fname     = mysqli_real_escape_string($conn, $_POST['first_name']);
    $mname     = mysqli_real_escape_string($conn, $_POST['middle_name']);
    $bday      = mysqli_real_escape_string($conn, $_POST['birthday']);
    $gender    = mysqli_real_escape_string($conn, $_POST['gender']);
    $email     = mysqli_real_escape_string($conn, $_POST['email']);
    $field     = mysqli_real_escape_string($conn, $_POST['field']);

    $pos_array = isset($_POST['positions']) ? $_POST['positions'] : [];
    $positions = mysqli_real_escape_string($conn, implode(", ", $pos_array));

    $q1        = mysqli_real_escape_string($conn, $_POST['q1']);
    $q2        = mysqli_real_escape_string($conn, $_POST['q2']);
    $q3        = mysqli_real_escape_string($conn, $_POST['q3']);


    $sql = "INSERT INTO users (last_name, first_name, middle_name, birthday, gender, email, field, preferred_positions, q1, q2, q3) 
            VALUES ('$lname', '$fname', '$mname', '$bday', '$gender', '$email', '$field', '$positions', '$q1', '$q2', '$q3')";

    if ($conn->query($sql) === TRUE) {
        echo "<script>alert('Registration Submitted Successfully!'); window.location.href='homepage.html';</script>";
    } else {
        echo "Error: " . $conn->error;
    }
}
$conn->close();
?>