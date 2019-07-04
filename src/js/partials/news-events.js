$(document).ready(function () {

 /* var thumbsSwiper = new Swiper('.image-slider-mini', {
    slidesPerView: 1

  });*/

  var imageSwiper = new Swiper('.image-slider .swiper-container', {
    slidesPerView: 1,
    navigation: {
      nextEl: '.image-slider .swiper-button-next',
      prevEl: '.image-slider .swiper-button-prev',
    },
    /*thumbs: {
      swiper: thumbsSwiper
    }*/
  });



  function adaptive720() {
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
    }

  }



  window.onload = function () {
    adaptive720();

  };

  $(window).resize(function () {
    adaptive720();
  });

});
