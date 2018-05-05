	$(function(){
           		var innerGroup=$('.innerwraper');//转载图片的小盒子
           		var scroll=$('.innerwraper');
           		var leftArrow=$('.left-arrow');//左边按钮
           		var rightArrow=$('.right-arrow');
           		var spanGroup=$('.paginat span');
           		var imgwidth=$('.innerwraper:first-child').eq(0).width();
           		var $banner_Left=$('.innerwraper').children('.banner_left');
           		var $banner_Right=$('.innerwraper').children('.banner_right');
           		var width=$(window).width();
           		_index=0;//下标
        		var type=1;
           		var timer=null;//计时器
           		var flag=true;//控制器
                             
                 	$('.innerwraper').eq(0).fadeIn().addClass('mov');
         			$('.innerwraper').eq(0).siblings().removeClass('mov').fadeOut();
        
           		function selectPic(num){          			                          
           			$('.paginat span').eq(num).addClass("active").siblings().removeClass("active"); 
        			$('.innerwraper').eq(num).fadeIn().addClass('mov');
         			$('.innerwraper').eq(num).siblings().removeClass('mov').fadeOut();
           			
           			_index++;
                }
         			//计时器函数
	      		function go(){
	
 				   if(_index>innerGroup.length-1){
		   				   	_index=0;
		   				   	
		   				   }

	      			selectPic(_index);
	      		}
	      		
	      		
	      		
	      		
      			//自动轮播		
	       		function autoGo(bol){
	      			if(bol){
	     				
	      				timer=setInterval(go,2500);
	      			}
	      		}  
	      		//调用
        		autoGo(flag);
        		//圆形按钮点击事件
         	 	spanGroup.click(
         	 		
         	 	 	function(){
         	 	 	_index=spanGroup.index($(this));
         			selectPic(_index);
         			
         	 	 	}
         	 	 	
         	 	)
         	 	
	         	 	
         	 	
         	 	
         	 	
         	 	
         	 	
         	 /*--	spanGroup.click(
         	 		
         	 	 	function(){go();
         	 	 	_index=spanGroup.index($(this));
         			selectPic(_index);
         			
         	 	 	}
         	 	 	
         	 	)*/
         	 	
         	 	
         	 	
           		//左边按钮点击事件
	       		leftArrow.click(function(){
		  			flag=false;
		   			clearInterval(timer);
						//单点击的是第一个按钮时
		       			if(_index==0){
		       				_index=innerGroup.length-1;//获取最后一个元素的下标
		       				$('.innerwraper').eq(_index).fadeIn().siblings().fadeOut();
		 				    $('.paginat span').eq(_index).addClass('active').siblings().removeClass("active");
		       				
		       			}else{
		       				_index--;
		  			selectPic(_index);
		       			}
	     			
	       		})
       			//右边按钮点击事件
	       		rightArrow.click(function(){
	     			flag=false;
	     			clearInterval(timer);
	     			
       			//单点击的是最后一个按钮时
	       			if(_index==innerGroup.length-1){
	       				_index=0;//获取最第一个元素的下标
	       				
	       				$('.innerwraper').eq(_index).fadeIn().siblings().fadeOut();
	 				    $('.paginat span').eq(_index).addClass('active').siblings().removeClass("active");
	       				
	       			}
	       			else{
	       				_index++;
	  					selectPic(_index);
	       			}
	       		})
	       		
	       		
	       		
         	
           	})
