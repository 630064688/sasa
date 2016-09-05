window.onload=window.onscroll=window.onresize=function(){
	$(function(){
		//li划过添加类名 变色
		$(".ulnav>li").hover(function(){
			$(this).addClass("on").siblings().removeClass("on");
		},function(){
			$(this).removeClass("on");
		})
		//li划过  子菜单显示
		$("li:has(.subone)").hover(function(event){
//			if($(this)==event.target){
//				
//			}
			$(this).children().slideDown(200).find("dd").addClass("on").siblings().removeClass("on");
		},function(event){
			$(this).children().slideUp(200);
		})
		
/////////////////////////////////////注册验证
		var tex=$("#tex").val();
		var pas=$("#pas").val();
		var pass=$("#pass").val();
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	})//
	
}
