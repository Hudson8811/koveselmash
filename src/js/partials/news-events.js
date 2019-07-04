$(document).ready(function () {
  var imageSwiper = new Swiper('.image-slider .swiper-container', {
    slidesPerView: 1,

    navigation: {
      nextEl: '.image-slider .swiper-button-next',
      prevEl: '.image-slider .swiper-button-prev',
    },
  });
/*
  function adaptive720(){  if ($(window).width() <= 1250 && document.getElementById("page-wrapper").classList.contains("news-page")) {
    //  alert("yes");
      var b1 = document.getElementById("title-news");
      var b2 = document.getElementById("title-events");
      $('.block.list .title').after($('.block.names .menu-list'));
      $(b2).appendTo(".block.names");
      $('.news-menu-block').after($('.flex-block .left-block'));
      $('.subscribe-block.gray-block').after($('.pagi'));

    }
    else{
      $('.block.list .menu-list:first-child').before($('#title-events'));
      $('#title-news').after($('.block.list .news-menu-list'));


      $('.right-block ').before($('.left-block'));
      $('.news-list').after($('.pagi'));

    }
   // alert("1");
    if ($(window).width() <= 1250 && document.getElementById("page-wrapper").classList.contains("event-page")) {
      var b1 = document.getElementById("title-news");
      var b2 = document.getElementById("title-events");
      $(b2).appendTo(".block.names");
      $('.news-menu-block').after($('.flex-block .left-block'));
      $('.subscribe-block.gray-block').after($('.pagi'));

    }
    else{
      $('.block.list .menu-list').before($('#title-events'));


      $('.right-block ').before($('.left-block'));
      $('.events-list').after($('.pagi'));

    }
  }



  window.onload = function () {
    adaptive720();

  };

  $(window).resize(function () {
    adaptive720();
  });
*/
});
