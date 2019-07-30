



$(document).ready(function () {

    if (document.getElementById("page-wrapper").classList.contains("repres-page")) {

        $('.country').hover(
            function (e) {
                $('#hb_' + $(this).attr('data-country')).addClass('visible');

                /*   var parentOffset = $(this).parent().parent().offset();
                   var relX = e.pageX - parentOffset.left;
                   var relY = e.pageY - parentOffset.top;
                   $('#hb_' + $(this).attr('data-country')).css({top: relY, right: 'calc(100% - '+relX+'px - 10px)'});*/
                //  $('#hb_' + $(this).attr('data-country')).css({top: relY, left: relX});
                if ($(window).width() <= 700) {
                    $('.country').mousemove(function (e) {
                        var parentOffset = $(this).parent().parent().offset();
                        var relX = e.pageX - parentOffset.left;
                        var relY = e.pageY - parentOffset.top;
                        $('#hb_' + $(this).attr('data-country')).css({ top: relY - 80, right: 'calc(100% - ' + relX + 'px - 35px' });
                    });
                }
                else {
                    $('.country').mousemove(function (e) {
                        var parentOffset = $(this).parent().parent().offset();
                        var relX = e.pageX - parentOffset.left;
                        var relY = e.pageY - parentOffset.top;
                        $('#hb_' + $(this).attr('data-country')).css({ top: relY - 80, right: 'calc(100% - ' + relX + 'px - 35px' });
                    });
                }


            },
            function (e) {
                $('#hb_' + $(this).attr('data-country')).removeClass('visible');

            }

        );






        function makeAdaptive__repres_page() {



            if ($(window).width() <= 800) {
                $('.map').after($('.btn-repres'))
            }

            else {
                $('.left .text').after($('.btn-repres'))

            }

        }





        window.onload = function () {

            makeAdaptive__repres_page();

        };

        $(window).resize(function () {
            makeAdaptive__repres_page();
        });

    }

});
