<?php
	header("Content-type:text/html;charset=utf-8");
	
	$name = $_POST["name"];
	$pwd = $_POST["pwd"];
	
	$conn = mysql_connect("localhost","root","root");
	
	if($conn){
		mysql_select_db("hua_wei");
	}
	
	$result = mysql_query("select * from user where name = '$name' and pwd='$pwd' ",$conn);
	
	if(mysql_num_rows($result)==1){
		echo 0;
	}else{
		echo 1;
	}
	mysql_close($conn);
?>