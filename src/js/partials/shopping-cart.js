$(document).ready(function () {
    if (document.getElementById("page-wrapper").classList.contains("shopping-cart-page")) {

        var req_items = $('.black-list-single-page .flex-table-1 > .flex-row');
        $(function () {
            var countFiles = 1,
                $body = $('body'),
                typeFileArea = ['txt', 'doc', 'docx', 'ods'],
                coutnTypeFiles = typeFileArea.length;

            //create new element
            $body.on('click', '.files-wr label', function () {
                var wrapFiles = $('.files-wr'),
                    newFileInput;

                countFiles = wrapFiles.data('count-files') + 1;
                wrapFiles.data('count-files', countFiles);

                newFileInput = '<div class="one-file"><label for="file-' + countFiles + '"><img src="images/png/file-upload-big.png" alt="">Загрузите фотографию, чертеж детали или техническое задание</label>' +
                    '<input type="file" name="file-' + countFiles + '" id="file-' + countFiles + '"><div class="file-item hide-btn">' +
                    '<span class="file-name"></span><span class="btn-del-file"></span></div></div>';
                wrapFiles.prepend(newFileInput);
            });

            //show text file and check type file
            $body.on('change', 'input[type="file"]', function () {
                var $this = $(this),
                    valText = $this.val(),
                    fileName = valText.split(/(\\|\/)/g).pop(),
                    fileItem = $this.siblings('.file-item'),
                    beginSlice = fileName.lastIndexOf('.') + 1,
                    typeFile = fileName.slice(beginSlice),
                    myfsize = $(this)[0].files[0].size,
                    _myfsize = (((myfsize / 1000 < 1000) ? ((myfsize / 1000).toFixed(1) + 'кб') : ((myfsize / 1000 / 1000).toFixed(1) + 'мб')));



                fileItem.find('.file-name').text(fileName + ' (' + _myfsize + ')');
                if (valText != '') {
                    fileItem.removeClass('hide-btn');

                    /*for (var i = 0; i < coutnTypeFiles; i++) {

                      if (typeFile == typeFileArea[i]) {
                        $this.parent().addClass('has-mach');
                      }
                    }*/
                    $this.parent().addClass('has-mach');
                } else {
                    fileItem.addClass('hide-btn');
                }

                if (!$this.parent().hasClass('has-mach')) {
                    $this.parent().addClass('error');
                }
            });

            //remove file
            $body.on('click', '.btn-del-file', function () {
                var elem = $(this).closest('.one-file');
                elem.fadeOut(400);
                setTimeout(function () {
                    elem.remove();
                }, 400);
            });

        });

        $('.minus_with_arg').click(function () {
            var $input = $(this).parent().find('input');
            console.log($input.attr("data-ed_type"));
            var count = parseInt($input.val()) - 1;
            count = (count < 1 ? 1 : count) + " " + $input.attr("data-ed_type");
            $input.val(count);
            $input.change();
            return false;
        });
        $('.plus_with_arg').click(function () {
            var $input = $(this).parent().find('input');
            $input.val((parseInt($input.val()) + 1) + " " + $input.attr("data-ed_type"));
            $input.change();
            return false;
        });
        $('.plus-minus input').on('input keyup', function () {
            $input = $(this);
            var count = parseInt($input.val()) || 1;
            count = count + " " + $input.attr("data-ed_type");
            $input.val(count);
        });

        var req_items = $('.shopping-cart-page .cart-table > .row');
        function makeAdaptive_s_k() {


            if ($(window).width() <= 1250 && $(window).width()> 700) {
                $('.files-wr').after($('label.radio'));
            }
            else {
                $('.bottom button').before($('label.radio'));
            }



            var addition_text = ["<span class=\"bold\">Артикул: </span> ", "<span class=\"bold\">Количество: </span> "];
            var fields = ['.art', '.count'];
            if (document.getElementById("page-wrapper").classList.contains("shopping-cart-page")) {
                if ($(window).width() <= 700) {

                    $('.bottom').before($('.files-wr'));
                    req_items.each(function () {
                        var temp = $(this).find(fields[0]);

                        if (!temp.html().includes(addition_text[0])) {
                            for (let index = 0; index < fields.length; index++) {
                                var temp = $(this).find(fields[index]);
                                temp.html(addition_text[index] + temp.html());
                            }
                        }



                    });
                }

                else {
                    req_items.each(function () {
                        $('form .left').append($('.files-wr'));
                        if ($(window).width() <= 1250 && $(window).width()> 700) {
                            $('.files-wr').after($('label.radio'));
                        }
                        var temp = $(this).find(fields[0]);
                        if (temp.html().includes(addition_text[0])) {
                            for (let index = 0; index < fields.length; index++) {
                                var temp = $(this).find(fields[index]);
                                temp.html(temp.html().substr(addition_text[index].length));
                            }

                        }

                    });


                }
            }



        };



        window.onload = function () {
            makeAdaptive_s_k();

        };

        $(window).resize(function () {
            makeAdaptive_s_k();
        });







    }
});
