<?php
  $Name= $_POST['Name'];
  $Age=$_POST['Age'];
  $conn=new mysqli('localhost','root','','rest');
  if($conn->connect_error){
    die('Connection Failed :'.$conn->connect_error);
  }else{
    $stmt=$conn->prepare("insert into user(Name,Age) values(?,?)");
    $stmt->bind_param("si",$Name,$Age);
    $stmt->execute();
    echo "registration successfull..";
    $stmt.close();
    $conn.close();


  }

?>