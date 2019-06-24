$(document).ready(function() {
    var productSwiper = new Swiper ('.product-main-info-block .swiper-container', {
        slidesPerView: 1,
        pagination: {
            el: '.product-main-info-block .swiper-pagination',
            clickable: true,
        },

        navigation: {
            nextEl: '.product-main-info-block .swiper-button-next',
            prevEl: '.product-main-info-block .swiper-button-prev',
        },
    });

    $('.scroll-js').scrollbar();

    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    $('.product-tabs .tab-title:not(.disabled)').click(function () {
        $(this).addClass('active').siblings('.tab-title').removeClass('active');
        var tab = $(this).data('tab');
        $('#tab-'+tab).addClass('active').siblings('.tab').removeClass('active');
    });

    $('.commetns-form .stars .star').click(function () {
        var star = $(this).data('star');
        $(this).parents('.stars').removeAttr('class').addClass('stars stars-'+star);
    });
});