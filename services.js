// this is to bring arrow to top of page
$(document).on("ready",function(){
$(".link").on("click",function(e){
 	// console.log(this)
  	e.preventDefault();
		var scrollTime= 500
	  	if( $(this).hasClass("link_home") ){
	  		$.scrollTo("#section1",scrollTime,{
	  			offset: -100
  			});
  		};
	});
});
