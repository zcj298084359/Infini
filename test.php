<?php
	include("connect.php");
	$query = "select * from infinistudio";
	$result=mysqli_query($link,$query);
	$array=array();
	while(!false==($row=mysqli_fetch_assoc($result))){
		$array[]=$row;
	}
//	var_dump($array);
//	echo $array[0][id];	
//	$msg = mysqli_fetch_assoc($result);//mysqli_fetch_assoc()将结果返回成一个关联数组	
//	echo ($msg[$i]);
	$json = json_encode($array);
	echo $json;
//	echo "<img src='{$msg["images"]}' width='200px' height='200px'>";
?>
	