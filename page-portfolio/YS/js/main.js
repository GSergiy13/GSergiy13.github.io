$(document).ready(function() {
 	$('.s19__tit').on('click', function () {
 		$(this).toggleClass('active').siblings('ul').slideToggle()
 	})

 	$('.carousel').carousel()


});
