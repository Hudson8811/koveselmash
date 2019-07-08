var imageSwiper;

$(document).ready(function () {
  if (document.getElementById("page-wrapper").classList.contains("events-single-page")) {
    imageSwiper = new Swiper('.image-slider .swiper-container', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.image-slider .swiper-button-next',
        prevEl: '.image-slider .swiper-button-prev',
      },
      thumbs: {
        swiper: thumbsSwiper
      }
    });

    $('.image-slider-mini').on('click', '.image-block', function () {
      // alert($(this).index());
      imageSwiper.slideTo($(this).index());
    })

  }
  if (document.getElementById("page-wrapper").classList.contains("news-single-page")) {
    var thumbsSwiper = new Swiper('.image-slider-mini .swiper-container', {
      slidesPerView: 8,
      slidesOffsetAfter: 30,
      variableWidth: true,
    });

    var imageSwiper = new Swiper('.image-slider .swiper-container', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.image-slider .swiper-button-next',
        prevEl: '.image-slider .swiper-button-prev',
      },
      thumbs: {
        swiper: thumbsSwiper
      }
    });

  }



  function makeAdaptive() {
    if (document.getElementById("page-wrapper").classList.contains("news-page")) {
      if ($(window).width() <= 1250) {
        var b1 = document.getElementById("title-news");
        var b2 = document.getElementById("title-events");
        $('.block.list .title').after($('.block.names .menu-list'));
        $(b2).appendTo(".block.names");
        $('.news-menu-block').after($('.flex-block .left-block'));
        $('.subscribe-block.gray-block').after($('.pagi'));

      } else {
        $('.block.list .menu-list:first-child').before($('#title-events'));
        $('#title-news').after($('.block.list .news-menu-list'));


        $('.right-block ').before($('.left-block'));
        $('.news-list').after($('.pagi'));

      }
    }

    if (document.getElementById("page-wrapper").classList.contains("event-page")) {
      if ($(window).width() <= 1250) {
        var b1 = document.getElementById("title-news");
        var b2 = document.getElementById("title-events");
        $(b2).appendTo(".block.names");
        $('.news-menu-block').after($('.flex-block .left-block'));
        $('.subscribe-block.gray-block').after($('.pagi'));
      }

      else {
        $('.block.list .menu-list').before($('#title-events'));


        $('.right-block ').before($('.left-block'));
        $('.events-list').after($('.pagi'));


      }
    }
    if (document.getElementById("page-wrapper").classList.contains("news-single-page")) {
      if ($(window).width() <= 1250) {
        $('.text-style').after($('.subscribe-block.gray-block'));
      }
      else {
        $('.other-block.gray-block').after($('.subscribe-block.gray-block'));
      }
      if ($(window).width() <= 700) {
        $('.links-row .prev-link span').text("Пред. новость");
        $('.links-row .next-link span').text("След. новость");
      }
      else {
        $('.links-row .prev-link span').text("Предыдущая новость");
        $('.links-row .next-link span').text("Следующая новость");
      }
    }
  }



  window.onload = function () {
    makeAdaptive();

  };

  $(window).resize(function () {
    makeAdaptive();
  });

});
