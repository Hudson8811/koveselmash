$(document).ready(function() {
    $('.services-page .grid-block .item').hover(function () {
        $(this).find('.text').slideDown();
    });
    $('.services-page .grid-block .item').on("mouseleave", function () {
        $(this).find('.text').slideUp();
    });
});