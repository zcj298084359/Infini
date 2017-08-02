<?php
	//连接服务器和数据库
	$link = mysqli_connect("192.168.1.234", "4d9c39f8212b4", "f5e13944a8ae4", "405552ec2d1f4", "30017");	
//	var_dump($link);
	//将字符串的编码从GB2312转到UTF-8   先将你要传递的数据这样转换一下先。一般默认的HTML网页是用GB2312的，而你数据库用set names utf8  来设置数据库使用UTF8编码。从PHP传递了GB2312编码的到使用UTF8的数据库，所以中文会出错。
	mysqli_query($link,"set names utf8");
	if(!$link){
		echo "数据库连接失败";
		exit;
	}
?>