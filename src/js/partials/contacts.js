$(document).ready(function() {
    $('.contacts-page .tabs .tab-title').click(function () {
        $(this).addClass('active').siblings('.tab-title').removeClass('active');
        var tab = $(this).data('tab');
        $('#tab-'+tab).addClass('active').siblings('.tab').removeClass('active');
        if (tab == 2){
            resizeContacts();
        }
    });

    $('.contacts-page .tabs .tabs-content .tab#tab-1 .table-contacts .item .label').click(function () {
       $(this).closest('.item').toggleClass('active').find('.text').slideToggle();
    });

    $('select.drop-titles').change(function () {
        var tab = this.value;
        console.log(tab);
        $('#tab-'+tab).addClass('active').siblings('.tab').removeClass('active');
        if (tab == 2){
            resizeContacts();
        }
    });
});


var contactsSwiper = undefined;

function resizeContacts() {
    if ($(window).width() < 700 && contactsSwiper  == undefined) {
        contactsSwiper = {};
        $(".contacts-page .tabs .tabs-content .tab#tab-2 .role-block .swiper-container").each(function(index, element){
            var $this = $(this);
            $this.addClass("instance-" + index);
            $this.find(".swiper-button-prev").addClass("btn-prev-" + index);
            $this.find(".swiper-button-next").addClass("btn-next-" + index);
            $this.find(".swiper-pagination").addClass("pagination-" + index);
            contactsSwiper[index] = new Swiper(".instance-" + index, {
                slidesPerView: 1,
                pagination: {
                    el: ".pagination-" + index,
                    type: 'fraction',
                },
                navigation: {
                    nextEl: ".btn-next-" + index,
                    prevEl: ".btn-prev-" + index,
                }
            });
        });

    }
    else if ($(window).width() > 699 && contactsSwiper != undefined) {
        $.each(contactsSwiper,function(index, value){
            value.destroy(true, true);
        });
        contactsSwiper = undefined;
    }
}

$( window ).resize( function () {
    resizeContacts();
});
