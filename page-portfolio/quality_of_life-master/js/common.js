$(function() {
	$("#menu, section, header").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
		top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});

	$(".main_menu_btt").click(function() {
		$("ul.menu_right").slideToggle();
	}) ;

	$('.owl-carousel').owlCarousel({
		loop:true,
		margin:10,  
		navText : ['',''],
		nav:true,
		responsive:{
			0:{
				items:1
			},
			600:{
				items:1
			},
			1000:{
				items:1
			}
		}
	})




	
});
