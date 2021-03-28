function menu_mobile() {
    var menu = document.querySelector('.nav__list-mobile')
    menu.classList.toggle('active');
}
menu_mobile();

function close_menu_mobile() {
    var close_menu = document.querySelector('.nav__list-mobile')
    close_menu.classList.toggle('active');
}
close_menu_mobile();
var t = 100;
window.onscroll = scroll;

function scroll() {
    var toTop = document.getElementById('to-top');
    window.scrollY > 100 ? toTop.style.bottom = '40px' : toTop.style.bottom = '-100%';
}
$(document).ready(function() {
    $('#to-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});


$(function() {
    var header = $(".nav");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            header.removeClass('').addClass("white-bg");
        } else {
            header.removeClass("white-bg").addClass('');
        }
    });
});



$('.carousel-wrap').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    pageDots: false,
    prevNextButtons: false,
    autoPlay: 2000,
    fade: true,
    imagesLoaded: true
});

$(document).ready(function() {
    let $carousel = $('.gallery-wrap');
    $carousel.flickity({
        // options
        draggable: false,
        cellAlign: 'left',
        wrapAround: true,
        pageDots: false,
        prevNextButtons: false,
        fade: true,
        imagesLoaded: true
    });

    $('.gallery__btn--prev').on('click', function() {
        $carousel.flickity('previous');
    });
    $('.gallery__btn--next').on('click', function() {
        $carousel.flickity('next');
    })
})

function setHeightGallery() {
    let h = $(document).width();
    document.getElementsByClassName('.gallery .gallery-wrap');
    if (h <= 425) {
        $('.gallery .gallery-wrap').css({ "height": h + "px" });
    }
}
setHeightGallery();


$(window).on("load", function() {
    $(".loading-screen").fadeOut(1000);
});