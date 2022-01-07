$(document).ready(function)(){
//fixed header
$(window).scroll(function)(){
	if($(this).scrollTop > 100){
		$(".header").addclass("fixed");
	}
	else{
		$(".header").removeclass("fixed");
}
}
}


