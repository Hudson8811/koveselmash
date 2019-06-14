$(document).ready(function() {
    $('.home-page .tabs-menu .tab-title').click(function () {
       $(this).addClass('active').siblings('.tab-title').removeClass('active');
       var tab = $(this).data('tab');
       $('#tab-'+tab).addClass('active').siblings('.tab').removeClass('active');
    });

    $('.home-page .tabs-menu #tab-1 .item').hover(function () {
        var bg = $(this).data('bg');
        $('#tab-1').css('background-image', 'url(' + bg + ')');
    });

    $('.home-page .popular-spec-products .carousel-title').click(function () {
        $(this).addClass('active').siblings('.carousel-title').removeClass('active');
        var carousel = $(this).data('carousel');
        $('#carousel-'+carousel).addClass('active').siblings('.carousel').removeClass('active');
    });


});

var popularSwiper = new Swiper ('.popular-spec-products #carousel-1 .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 46,
    pagination: {
        el: '.popular-spec-products #carousel-1 .swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.popular-spec-products #carousel-1 .swiper-button-next',
        prevEl: '.popular-spec-products #carousel-1 .swiper-button-prev',
    },

})