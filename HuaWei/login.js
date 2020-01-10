$(".close").click(function(){
	$(".login-Mid1-s1").css({display:"none"})
})

// 扫一扫登录


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
$(function(){
	$("#loginBtn").click(function(){
		let name= $("#userId").val();
		let pwd= $("#userPwd").val();
		if(name==""){
			alert("用户名不能为空");
		}else if(pwd==""){
			alert("密码不能为空");
		}else{
		$.ajax('',{
			url:"login.php",
			data:{
				name:name,
				pwd:pwd
			},
			type:'post',//HTTP请求类型
			success:function(data){
				if(data==1){
				 alert("用户名或密码错误");	
				}else{
					location.href="myHome.html";
				}
			}
		});	
		}	
	});
	
})