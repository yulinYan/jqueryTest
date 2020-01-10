export function header(){
	$(".firstLi").click(function(){
		$(".login-txt").css({display:"block"});
		$("#maskBoss").css({display:"block"});
	})
	$(".red-top1 span").click(function(){
		$(".login-txt").css({display:"none"});
		$("#maskBoss").css({display:"none"});
	})
}