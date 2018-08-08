$('.list_city').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 7,
    responsive: [{
        breakpoint: 1279,
        settings: {
            slidesToShow: 5,
            slidesToScroll: 5
        }
    }, {
        breakpoint: 1024,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    }, {
        breakpoint: 768,
        settings: {
            slidesToShow: 4,
            slidesToScroll: 4
        }
    }, {
        breakpoint: 750,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    }, {
        breakpoint: 600,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }, {
        breakpoint: 460,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }]
});


$('.main_menu.for-desctop').on('click tap', function () {
    $('.fullscreen-navigation.for-desctop').toggleClass("open");
});
$('.main_menu.for-mobile').on('click tap', function () {
    $('.fullscreen-navigation.for-mobile').toggleClass("open");
});
$('.close-btn').on('click tap', function () {
    $('.fullscreen-navigation').removeClass("open");
});
$('#share_list').on('click tap', function () {
    $('#share_list').toggleClass("open");
});

$(document).mouseup(function (e) {
    if ($('.dropdown_main_menu').has(e.target).length === 0 && $('.fullscreen-navigation').hasClass('open') && $('#bigmenu').has(e.target).length === 0) {
        $('.fullscreen-navigation').removeClass('open');

    } else if ($('.drop_share').has(e.target).length === 0 && $('#share_list').hasClass('open') && $('#share_list').has(e.target).length === 0) {
        $('#share_list').removeClass('open');
    }
});