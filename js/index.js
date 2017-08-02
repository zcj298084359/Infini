$('.messageP0').show();
 var mySwiper = new Swiper('.swiper-container',{
    loop:true,
    autoplay:4000,
    speed:800,
    pagination: '.pagination',
    paginationClickable:true,
    autoplayDisableOnInteraction:false,    
    onSlideChangeStart: function(swiper){
    	$('.messageP').hide();
	  	if (mySwiper.activeLoopIndex===0) {
	  		$('.messageP0').show();
	  	};
	  	if (mySwiper.activeLoopIndex===1) {
	  		$('.messageP1').show();
	  	};
	  	if (mySwiper.activeLoopIndex===2) {
	  		$('.messageP2').show();
	  	};
    }

});
$('.arrow-left').click(function(){
	mySwiper.swipePrev(); 
});
$('.arrow-right').click(function(){
	mySwiper.swipeNext();
});

window.onload = function(){
	var data="";
	Ajax("post","test.php",data,function(data){
		var msg=JSON.parse(data);
		for (var i=0;i<msg.length;i++) {
			var content=$("#content");
			var con=$("<a  href='inside.php?id="+msg[i].id+"' class='con' data-index='"+i+"'></a>").appendTo(content);
			var work=$("<div class='work'></div>").appendTo(con);
			var work_wrap=$("<div class='work_wrap'></div>").appendTo(work);
			var ul=$("<ul></ul>").appendTo(work_wrap);
			$("<li class='work_title'>"+msg[i].title+"</li>").appendTo(ul);
			$("<li class='work_remark'>"+msg[i].remark+"</li>").appendTo(ul);
			$("<img src='"+msg[i].img+"' alt=''>").appendTo(con);
			$("<p>"+msg[i].work+"</p>").appendTo(con);
		}
		
		$(".con").mouseenter(function () {
			$(this).children(".work").fadeIn(300);
		})
		
		$(".con").mouseleave(function () {
			$(this).children(".work").fadeOut(300);
		})
		
		$.each($(".con"), function(index, val) {
			if ((index-1)%3==0){
				$(val).addClass("con2");
			}
		});
		$("img").load(function(){
			reHeight();
		});
		$(window).resize(function(){
			reHeight();	
		});
		
	});
}	

function reHeight(){
	$(".device").height($(".device img").eq(0).height());
	$(".swiper-wrapper").height($(".device img").eq(0).height());
	$(".swiper-slide").height($(".device img").eq(0).height());
	$(".swiper-slide").height($(".device img").eq(0).height());
	$(".con div").height($(".con img").height());
	$("iframe").height($("iframe").width()*0.6);
	$(".video").height($("iframe").height());
};

