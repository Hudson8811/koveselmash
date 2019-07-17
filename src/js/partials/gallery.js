$(document).ready(function () {
    $(".makeMeScrollable").smoothDivScroll({
        touchScrolling: true,
        hotSpotScrolling: true
    });
});

var gallerySwiper = new Swiper ('.gallery-slider .swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
        el: '.gallery-slider .swiper-pagination',
        clickable: true,
    },

    navigation: {
        nextEl: '.gallery-slider .swiper-button-next',
        prevEl: '.gallery-slider .swiper-button-prev',
    },
    breakpoints: {
        700: {
            slidesPerView: 1,
            pagination: {
                el: ".gallery-slider .swiper-pagination",
                type: 'fraction',
            },
        },
    }
});