class Cart{
			constructor(){
				
			}
			// 计算一共有多少个商品
			getTotalNum(){
				var tab=document.getElementById("tab1");
				let oGoodsNum=tab.getElementsByClassName("goods-num");
				let totalNum=0;
				for(let i=0;i<oGoodsNum.length;i++){
					totalNum+=Number( oGoodsNum[i].innerHTML);
				}
				let oTotalNum=document.getElementById("total-num");
				oTotalNum.innerHTML=totalNum;
			}
			// 一共多少钱
			getTotalPrice(){
				var tab=document.getElementById("tab1");
				let oSum=tab.getElementsByClassName("sum");
				let totalPrice=0;
				for(let i=0;i<oSum.length;i++){
					totalPrice+=Number(oSum[i].innerHTML);
					
				}
				let oTotalPrice=document.getElementById("total-price");
				oTotalPrice.innerHTML=totalPrice;
			}
			getSum(num,price){
				return num*price;
			}
			goodsAdd(btn){
				let oGoodsNum=btn.previousElementSibling;
				oGoodsNum.innerHTML=+oGoodsNum.innerHTML+1;
				let oGoodsPrice=btn.parentNode.nextElementSibling.firstElementChild;
				let oGoodsSum=btn.parentNode.nextElementSibling.nextElementSibling.firstElementChild;
				// 调用定义的方法改变小计的值
				oGoodsSum.innerHTML=this.getSum(oGoodsNum.innerHTML,oGoodsPrice.innerHTML);
				
				this.getTotalNum();
				this.getTotalPrice();
			}
			goodsMin(btn){
				let oGoodsNum=btn.nextElementSibling;
				if(oGoodsNum.innerHTML>=1){
					oGoodsNum.innerHTML=+oGoodsNum.innerHTML-1;
					
					let oGoodsPrice=btn.parentNode.nextElementSibling.firstElementChild;
					let oGoodsSum=btn.parentNode.nextElementSibling.nextElementSibling.firstElementChild;
					// 调用定义的方法改变小计的值
					oGoodsSum.innerHTML=this.getSum(oGoodsNum.innerHTML,oGoodsPrice.innerHTML);
					
					this.getTotalNum();
					this.getTotalPrice();
				}
			}
			delete(btn){
				let tr = btn.parentNode.parentNode;
				tr.remove();
				
				this.getTotalNum();
				this.getTotalPrice();
			}
			add(btn){
				var price=btn.parentNode.previousSibling.childNodes[1].innerHTML;
				var name=btn.parentNode.previousElementSibling.previousElementSibling.innerHTML;
				this.addRow(name,price,price);
			    
				
			}
			addRow(name,price,sumprice){
	
	         var tab=document.getElementById("tab1");
			 
			 
	         var html='<td>'+name+'</td><td> <button type="button">-</button>&nbsp;<span class="goods-num">0</span> <button type="button">+</button></td><td>￥<span  class="goods-price">'+price+'</span></td><td>小计：<span class="sum">'+sumprice+'</span></td><td><input type="button" name="" id="" value="删除" /></td>';
			 var tr=document.createElement('tr');
			 console.log(html);
			 
			 var tb=tab.getElementsByTagName("tbody")[0];
			 tr.innerHTML=html;
			 tb.insertBefore(tr,tb.lastElementChild);
			 	 
	// 		 this.getTotalNum();
	// 		 this.getTotalPrice();
			 this.eventBind();
			} 
			eventBind(){
					var tab=document.getElementById("tab1"); 
				let oBtn=tab.getElementsByTagName("button");
				let that=this;
				for(let i=0;i< oBtn.length;i++){
					if(i%2==0){
						
						// i为偶数时调用减函数
						oBtn[i].onclick=function(){
						that.goodsMin(this)
						}
					}else{
						oBtn[i].onclick=function(){
							that.goodsAdd(this);
						}
					}
				}
				let btnDel=tab.getElementsByTagName("input");
				
				for(let i=0;i<btnDel.length;i++){
					btnDel[i].onclick=function(){
						that.delete(this);
					}
				}
					var tab2=document.getElementById("tab2");
				let btnadd=tab2.getElementsByTagName("input");
					
				for(let i=0;i<btnadd.length;i++){
					btnadd[i].onclick=function(){
						that.add(this);
					}
				}
			}
			
			
			
		}
		
		let c=new Cart();
		c.eventBind();