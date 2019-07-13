$(document).ready(function() {
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
});