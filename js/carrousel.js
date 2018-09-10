$(document).ready(function () {
    var prevArrow = $('#prev_btn');
    var nextArrow = $('#next_btn');
    var toolBox = $('#btn_div')
    console.log(prevArrow);
    $('#my_works').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: true,
        appendArrows: toolBox,
        nextArrow: "<button class=\"btn-works\" id=\"next_arrow\">>></button>",
        prevArrow:"<button class=\"btn-works\" id=\"prev_arrow\"><<</button></button>",
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    })
});
