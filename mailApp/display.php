<?php

  $conn = mysql_connect("localhost", "root", "password", "email")
  $output=array();
  $query = SELECT * from indbox
  $result = mysql_query($conn, $query);
  if(mysqli_num_rows($result) > 0){
    while($row = mysqli_fetch_array($result)){
      output[] = $row
    }
  }
?>
