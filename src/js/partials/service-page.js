

$(document).ready(function () {

    if (document.getElementById("page-wrapper").classList.contains("service-page")) {

        var menu = $('.drop-menu');
        $('#menuToggle').on('click', function () {
            menu.toggleClass("active");
            menu.toggleClass("closed");
        });
    }
    function adaptive_services() {


        if ($(window).width() <= 1250) {

        }
        else {

        }
    }

    window.onload = function () {
        adaptive_services();
    };

    $(window).resize(function () {
        adaptive_services();

    });
});
