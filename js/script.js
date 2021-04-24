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


// images
$(document).ready(function() { // Ждём загрузки страницы
	
	$(".image").click(function(){	// Событие клика на маленькое изображение
	  	var img = $(this);	// Получаем изображение, на которое кликнули
		var src = img.attr('src'); // Достаем из этого изображения путь до картинки
        $('body').addClass('lock');
		$("body").append("<div class='popup'>"+ //Добавляем в тело документа разметку всплывающего окна
						 "<div class='popup_bg'></div>"+ // Блок, который будет служить фоном затемненным
						 "<img src='"+src+"' class='popup_img' />"+ // Само увеличенное фото
						"</div>"); 
		$(".popup").fadeIn(500); // Медленно выводим изображение
        
		$(".popup_bg").click(function(){	// Событие клика на затемненный фон	   
			$(".popup").fadeOut(500);	// Медленно убираем всплывающее окно
			setTimeout(function() {	// Выставляем таймер
			  $(".popup").remove(); // Удаляем разметку всплывающего окна
			}, 800);
            $('body').removeClass('lock');
		});
	});
	
});