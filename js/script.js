// якорь
$(document).ready(function(){
    $("#main-menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});

// burger
$(document).ready(function () {
    $('.burder_menu').click(function (event) {
        $('.burder_menu, #main-menu, #main-menu-news,  #main-menu li .link').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function () {
    $('#main-menu .link').click(function (event) {
        $('.burder_menu, #main-menu, #main-menu-news').removeClass('active');
        $('body').removeClass('lock');
    });
});


// slider
$(document).ready(function () {
    $('.gallery_slider').slick({
        slidesToShow: 4,
        responsive:[
            {
                breakpoint:1000,
                settings:{
                    slidesToShow: 3,
                }
            },
            {
                breakpoint:800,
                settings:{
                    slidesToShow: 2,
                }
            },
            {
                breakpoint:600,
                settings:{
                    slidesToShow: 1,
                }
            }
        ]
    });

});
