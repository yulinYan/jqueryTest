$("#scan").click(function(){
	$(".login-txt-1").css({display:"none"});
	$(".login-scan").css({display:"block"});
	$("#number").css({color:"black"});
	$(this).css({color:"#b40707"}).mouseout(function(){
		$(this).css({color:"#b40707"});
	});
	$("#number").hover(function(){
		$(this).css({color:"#b40707"});
		},function(){
		$(this).css({color:"black"});
	});
});

$("#number").click(function(){
	$(".login-txt-1").css({display:"block"});
	$(".login-scan").css({display:"none"});
	$("#scan").css({color:"black"});
	$(this).css({color:"#b40707"}).mouseout(function(){
		$(this).css({color:"#b40707"});
	});
	$("#scan").hover(function(){
		$(this).css({color:"#b40707"});
		},function(){
		$(this).css({color:"black"});
	});
	
});