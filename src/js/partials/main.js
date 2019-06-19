$(document).ready(function() {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");


    $(document).mouseup(function (e){
        var div = $(".more-langs");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass('active');
            $('.change-lang').removeClass('active');
        }
    });

    $('.level-1 > a').click(function () {
        $('.level-1 > a').removeClass('active');
        $(this).addClass('active');
    });

    $('.level-1 .menu-item.parent > a').click(function () {
        event.preventDefault();
        $(this).parents('.parent').toggleClass('active').find('.inner-menu').slideToggle();
    });

    $('.level-1 .diler-col .list-item > a').click(function () {
        event.preventDefault();
        var diler = $(this).data('diler');
        $(this).parents('.list-item').addClass('active').siblings('.list-item').removeClass('active');
        $('#diler-'+diler).addClass('active').siblings('.diler').removeClass('active');
    });


    $(document).mouseup(function (e){
        var div = $(".drop-block");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $('.level-1 > a').removeClass('active');
        }
    });

    $('#breadcrumbs li').eq(-2).addClass('prelast');

    $('.select-style').niceSelect();
});
