

$(document).ready(function () {

    if (document.getElementById("page-wrapper").classList.contains("service-page")) {

        var menu = $('.drop-menu');
        $('#menuToggle').on('click', function () {
            menu.toggleClass("active");
            menu.toggleClass("closed");
        });

    } else {
        if (document.getElementById("page-wrapper").classList.contains("czl-page")) {
            $('.adaptive-menu-on-czl .spisok .head').on('click', function () {
                if ($(this).parent().hasClass('open')) {

                    $('>.bottom', $(this).parent()).stop().slideUp(200);
                    $(this).parent().removeClass('open');
                } else {
                    if ($(this).parent().hasClass('level-1')) {
                        $('.adaptive-menu-on-czl .spisok').each(function () {
                            if ($(this).hasClass('open')) {
                                $('>.bottom', $(this)).stop().slideUp(200);
                                $(this).removeClass('open');
                            }
                        });
                    };
                    $('>.bottom', $(this).parent()).stop().slideDown(200);
                    $(this).parent().addClass('open');

                }
            });
            jQuery(function ($) {
                $(document).mouseup(function (e) { // событие клика по веб-документу
                    var div = $(".adaptive-menu-on-czl .spisok"); // тут указываем ID элемента
                    if (!div.is(e.target) // если клик был не по нашему блоку
                        &&
                        div.has(e.target).length === 0) { // и не по его дочерним элементам
                        $('.bottom', div).stop().slideUp(200);
                        $(div).removeClass('open');
                    }
                });
            });
            $(window).scroll(function () {
                if ($(this).scrollTop() > 100) {
                    if ($('#upbutton div').is(':hidden')) {
                        $('#upbutton div').css({ opacity: 1 }).fadeIn('slow');
                    }
                } else { $('#upbutton div').stop(true, false).fadeOut('fast'); }
            });
            $('#upbutton div').click(function () {
                $('html, body').stop().animate({ scrollTop: 0 }, 300);
            });


            function adaptive_czl() {


                if ($(window).width() <= 1250) {
                    $(".adaptive-menu-on-czl .spisok .bottom").attr("style", "");
                }
                else {

                }
            }

            window.onload = function () {
                adaptive_czl();
            };

            $(window).resize(function () {
                adaptive_czl();

            });
        }
    }






});
