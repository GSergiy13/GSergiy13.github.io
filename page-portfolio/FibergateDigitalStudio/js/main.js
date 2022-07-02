$(document).ready(function () {

  // menu
  var $page = $('html, body');
  $('a[href*="#"]').click(function() {
      $page.animate({
          scrollTop: $($.attr(this, 'href')).offset().top
      }, 800);
      return false;
  });

  // inputValid
  $('input[name=user_phone]').mask("+38 (999) 999-99-99");

  // buttonMobil
  $('.button__mobail').click(function () {
    $(".menu__list").slideToggle();
  });


  $('.slider__slick').slick({
    infinite: true,
    slidesToShow: 5,
    customPaging: 20,
    autoplay: true,
    centerMode: true,
    prevArrow: '<button type="button" aria-label="Previous" role="button" class="slick-arrow slick-arrow--prev"></button>',
    nextArrow: '<button type="button" aria-label="Next" role="button" class="slick-arrow slick-arrow--next"></button>',
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          customPaging: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
          centerMode: false,
          customPaging: false
        }
      }
    ]
  });



  $('.sliders-footer').slick({
    infinite: true,
    slidesToShow: 3,
    autoplay: true,
    centerMode: true,
    autoplaySpeed: 5000,
    prevArrow: '<button type="button" aria-label="Previous" role="button" class="slick-arrow slick-arrow--prev"></button>',
    nextArrow: '<button type="button" aria-label="Next" role="button" class="slick-arrow slick-arrow--next"></button>',
    responsive: [{
        breakpoint: 992,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          adaptiveHeight: true,
          centerMode: false,
          customPaging: false
        }
      }
    ]
  });



 function caunterSlider (classSlider, classCaunter) {
    $(classSlider).on('afterChange', function(event, slick, currentSlide){
        $(classCaunter).text(currentSlide + 1);
    });
 }

 caunterSlider('.slider__slick', '.cp');
 caunterSlider('.sliders-footer', '.cp1');




  $(function () {
    $('.minimized').click(function (event) {
      var i_path = $(this).attr('src');
      $('body').append('<div id="overlay"></div><div id="magnify"><img src="' + i_path + '"><div id="close-popup"><i></i></div></div>');
      $('#magnify').css({
        left: ($(document).width() - $('#magnify').outerWidth()) / 2,
        // top: ($(document).height() - $('#magnify').outerHeight())/2 upd: 24.10.2016
        top: ($(window).height() - $('#magnify').outerHeight()) / 2
      });
      $('#overlay, #magnify').fadeIn('fast');
    });

    $('body').on('click', '#close-popup, #overlay', function (event) {
      event.preventDefault();
      $('#overlay, #magnify').fadeOut('fast', function () {
        $('#close-popup, #magnify, #overlay').remove();
      });
    });
  });

  
});
