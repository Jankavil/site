
<?php
$servername = "sql300.epizy.com";
$username = "epiz_30811656";
$password = "EMHdptPxSzFa";
$dbname = "epiz_30811656_kons";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$conn ("INSERT INTO `kons` (`uzvards`) VALUES ('test');");

if ($conn->query($sql) === TRUE) {
  echo "Record updated successfully";
} else {
  echo "Error updating record: " . $conn->error;
}

$conn->close();

header('Location: /')
?>
