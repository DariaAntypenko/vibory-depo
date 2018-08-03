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
    }]
});