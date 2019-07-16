$(document).ready(function () {
    var req_items = $('.black-list-page .flex-table > .flex-row');
    function makeAdaptive__black_list_page() {

        var addition_text = ["<span class=\"bold\">Дата внесения: </span>", "<span class=\"bold\">ИНН должника: </span>", "<span class=\"bold\">Сумма долга (грн): </span>",
            "<span class=\"bold\">Дата просрочки: </span>"];
        var fields = ['.date', '.inn', '.summ', '.date-delay'];
        if (document.getElementById("page-wrapper").classList.contains("black-list-page")) {
            if ($(window).width() <= 700) {
                req_items.each(function () {
                    var temp = $(this).find(fields[0]);
                    if (!$(this).hasClass("flex-table-head")) {
                        if (!temp.html().includes(addition_text[0])) {
                            for (let index = 0; index < fields.length; index++) {
                                var temp = $(this).find(fields[index]);
                                temp.html(addition_text[index] + temp.html());
                            }
                        }

                    }

                });
            }

            else {
                req_items.each(function () {
                    if (!$(this).hasClass("flex-table-head")) {
                        var temp = $(this).find(fields[0]);
                        console.log(temp.html());
                        console.log(addition_text[0]);
                        console.log(temp.html().includes(addition_text[0]));
                        if (temp.html().includes(addition_text[0])) {
                            for (let index = 0; index < fields.length; index++) {
                                var temp = $(this).find(fields[index]);
                                temp.html(temp.html().substr(addition_text[index].length));
                            }

                        }

                    }

                });


            }
        }
    }





    window.onload = function () {

        makeAdaptive__black_list_page();

    };

    $(window).resize(function () {
        makeAdaptive__black_list_page();
    });



});


//////////////////////////////Black-list single

$(document).ready(function () {
    var req_items = $('.black-list-single-page .flex-table-1 > .flex-row');
    function makeAdaptive__black_list_page() {

        var addition_text = ["<span class=\"bold\">ИНН должника: </span>", "<span class=\"bold\">Сумма долга (грн): </span>",
            "<span class=\"bold\">Дата просрочки: </span>"];
        var fields = ['.inn', '.summ', '.date-delay'];
        if (document.getElementById("page-wrapper").classList.contains("black-list-single-page")) {
            if ($(window).width() <= 700) {
                req_items.each(function () {
                    var temp = $(this).find(fields[0]);
                    if (!$(this).hasClass("flex-table-head")) {
                        if (!temp.html().includes(addition_text[0])) {
                            for (let index = 0; index < fields.length; index++) {
                                var temp = $(this).find(fields[index]);
                                temp.html(addition_text[index] + temp.html());
                            }
                        }

                    }

                });
            }

            else {
                req_items.each(function () {
                    if (!$(this).hasClass("flex-table-head")) {
                        var temp = $(this).find(fields[0]);
                        console.log(temp.html());
                        console.log(addition_text[0]);
                        console.log(temp.html().includes(addition_text[0]));
                        if (temp.html().includes(addition_text[0])) {
                            for (let index = 0; index < fields.length; index++) {
                                var temp = $(this).find(fields[index]);
                                temp.html(temp.html().substr(addition_text[index].length));
                            }

                        }

                    }

                });


            }
        }
    }





    window.onload = function () {

        makeAdaptive__black_list_page();

    };

    $(window).resize(function () {
        makeAdaptive__black_list_page();
    });



});
