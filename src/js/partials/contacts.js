$(document).ready(function() {
    $('.contacts-page .tabs .tab-title').click(function () {
        $(this).addClass('active').siblings('.tab-title').removeClass('active');
        var tab = $(this).data('tab');
        $('#tab-'+tab).addClass('active').siblings('.tab').removeClass('active');
    });


});