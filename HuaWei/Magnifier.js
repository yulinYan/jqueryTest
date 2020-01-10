class Magnifier{
		constructor(newsmall,newbox,newbig) {
		    this.oSmall=newsmall;
			this.oBox=newbox;
			this.oBig=newbig;
		}
		onmouseover(){
			let that=this;
			this.oSmall.onmouseover=function(){
				that.oBox.style.display="block";
				that.oBig.style.display="block";
			}
			
		}
		onmouseout(){
			let that=this;
			this.oSmall.onmouseout=function(){
				that.oBox.style.display="none";
				that.oBig.style.display="none";
			}
		}
		onmousemove(){
			let that=this;
			this.oSmall.onmousemove=function(evt){
				let e=evt||event;
				let left=e.pageX-this.offsetLeft-(window.innerWidth-1200)/2-that.oBox.offsetWidth/2;
				let top=e.pageY-this.offsetTop-130-that.oBox.offsetHeight/2;
				if(left<0){
					left=0;
				}
				if(top<0){
					top=0;
				}
				if(left>this.offsetWidth-that.oBox.offsetWidth){
					left=this.offsetWidth-that.oBox.offsetWidth;
				}
				if(top>this.offsetHeight-that.oBox.offsetHeight){
					top=this.offsetHeight-that.oBox.offsetHeight;
				}
				
				that.oBox.style.left=left+"px";
				that.oBox.style.top=top+"px";
				
				let x=that.oBig.offsetWidth*left/that.oBox.offsetWidth;
				let y=that.oBig.offsetHeight*top/that.oBox.offsetHeight;
				
				that.oBig.style.backgroundPositionX=-x+"px";
				that.oBig.style.backgroundPositionY=-y+"px";
				
			}
		}
		
	}
	
$(".open").click(function(){
	document.open('loginM.html','loginM','false');
})
// 购物车旁边点加加  点击减减
let num = 1;

$(".last2-1").click(function(){
	num++;
	$(".last1").html(num);
	$(".last2-2").css({cursor:"pointer"})
})
$(".last2-2").click(function(){
	num--;
	$(".last1").html(num);
	if(num<=1){
		$(".last1").html(1);
		num=1;
		$(".last2-2").css({cursor:"not-allowed"})
	}
	
})
// 点击加入购物车弹出框框
$(".last-a1").click(function(){
	$(".last-a1-open").css({display:"block"});
})
// 加入购物车弹出框
// 点击再逛逛关闭弹出框
$(".seeAgain").click(function(){
	$(".last-a1-open").css({display:"none"});
})
$(".closeIt").click(function(){
	$(".last-a1-open").css({display:"none"});
})
let speed = 30;
$(".prebtn").click(function(){
	speed+=149;
	$("#Mid3-ul").animate({left:speed},400);
})
$(".nextbtn").click(function(){
	speed-=149;
	$("#Mid3-ul").animate({left:speed},400);
})
// 友情链接
//  function fun(){
// 	let speed=0;
// 	let nowPage=1
// 	$(".friendShipBtn1").click(function(){
// 		speed+=155.18;
// 		nowPage++;
// 		$("#friendShip").animate({left:-speed},500);
// 		if(nowPage==5){
// 			$(".friendShipBtn1").unbind("click");
// 			}
// 	})
// 	$(".friendShipBtn2").click(function(){
// 		speed-=155.18;
// 		nowPage--;
// 		$("#friendShip").animate({left:-speed},500)
// 		if(nowPage==1){
// 			$(".friendShipBtn2").unbind("click");
// 		}
// 	})	
// }