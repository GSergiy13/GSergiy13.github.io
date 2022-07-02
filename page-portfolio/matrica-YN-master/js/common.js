$(function() {

	$("h1").animated("bounceInDown", "bounceInDown");
	$(".item-lays").animated("rotateInDownRight", "rotateInDownRight");
	$(" h2, section p, section img").animated("bounceIn", "bounceIn");
	$(".yn-img").animated("rotateInDownRight", "rotateInDownLeft");



	$('.mobil-btn').click(function() {
		$('ul.menu-bot').slideToggle();
	});


	$("nav, header, section.slider").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});


	$('.owl-carousel').owlCarousel({
		center: true,
		stagePadding: 300,
		items:1,
		loop:true,
		margin:20,
		nav: true,
		responsive:{
			0:{
				items:1,
				stagePadding: 0
			},

			992:{
				items:1,
				stagePadding: 300
			}
		}
	});

	//Chrome Smooth Scroll
	
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});
