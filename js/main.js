// loading page 
$(window).on("load", function() {
    $(".loading-screen").fadeOut(1000);
});
// menu mobile
function menu() {
    $('.nav__list-mobile--icon').click(function() {
        $('.nav__list-mobile--menu').addClass('--active');
    });

    $('.btn-close').click(function() {
        $('.nav__list-mobile--menu').removeClass('--active');
    });
    $(document).ready(function() {
        $('.drop-down').on('click', function() {
            $('.sub-menu').toggleClass('--active');
            $(this).not($(this)).removeClass('--active ');
        });
    });

    $(document).ready(function() {
        $('.menu ul li').on('click', function() {
            $(this).toggleClass('--active', );
            $(this).not($(this)).removeClass('--active ');
        });
    });
    $(document).ready(function() {
        $('sub-menu.--active li a').on('click ', function() {
            $(this).toggleClass('--active', );
            // $(this).not($(this)).removeClass('--active ');
        });
    });


}

// switchpage

function switchpage() {
    const currenLocation = location.href;
    const menuItem = document.querySelectorAll('.nav__list ul li a');
    const menuLenght = menuItem.length
    for (let i = 0; i < menuLenght; i++) {
        if (menuItem[i].href === currenLocation) {
            menuItem[i].className = "--active"
        }
    }

}
switchpage();

// header
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
menu();


// carousel lib 
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

// gallery slider
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

// gallery slider mobile
function setHeightGallery() {
    let h = $(document).width();
    document.getElementsByClassName('.gallery .gallery-wrap');
    if (h <= 425) {
        $('.gallery .gallery-wrap').css({ "height": h + "px" });
    }
}
setHeightGallery();



// scroll top 
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