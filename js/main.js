$(window).on('scroll', function(){
	if($(window).scrollTop()){
		$('.main-menu').addClass('white');
	}
	else{
		$('.main-menu').removeClass('white');
	}
})