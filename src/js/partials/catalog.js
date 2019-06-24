$(document).ready(function() {

    $('.left_side-catalog_tabs .dt ul a').click(function() {
        $(this).closest('.dt').find('a').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.left_side-catalog_tabs').find('.item').removeClass('active')
            .eq($(this).parent().index()).addClass('active');
        return false;
    });


    $('.multiple [data-accordion]').accordion({
        /*singleOpen: false*/
    });

    $('.catalog-page .content-catalog .tab-title').click(function () {
        $(this).addClass('active').siblings('.tab-title').removeClass('active');
        var tab = $(this).data('tab');
        $('#tab-'+tab).addClass('active').siblings('.tab').removeClass('active');
    });


});
