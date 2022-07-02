$(function() {
	// $("header, section.sec-3, section.sec-1").on("click","a", function (event) {
	// 	event.preventDefault();
	// 	var id  = $(this).attr('href'),
	// 	top = $(id).offset().top;
	// 	$('body,html').animate({scrollTop: top}, 1500);
	// });
	//Chrome Smooth Scroll

	$('.popub').magnificPopup();

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
