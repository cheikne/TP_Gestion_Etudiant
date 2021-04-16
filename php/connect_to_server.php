<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "TP-cours-php";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if(!$conn) {
	// echo "Connection echouee";
   die("Connection failed: " . mysqli_connect_error());
} 

$sql = "SELECT * FROM Etudiant WHERE id ='".$_REQUEST["id_"]."'";
echo "on id  = " .	$_REQUEST["id_"];
  echo "Resulat " .$result;
$result = mysqli_query($conn,$sql);

if (mysqli_num_rows($result) > 0) {
  // output data of each row
  // while($row = $result->fetch_assoc()) {

  // }
  echo $result;
} else {
  echo "0 results";
}
mysqli_close($conn);
?>