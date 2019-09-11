$(document).ready(function () {

    $('.left_side-catalog_tabs .dt ul a').click(function () {
        $(this).closest('.dt').find('a').removeClass('active');
        $(this).closest('.dt').find('a').parent().removeClass('active');

        $(this).addClass('active');
        $(this).parent().addClass('active');
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


    $(".catalog_table-2 #scroll ").smoothDivScroll({
        mousewheelScrolling: "allDirections",
        manualContinuousScrolling: false,
        touchScrolling: true,
        scrollingHotSpotLeftClass: "scrollingHotSpotLeft2",
        scrollingHotSpotRightClass: "scrollingHotSpotRight2"


    });

    /*
    $('#customScrollOnCatalog').attr("max", $('#scroll table tbody').width() - $('#scroll').width());

    $('#scroll').scroll(function () {
        console.log($('#scroll').scrollLeft() + "    width=" + ($('#scroll table tbody').width() - $('#scroll').width()));
        $('#customScrollOnCatalog').val($('#scroll').scrollLeft());
        $('input[type="range"]').rangeslider('update', true);
    });*/

    /* $('#customScrollOnCatalog').on('mousemove change', function () {
         console.log($('#customScrollOnCatalog').val());
         $('#scroll').scrollLeft($('#customScrollOnCatalog').val());
     });*/
    /*function updateValueScroll(pos, value) {
        console.log(value);
        $('#scroll').scrollLeft(value);
    }
    $(window).resize(function () {
        $('#customScrollOnCatalog').attr("max", $('#scroll table tbody').width() - $('#scroll').width());

    });
    $('#customScrollOnCatalog').rangeslider({
        polyfill: false,
        onSlide: function (pos, value) {
            updateValueScroll(pos, value);
        }
    });*/


    ///////////////////////////////////////////////////

    $('.catalog_tov').click(function () {
        if (document.getElementById("page-wrapper").classList.contains("catalog-page")) {
            if ($(window).width() <= 1250) {
                if (!$('.dd.rL').is(':visible')) {
                    //    $('.left_side-catalog_tabs>div:last-child').stop().slideDown(200);

                    $('.left_side-catalog_tabs').removeClass('closed');
                }
                else {
                    //  $('.left_side-catalog_tabs>div:last-child').stop().slideUp(200);
                    $('.left_side-catalog_tabs').addClass('closed');
                    console.log(2);

                }
            }
        }


    });

    function makeAdaptive__catalog_page() {
        if (document.getElementById("page-wrapper").classList.contains("catalog-page")) {
            if ($(window).width() <= 1250 /* && 700< $(window).width() */) {
                $("[data-accordion]").removeClass('open');



            }
            else {

                $('.left_side-catalog_tabs>div:last-child').stop().slideDown(0);
                $('.left_side-catalog_tabs').removeClass('closed');
            }
               if ($(window).width() <= 700) {
                   $("[data-accordion]").removeClass('open');

                   $('.left_side-catalog_tabs .dt ul li a').removeClass('active');
                   $('.left_side-catalog_tabs .dt ul li:first-child a').addClass('active');

                   $('.left_side-catalog_tabs .dt ul li').removeClass('active');
                   $('.left_side-catalog_tabs .dt ul li:first-child').addClass('active');

                   $('.dd.rL .item').removeClass('active');
                   $('.dd.rL .item:first-child').addClass('active');

               }
               else {

               }
        }
    }





    makeAdaptive__catalog_page();


    $(window).resize(function () {
        makeAdaptive__catalog_page();
    });




});
