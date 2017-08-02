<?php
	include("head.html");
	include("connect.php");
	$id=$_GET["id"];
	$query = "select * from infinistudio";
	$result=mysqli_query($link,$query);
	$array=array();
	while(!false==($row=mysqli_fetch_assoc($result))){
		$array[]=$row;
	}
	$json = json_encode($array);
?>
	<div class="center">
		<div class="inside_work_wrap">
			<div class="video"></div>													
			<div class="details">				
				<p class="inside-work"></p>							
			</div>			
		</div>
	</div>
<?php
	include("foot.html");
?>
<script type="text/javascript">
	var data=<?php echo $json; ?>;
	var index=<?php echo $id-1; ?>;
	$("<iframe src='"+data[index].video+"' frameborder=0 'allowfullscreen'></iframe>").appendTo($(".video"));
	$("<span>"+data[index].work+"<span>").appendTo($(".inside-work"));	
	var img=data[index].images.split(",");
	console.log(img);
	for (var i=0;i<img.length;i++) {				
		$("<img src='"+img[i]+"'/>").appendTo($(".details"));
	};
	
	$("iframe").load(function(){
		reHeight();	
	});		
</script>

	