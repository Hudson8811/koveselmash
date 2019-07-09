$(document).ready(function () {

    $('.left_side-catalog_tabs .dt ul a').click(function () {
        $(this).closest('.dt').find('a').removeClass('active');
        $(this).addClass('active');
        $(this).closest('.left_side-catalog_tabs').find('.item').removeClass('active')
            .eq($(this).parent().index()).addClass('active');
        return false;
    });


    $('.multiple [data-accordion]').accordion({
        singleOpen: false
    });

    $('.catalog-page .content-catalog .tab-title').click(function () {
        $(this).addClass('active').siblings('.tab-title').removeClass('active');
        var tab = $(this).data('tab');
        $('#tab-' + tab).addClass('active').siblings('.tab').removeClass('active');
    });





    $('#customScrollOnCatalog').attr("max", $('#scroll table tbody').width() - $('#scroll').width());

    $('#scroll').scroll(function () {
        console.log($('#scroll').scrollLeft() + "    width=" + ($('#scroll table tbody').width() - $('#scroll').width()));
        $('#customScrollOnCatalog').val($('#scroll').scrollLeft());
        $('input[type="range"]').rangeslider('update', true);
    });

   /* $('#customScrollOnCatalog').on('mousemove change', function () {
        console.log($('#customScrollOnCatalog').val());
        $('#scroll').scrollLeft($('#customScrollOnCatalog').val());
    });*/
    function updateValueScroll(pos, value){
        console.log(value);
        $('#scroll').scrollLeft(value);
    }
    $(window).resize(function () {
        $('#customScrollOnCatalog').attr("max", $('#scroll table tbody').width() - $('#scroll').width());

    });
    $('#customScrollOnCatalog').rangeslider({
        polyfill: false,
        onSlide: function(pos, value) {
            updateValueScroll(pos, value);
          }
      });





});
