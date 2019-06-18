$(document).ready(function() {
    $("input[name='phone']").mask(" +7 (999) 999-99-99");

    $('.select-style').niceSelect();

    $('.change-lang').click(function () {
       $(this).siblings('.more-langs').addClass('active');
       $(this).addClass('active');
    });

    $(document).mouseup(function (e){
        var div = $(".more-langs");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass('active');
            $('.change-lang').removeClass('active');
        }
    });

});
