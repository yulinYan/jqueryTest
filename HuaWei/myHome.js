class Banner{
	constructor() {
	    this.index = 0;
		this.time = null;
		// 首先让li的第一个变成红色
		$("#box li").eq(this.index).css({backgroundColor:"red"})
		
	}
	
	// 设置li的颜色  
	setLiColor(){
		
		$("#box li").eq(this.index).css({backgroundColor:"red"}).stop().siblings().css({backgroundColor:"white"});
		
	}
	// 背景圖片淡入淡出
	setBgshow(){
		
		$("#box").css({opacity:"0.3"}).animate({opacity:1},500);
		this.setBg();
	}
	
	
	
	// 设置背景色
	setBg(){
		$("#box").css({backgroundImage:"url(img/"+this.index+".jpg)"});
	}
	
	// li的点击
	liClick(){
		
		let  that =this;
	    $("#box li").each(function(index){
		
		    $(this).click(function(){
			
		    	that.index = index;
				that.setBgshow();
				that.setBg();
				that.setLiColor();
		})
	})
	}
	// div鼠标悬浮其上停止自动转
	divMouseover(){
		let that = this;
		$("#box").mouseover(function(){
			$("#box").unbind("fadeIn fadeOut");
			clearInterval(that.time);

		}).mouseout(function(){
			that.setTime();
		})
	}
	nextClick(){
		let that = this;
		$("#box input").eq(1).click(function(){
			that.index++;
			if(that.index>$("#box li").length-1){
				that.index = 0;
			}
			that.setBgshow();
			that.setBg();
			that.setLiColor();
		})
	}
	upClick(){
		let that = this;
		$("#box input").eq(0).click(function(){
			that.index--;
			if(that.index<0){
				that.index = $("#box li").length-1;
			}
			that.setBgshow();
			that.setBg();
			that.setLiColor();		
		})	
	}
		// 设置时间
	setTime(){
		let that=this;
		this.time=setInterval(function(){
			that.index++;
			if(that.index>$("#box li").length-1){
				that.index = 0;
			}	
			that.setBgshow();
			that.setBg();
			that.setLiColor();
		},4000)
	}

	event(obj){
		obj.setTime();
		obj.liClick();
		obj.divMouseover();
		obj.upClick();
		obj.nextClick();
	}
}
// 轮播图结束-------------------------------------------------

// 左边侧边栏--------------------------------------------------
$(".slide1-1").each(function(){
	$(this).hover(function(){
		$(".slide-more").css({display:"block"});
		$(this).css({backgroundColor:" #fff"});
	},function(){
		$(this).css({background: "rgba(255,255,255,0.95)"});
		$(".slide-more").css({display:"none"});
	});
})	
$(".slide-more").each(function(){
	$(this).hover(function(){
		$(this).css({display:"block"});
	},function(){
		$(this).css({display:"none"});
	});
})	
$(".slide-more-1 span").html("HUAWEI");
// 公告栏的滑动

// var speed=1;
//         var a=document.querySelector("abs-bottom3-s1-23");
//         var b=document.querySelector("upSlip1");
//         var c=document.querySelector("upSlip2");
//         c.innerHTML=b.innerHTML;
// function marquee(){
//             if (c.offsetHeight-a.scrollTop<=0){
//                 a.scrollTop-=b.offsetHeight;
//             } else{
//                 a.scrollTop ++;
//             }
//         }
//         var h=setInterval(marquee,speed);
//         a.onmouseover=function () {
//             clearInterval(h)
//         }
//         a.onmouseout=function () {
//             h=setInterval(marquee,speed)
//         }
		
		

// 小轮播图---------------------------------------
class BannerMin{
	constructor() {
	    this.index = 0;
		this.time = null;
		// 首先让li的第一个变成红色
		$("#middle4 li").eq(this.index).css({backgroundColor:"red"})	
	}
	// 设置li的颜色  
	setLiColor(){
		$("#middle4 li").eq(this.index).css({backgroundColor:"red"}).stop().siblings().css({backgroundColor:"white"});
	}
	// 背景圖片淡入淡出
	setBgshow(){
		$("#middle4").css({opacity:"0.3"}).animate({opacity:1},500);
		this.setBg();
	}
	// 设置背景色
	setBg(){
		$("#middle4").css({backgroundImage:"url(img/absMin"+this.index+".jpg)"});
	}
	// li的点击
	liClick(){
		let  that =this;
	    $("#middle4 li").each(function(index){
		
		    $(this).click(function(){
			
		    	that.index = index;
				that.setBgshow();
				that.setBg();
				that.setLiColor();
			})	
		})
	}
// div鼠标悬浮其上停止自动转
divMouseover(){
	let that = this;
	$("#middle4").mouseover(function(){
		$("#middle4").unbind("fadeIn fadeOut");
		clearInterval(that.time);
	}).mouseout(function(){
		that.setTime();	
	})
}
// 设置时间
setTime(){
	let that=this;
	
	this.time=setInterval(function(){
		that.index++;
		if(that.index>$("#middle4 li").length-1){
			that.index = 0;
		}
		that.setBgshow();
		that.setBg();
		that.setLiColor();
	},3000)
};
event(obj){
	obj.setTime();
	obj.liClick();
	obj.divMouseover();
};
};
// 小轮播图结束-------------------------------------------------------------------------------------------------
// 底部悬浮显示样式--------------------------------------------------------------
$("#Invisible").css({display:"none"});
$(document).scroll(function(){
	
	if($(window).scrollTop()<=700){
		$("#Invisible").css({display:"none"});
	}else{
		$("#Invisible").css({display:"block"});
	};
});
$("#Invisible").click(function(){
	$(window).scrollTop(0) ;
});

// 精品分页--------精品分页--------精品分页--------精品分页--------精品分页--------------

$(".pageBtn1").css({display:"none"});
let move=0;
let L = $(".middle3 ul li").length;
let page=Math.ceil($(".middle3 ul li").length/5); 
let changePage=1;
$(".pageBtn").click(function(){	
	changePage+=1;
	move-=1210;
	$(".middle3 ul").animate({left:move},500);
		if(changePage==page){
			$(".pageBtn").css({display:"none"});
			
		}
		if(changePage>0){
			$(".pageBtn1").css({display:"block"});
		}
	});
	$(".pageBtn1").click(function(){
		changePage-=1;
		move+=1210;
		$(".middle3 ul").animate({left:move},500);
		if(changePage==1){
			$(".pageBtn1").css({display:"none"});
		}
		if(changePage<page){
			$(".pageBtn").css({display:"block"});
		}
	});
	
// 友情链接
 function fun(){
	let speed=0;
	let nowPage=1;
	$(".friendShipBtn1").click(function(){
		speed+=155.18;
		nowPage++;
		$("#friendShip").animate({left:-speed},500);
		if(nowPage==5){
			$(".friendShipBtn1").unbind("click");
			}
	})
	$(".friendShipBtn2").click(function(){
		speed-=155.18;
		nowPage--;
		$("#friendShip").animate({left:-speed},500)
		if(nowPage==1){
			$(".friendShipBtn2").unbind("click");
		}
	})	
}


