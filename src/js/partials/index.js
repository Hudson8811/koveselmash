$(document).ready(function() {
    $('.home-page .tabs-menu .tab-title').click(function () {
       $(this).addClass('active').siblings('.tab-title').removeClass('active');
       var tab = $(this).data('tab');
       $('#tab-'+tab).addClass('active').siblings('.tab').removeClass('active');
    });

    $('.home-page .tabs-menu #tab-1 .item').hover(function () {
        var bg = $(this).data('bg');
        $('#tab-1').css('background-image', 'url(' + bg + ')');
        $(this).find('.list').slideDown();
    });
    $('.home-page .tabs-menu #tab-1 .item').on("mouseleave", function () {
        $(this).find('.list').slideUp();
    });
    $('.home-page .tabs-menu #tab-2 .item').hover(function () {
        var bg = $(this).data('bg');
        $('#tab-2').css('background-image', 'url(' + bg + ')');
    });

    $('.home-page .popular-spec-products .carousel-title').click(function () {
        $(this).addClass('active').siblings('.carousel-title').removeClass('active');
        var carousel = $(this).data('carousel');
        $('#carousel-'+carousel).addClass('active').siblings('.carousel').removeClass('active');
        if (carousel == 2){
            var popularSwiper2 = new Swiper ('.popular-spec-products #carousel-2 .swiper-container', {
                slidesPerView: 4,
                spaceBetween: 46,
                pagination: {
                    el: '.popular-spec-products #carousel-2 .swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.popular-spec-products #carousel-2 .swiper-button-next',
                    prevEl: '.popular-spec-products #carousel-2 .swiper-button-prev',
                },
                breakpoints: {
                    1250: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                }
            });

        }
    });

    $('.home-page .why-block .title-list .title').click(function () {
        $(this).addClass('active').siblings('.title').removeClass('active');
        var why = $(this).data('why');
        $('#why-content-'+why).addClass('active').siblings('.why-content').removeClass('active');
    });

    $('.home-page .big-tabs .tab-title').click(function () {
        $(this).addClass('active').siblings('.tab-title').removeClass('active');
        var tabb = $(this).data('tabb');
        $('#tabb-'+tabb).addClass('active').siblings('.tab').removeClass('active');
        if (tabb == 3){
            var reviewSwiper = new Swiper ('.big-tabs #tabb-3 .swiper-container', {
                slidesPerView: 2,
                spaceBetween: 30,
                pagination: {
                    el: '.big-tabs #tabb-3 .swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.big-tabs #tabb-3 .swiper-button-next',
                    prevEl: '.big-tabs #tabb-3 .swiper-button-prev',
                },
                breakpoints: {
                    1000: {
                        slidesPerView: 1,
                    },
                }
            });
        }
    });

    $('.home-page .news-tabs .news-tabs-titles .tab-title').click(function () {
        $(this).addClass('active').siblings('.tab-title').removeClass('active');
        var news = $(this).data('news');
        $('#news-tab-'+news).addClass('active').siblings('.news-tab').removeClass('active');
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
    breakpoints: {
        1250: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    }
});



var partnersSwiper = new Swiper ('.partners-block .swiper-container', {
    spaceBetween: 1,
    slidesPerView: 5,
    slidesPerColumn: 3,
    pagination: {
        el: '.partners-block .swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.partners-block  .swiper-button-next',
        prevEl: '.partners-block  .swiper-button-prev',
    },
    breakpoints: {
        1250: {
            slidesPerView: 4,
        },
        1000: {
            slidesPerView: 3,
        },
    }
});

