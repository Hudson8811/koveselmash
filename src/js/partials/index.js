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



});
