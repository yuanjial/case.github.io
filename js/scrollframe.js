var $move_LeftIn=$('.move_LeftIn');
var $move_RightIn=$('.move_RightIn');
var $flin=$('.flin');
var $riin=$('.riin');
var $sf_LeftIn=$('.sf_LeftIn');
var $new_line=$('.new_line');
var $parter=$('.parter');
var $Public_Rightin=$('.Public_Rightin');
var j=1;
var k=-1; 
var fadeOutLeft =" fadeOutLeft",
	fadeInLeft =" fadeInLeft",
	fadeOutRight = "fadeOutRight",
	fadeInRight = "fadeInRight";
//	滑进滑出   

var $Public_Leftin_2=$('.Public_Leftin_2');
var $Public_Leftin_3=$('.Public_Leftin_3');
var $Public_Leftin_4=$('.Public_Leftin_4');
var $Public_Leftin_5=$('.Public_Leftin_5');
var $Public_Leftin_6=$('.Public_Leftin_6');
var $Public_Leftin_7=$('.Public_Leftin_7');
var $Public_Rightin_3=$('.Public_Rightin_3');
var $Public_Rightin_4=$('.Public_Rightin_4');
var $Public_Rightin_5=$('.Public_Rightin_5');
var $Public_Rightin_6=$('.Public_Rightin_6');
var $Public_Rightin_7=$('.Public_Rightin_7');



function Public_right(i){
	
    $move=$(function() { 
					return "put-section-"+i; 
				}).find('.move_RightIn');
			animate($move.eq(i),j);	
			animate($move.eq(i-1),null);
			animate($move.eq(i+1),k);
}



function animate(obj,type){     
	var left=0, opacity= 1;
		if(type==1){			
			left = '100%';
			opacity = '0';				
			}else if(type==-1){
			
			left='-100%';
			opacity='0';
	
			}			
			obj.animate({
			left:left,
			opacity:opacity
		},800);
		
		
	}
//动态添加 移除类名
function translate(obj,class_First,class_Second){
	obj.addClass(function() { 		
					return class_First; 
				}).removeClass(function() { 
					return class_Second;
				});
}
//动态显示图片
 function Case_Show(j){
	for(var i=0;i<=$('.fl_line').length;i++){	
			       var $case=$('.fl_line').eq(i);			       		   			  
					$case.animate({
						left: j*(100+130*i),
						opacity:1
					},300);								   			
	}	
 }
 function Public_Leftin(num){
 	switch (num)
		{
			case 0://轮播图
			
			animate($parter,j)
			animate($Public_Leftin_2,j);
			break;
			
			case 1://关于我们$('.Public_Leftin')
			animate($Public_Leftin_3,j);
			animate($Public_Rightin_3,k)
			animate($Public_Leftin_2,null);
			break;
			
			
			
			case 2://我们的服务
			animate($Public_Leftin_2,j);
			animate($Public_Leftin_3,null);
			animate($Public_Rightin_3,null)
			animate($Public_Leftin_4,j);			
			animate($Public_Rightin_4,k);
			break;
			
			case 3://开发流程
			animate($Public_Leftin_3,j);
			animate($Public_Rightin_3,k);
			animate($Public_Leftin_4,null);			
			animate($Public_Rightin_4,null);
			break;
			
			case 4://经典案例
			 animate($Public_Leftin_4,j);			
			animate($Public_Rightin_4,k);
			 Case_Show(j);
			 animate($Public_Leftin_6,k);
			break;
			
			case 5://新闻中心
			animate($Public_Leftin_6,null);
			animate($Public_Leftin_7,j);
			animate($parter,k)
			break;
			
			case 6://合作伙伴
			animate($Public_Leftin_6,k);
			animate($Public_Leftin_7,null);
			animate($parter,null)
			break;
			
			case 7:
			animate($Public_Leftin_7,null);
			//联系我们展示
			animate($parter,j)
			break;
			
		}
 }
 
