



$(document).ready(function () {

    if (document.getElementById("page-wrapper").classList.contains("repres-page")) {

        $('.country').hover(
            function (e) {
                $('#hb_' + $(this).attr('data-country')).addClass('visible');

                if ($(window).width() <= 700) {
                    $('.country').mousemove(function (e) {
                        var parentOffset = $(this)/*.parent()*/.parent().offset();
                        var relX = e.pageX - parentOffset.left;
                        var relY = e.pageY - parentOffset.top;
                        $('#hb_' + $(this).attr('data-country')).css({ top: relY - 80, right: 'calc(100% - ' + relX + 'px - 35px' });
                    });
                }
                else {
                    $('.country').mousemove(function (e) {
                        var parentOffset = $(this)/*.parent()*/.parent().offset();
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

        $('.map path').click(function (e) {
            var $id = $('#content_' + $(this).attr('data-country'));
            $id.click();
            $('.toggle .toggle_item:last-child').click();
            // $id.click();
        });




        $('.toggle .toggle_item').click(
            function (e) {
                //console.log($(this).index());
                var $this = $(this);
                if ($this.index() == 0) {
                    $('#page-wrapper > div.map').fadeIn(200);
                    $('#page-wrapper > div.map-text-container.container > div > div.map-text').fadeIn(200);
                    $('#page-wrapper').removeClass('repres-page-list');
                    // $('#page-wrapper > div.map-text-container.container > .left').fadeOut(200);

                }

                if ($this.index() == 1) {
                    $('#page-wrapper > div.map').fadeOut(200);
                    $('#page-wrapper > div.map-text-container.container > div > div.map-text').fadeOut(200);
                    $('#page-wrapper').addClass('repres-page-list');
                    $('#page-wrapper > .diller-tabs').fadeIn(200);
                }

                $this.addClass('active').siblings().removeClass('active');
            }
        );
        $('.category .item .contacts').slideUp(0);
        $('.category .item .name').click(
            function (e) {
                $(this).siblings('.contacts').stop().slideToggle(200, function () {

                    if ($(this).is(':visible')) {
                        $(this).css('display', 'flex');
                    }

                });
                $(this).parent().toggleClass('closed');


            }
        );

        $('#page-wrapper > div.map-text-container.container > div > div.diller-tabs > div.tabs > div.item').click(function (e) {
            $(this).addClass('active').siblings().removeClass('active');
            $("#page-wrapper > div.map-text-container.container > div > div.diller-tabs > div.content").eq($(this).index()).addClass('active').siblings('.content').removeClass('active');
        });


        function makeAdaptive__repres_page() {
            if ($(window).width() <= 800) {
                $('.map').after($('.btn-repres'))
            }
            else {
                $('.left .text').after($('.btn-repres'))

            }

          /*  console.log($(window).width());*/
            if ($('#mobile-indicator').is(':visible')) {
                if (!$('.activeTab').length > 0) {
                    $('.diller-tabs').prepend('<div class="activeTab closed">' + $('.diller-tabs .tabs .item.active').html() + '</div>');
                    $('.activeTab').click(function (e) {
                        if ($(window).width() <= 700) {
                            $('.tabs').stop().slideToggle(200);
                            $(this).toggleClass('closed');
                        }
                    });

                    $('.item').click(function (e) {
                        if ($(window).width() <= 700) {
                            $('.activeTab').html($(this).html());
                            $(this).addClass('active').siblings().removeClass('active');
                            $('.tabs').stop().slideToggle(200);
                        }
                    });
                }
            } else {
                if ($('.activeTab').length > 0) {
                    $('.activeTab').remove();
                }

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
