$(document).ready(function() {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");

    $('.text-block a, .scroll_menu_animate a').on('click', function () {
        var el = $(this);
        var dest = el.attr('href');
        if (dest !== undefined && dest !== '') {
            $('body').removeClass('blocked');
            $('html').animate({
                    scrollTop: $(dest).offset().top
                }, 500
            );
        }
        return false;
    });

    $('#search-toggle').click(function () {
        event.preventDefault();
        $('#menu-search-line').slideToggle();
    });

    $('.mobile-header-menu .level-1:not(.no_child) > a').click(function () {
        event.preventDefault();
        $(this).parents('.level-1').toggleClass('open');
        $(this).siblings('.dropdown-block').slideToggle();
    });

    $('#mobile-menu-toggle').click(function () {
        event.preventDefault();
        $(this).toggleClass('active');
        $('.mobile-header-menu').slideToggle();
        $('body').toggleClass('shadow');
    });

    $(document).mouseup(function (e){
        var div = $(".more-langs");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass('active');
            $('.change-lang').removeClass('active');
        }
    });
/*
    $('.level-1 > a').click(function () {
        $('.level-1 > a').not(this).removeClass('active');
        $(this).toggleClass('active');
    });

    $('.level-1 .menu-item.parent > a').click(function () {
        event.preventDefault();
        $(this).parents('.parent').toggleClass('active').find('.inner-menu').slideToggle();
    });



    $(document).mouseup(function (e){
        var div = $(".drop-block");
        var div2 = $('.level-1 > a');
        if ( (!div.is(e.target) && div.has(e.target).length === 0) && (!div2.is(e.target) && div2.has(e.target).length === 0)) {
            $('.level-1 > a').removeClass('active');
        }
    });
*/

    $('.level-1 .menu-item.parent').hover(function () {
        $(this).find('.inner-menu').stop(true,true);
        $(this).find('.inner-menu').slideDown();
    });
    $('.level-1 .menu-item.parent').on('mouseleave', function () {
        $(this).find('.inner-menu').stop(true,true);
        $(this).find('.inner-menu').slideUp();
    });


    $('.level-1 .diler-col .list-item > a').click(function () {
        event.preventDefault();
        var diler = $(this).data('diler');
        $(this).parents('.list-item').addClass('active').siblings('.list-item').removeClass('active');
        $('#diler-'+diler).addClass('active').siblings('.diler').removeClass('active');
    });

    $('#breadcrumbs li').eq(-2).addClass('prelast');

    $('.select-style').niceSelect();


    $('#mobile-menu-toggle').click(function () {
        event.preventDefault();
    });
});
