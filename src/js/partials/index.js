$(document).ready(function() {
    $('.home-page .tabs-menu .tab-title').click(function () {
       $(this).addClass('active').siblings('.tab-title').removeClass('active');
       var tab = $(this).data('tab');
       $('#tab-'+tab).addClass('active').siblings('.tab').removeClass('active');
    });

    $('.home-page .tabs-menu #tab-1 .item').hover(function () {
        var bg = $(this).data('bg');
        $('#tab-1').css('background-image', 'url(' + bg + ')');
        $(this).find('.list').slideDown();
    });
    $('.home-page .tabs-menu #tab-1 .item').on("mouseleave", function () {
        $(this).find('.list').slideUp();
    });
    $('.home-page .tabs-menu #tab-2 .item').hover(function () {
        var bg = $(this).data('bg');
        $('#tab-2').css('background-image', 'url(' + bg + ')');
    });

    $('.home-page .popular-spec-products .carousel-title').click(function () {
        $(this).addClass('active').siblings('.carousel-title').removeClass('active');
        var carousel = $(this).data('carousel');
        $('#carousel-'+carousel).addClass('active').siblings('.carousel').removeClass('active');
        if (carousel == 2){
            var popularSwiper2 = new Swiper ('.popular-spec-products #carousel-2 .swiper-container', {
                slidesPerView: 4,
                spaceBetween: 46,
                pagination: {
                    el: '.popular-spec-products #carousel-2 .swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.popular-spec-products #carousel-2 .swiper-button-next',
                    prevEl: '.popular-spec-products #carousel-2 .swiper-button-prev',
                },
                breakpoints: {
                    1250: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                    700: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                    },
                }
            });

        }
    });

    $('.home-page .why-block .title-list .title').click(function () {
        $(this).addClass('active').siblings('.title').removeClass('active');
        var why = $(this).data('why');
        $('#why-content-'+why).addClass('active').siblings('.why-content').removeClass('active');
    });

    $('.home-page .big-tabs .tab-title').click(function () {
        $(this).addClass('active').siblings('.tab-title').removeClass('active');
        var tabb = $(this).data('tabb');
        $('#tabb-'+tabb).addClass('active').siblings('.tab').removeClass('active');
        if (tabb == 3){
            var reviewSwiper = new Swiper ('.big-tabs #tabb-3 .swiper-container', {
                slidesPerView: 2,
                spaceBetween: 30,
                pagination: {
                    el: '.big-tabs #tabb-3 .swiper-pagination',
                    clickable: true,
                },

                navigation: {
                    nextEl: '.big-tabs #tabb-3 .swiper-button-next',
                    prevEl: '.big-tabs #tabb-3 .swiper-button-prev',
                },
                breakpoints: {
                    1000: {
                        slidesPerView: 1,
                    },
                }
            });
        }
    });

    $('.home-page .news-tabs .news-tabs-titles .tab-title').click(function () {
        $(this).addClass('active').siblings('.tab-title').removeClass('active');
        var news = $(this).data('news');
        $('#news-tab-'+news).addClass('active').siblings('.news-tab').removeClass('active');
    });


    $('.why-block .toggle-block').click(function () {
        $(this).toggleClass('active');
    });

    $('.home-page .partners-block .swiper-container .swiper-slide').click(function () {
        if ($(this).hasClass('show')){
            $(this).removeClass('show');
        } else {
            $('.home-page .partners-block .swiper-container .swiper-slide').removeClass('show');
            $(this).addClass('show');
        }
    });



    $('.map svg .st1').click(
        function (e) {
            $('.map_hover_blocks .hover_item').hide();
            var country = $(this).attr('data-country');
            $('#hover_' + country).show();

            var parentOffset = $('.st3[data-country="'+country+'"]').offset();
            var parentOffset2 = $('.map').offset();
            var relX = e.pageX - parentOffset.left;
            var relY = parentOffset.top - parentOffset2.top;
            $('#hover_' + $(this).attr('data-country')).css({ top: relY - 30, left: parentOffset.left + 30 });
        }
    );

    $(document).mouseup(function (e){
        var div = $(".map_hover_blocks .hover_item");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            div.removeClass('active');
            $('.map_hover_blocks .hover_item').hide();
        }
    });
});

var popularSwiper = new Swiper ('.popular-spec-products #carousel-1 .swiper-container', {
    slidesPerView: 4,
    spaceBetween: 46,
    pagination: {
        el: '.popular-spec-products #carousel-1 .swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.popular-spec-products #carousel-1 .swiper-button-next',
        prevEl: '.popular-spec-products #carousel-1 .swiper-button-prev',
    },
    breakpoints: {
        1250: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
        700: {
            slidesPerView: 1,
            spaceBetween: 0,
        },
    }
});



var partnersSwiper = new Swiper ('.partners-block .swiper-container', {
    spaceBetween: 1,
    slidesPerView: 5,
    slidesPerColumn: 3,
    pagination: {
        el: '.partners-block .swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.partners-block  .swiper-button-next',
        prevEl: '.partners-block  .swiper-button-prev',
    },
    breakpoints: {
        1250: {
            slidesPerView: 3,
        },
    },
    on: {
        init: function () {
            var curRow = 0;
            $('.partners-block .swiper-container').find('.swiper-slide').each(function () {
                var thisRow = $(this).data('swiper-column');
                var between = thisRow - curRow;
                $(this).addClass('textleft-'+between);
            });
        },
        slideChange: function () {
            var curRow = partnersSwiper.realIndex;
            $('.partners-block .swiper-container').find('.swiper-slide').each(function () {
               var thisRow = $(this).data('swiper-column');
               var between = thisRow - curRow;
               $(this).removeClassWild('textleft-*');
               $(this).addClass('textleft-'+between);
            });
        },
    }
});

(function($) {
    $.fn.removeClassWild = function(mask) {
        return this.removeClass(function(index, cls) {
            var re = mask.replace(/\*/g, '\\S+');
            return (cls.match(new RegExp('\\b' + re + '', 'g')) || []).join(' ');
        });
    };
})(jQuery);