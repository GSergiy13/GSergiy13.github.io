$(function () {

    $('.banner-section__slider').slick({
        dots: true,
        nextArrow:'<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/icon/slider-button__n.svg" alt="button-right"></button>',
        prevArrow:'<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/icon/slider-button__p.svg" alt="button-right"></button>',
        autoplay: true,
    });

    $('.tab').on('click', function(e) {
        e.preventDefault();

        $($(this).siblings()).removeClass('tab--active');
        $($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

        $(this).addClass('tab--active');
        $($(this).attr('href')).addClass('tabs-content--active');
    });

    $('.product-item__favorite').on('click', function(e) {
        $(this).toggleClass('product-item__favorite--active');
    });

    $('.product-slider').slick({
        nextArrow:'<button class="banner-section__slider-btn product-slider__slider-btnnext"><img src="images/icon/slider-button__n-b.svg" alt="button-right"></button>',
        prevArrow:'<button class="banner-section__slider-btn product-slider__slider-btnprev"><img src="images/icon/slider-button__p-b.svg" alt="button-right"></button>',
        autoplay: true,
        slidesToShow: 4,
        infinite: true,
    });


    $('.filter-style').styler();


    $('.filter__item-drop, .filter__extra').on('click', function(){
        $(this).toggleClass('filter__item-drop--active');
        $(this).next().slideToggle('200');
    });

    $('.catalog__filter-btngrid').on('click', function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btnline').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').removeClass('product-item__wrapper--list');
    });

    $('.catalog__filter-btnline').on('click', function(){
        $(this).addClass('catalog__filter-button--active');
        $('.catalog__filter-btngrid').removeClass('catalog__filter-button--active');
        $('.product-item__wrapper').addClass('product-item__wrapper--list');
    });

    $("#example_id").ionRangeSlider( {
        grid: false,
        type: "double",
        min: 100000,
        max: 500000,
    });

    $(".rateYo").rateYo({
        spacing   : "7px",
        ratedFill: "#1C62CD",
        normalFill: "#c4c4c4",
        starWidth: "25px"
      });
});

