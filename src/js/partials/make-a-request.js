$(document).ready(function () {
    var req_items = $('.requests-block > .item');
    function makeAdaptive__make_req_page() {
        if (document.getElementById("page-wrapper").classList.contains("make-req-page")) {


            if ($(window).width() <= 1250) {
                req_items.each(function(){
                    var flex = $(this).find('.flex-container');
                    flex.after($(this).find('.contacts'));
                    flex.after($(this).find('.uploads'));
                    flex.after($(this).find('.description'));
                });


            }
            else {
                    req_items.each(function(){
                        var info = $(this).find('.main-info');
                        info.after($(this).find('.contacts'));
                        info.after($(this).find('.uploads'));
                        info.after($(this).find('.description'));
                    });
            }
            /*if ($(window).width() <= 700) {
             $('.links-row .prev-link span').text("Пред. новость");
              $('.links-row .next-link span').text("След. новость");
            }
            else {
              $('.links-row .prev-link span').text("Предыдущая новость");
              $('.links-row .next-link span').text("Следующая новость");
            }*/
        }
    }



    window.onload = function () {

        makeAdaptive__make_req_page();

    };

    $(window).resize(function () {
        makeAdaptive__make_req_page();
    });

    const myCustomUploadFileInput = document.querySelector('.myCustom__file');
    const jqUploadedInput = $(".myCustom__file-upload-choosed");
    const fileField = $(".fileField");
    const MCF = $(".myCustom__file-upload");
    const jqLabel = $(".myCustom__file-upload");


    myCustomUploadFileInput.addEventListener('change', (event) => {
        const result = document.querySelector('.myCustom__file-upload-choosed');
        var targetValue = event.target.value;
        result.innerHTML = `${targetValue.substr((targetValue.length - 50) > 0 ? targetValue.length - 50 : 0)}` + '<div class="myCustom__file-upload-close-btn"></div>';

        if (jqUploadedInput.hasClass("myCustom__file-upload-choosed-show") || myCustomUploadFileInput.value === "") {

        }
        else {
            jqUploadedInput.toggleClass("myCustom__file-upload-choosed-show");
            fileField.toggleClass("myCustom__file-upload-hide");
            MCF.toggleClass("myCustom__file-upload-hide");
        }
    });

    $(".myCustom__file-upload-choosed").on("click", ".myCustom__file-upload-close-btn", function () {
        if (jqUploadedInput.hasClass("myCustom__file-upload-choosed-show")) {
            myCustomUploadFileInput.value = "";
            ///  alert(myCustomUploadFileInput.value);
            jqUploadedInput.toggleClass("myCustom__file-upload-choosed-show");
            fileField.toggleClass("myCustom__file-upload-hide");
            MCF.toggleClass("myCustom__file-upload-hide");
        }
    });

});
