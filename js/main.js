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

// switch-add-class

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

function switchmenu() {
    const currenLocation = location.href;
    const menuItem = document.querySelectorAll('.nav__list ul li a');
    const menuLenght = menuItem.length
    for (let i = 0; i < menuLenght; i++) {
        if (menuItem[i].href === currenLocation) {
            menuItem[i].className = "--active"
        }
    }

}
switchmenu();


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


// carousel 
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
    if (h <= 768) {
        $('.gallery .gallery-wrap').css({ "height": h + "px" });
    }
}
setHeightGallery();



// scroll top 
window.onscroll = scroll;

function scroll() {

    var toTop = document.querySelector('.to-top');
    window.scrollY > 100 ? toTop.style.bottom = '40px' : toTop.style.bottom = '-100%';
}
$(document).ready(function() {
    $('.to-top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});


$('.testimonials__carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    wrapAround: true,
    prevNextButtons: false,
    pageDots: false,
    autoPlay: 2000

  });
$('.testimonials__dot').on( 'click', '.button', function() {
    var index = $(this).index();
    $carousel.flickity( 'select', index );
  });

function mediaVideo(){
    document.querySelector('.media-video__thumbnail--btn').addEventListener('click',function(e){
    document.querySelector('.media-video__overlay').classList.add('--active');
    document.querySelector('body').classList.add('no-scroll');
    e.stopPropagation();
})
    document.querySelector('.media-video__overlay--close').addEventListener('click',function(){
    document.querySelector('.media-video__overlay').classList.remove('--active');
    document.querySelector('body').classList.remove('no-scroll');

})
document.onkeydown = function(e) {
    e = e || window.event;
    if (e.keyCode == 27) {
        document.querySelector('.media-video__overlay').classList.remove('--active');
        document.querySelector('body').classList.remove('no-scroll');
    }
}
document.addEventListener('click', function(e){
    document.querySelector('.media-video__overlay').classList.remove('--active');
    document.querySelector('body').classList.remove('no-scroll');
})
}

mediaVideo();


// calendar
function calendar(){

let calendar = document.querySelector('.calendar')

const month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

isLeapYear = (year) => {
    return (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) || (year % 100 === 0 && year % 400 ===0)
}

getFebDays = (year) => {
    return isLeapYear(year) ? 29 : 28
}

generateCalendar = (month, year) => {

    let calendar_days = calendar.querySelector('.calendar-days')
    let calendar_header_year = calendar.querySelector('#year')

    let days_of_month = [31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

    calendar_days.innerHTML = ''

    let currDate = new Date()
    if (!month) month = currDate.getMonth()
    if (!year) year = currDate.getFullYear()

    let curr_month = `${month_names[month]}`
    month_picker.innerHTML = curr_month
    calendar_header_year.innerHTML = year

    // get first day of month
    
    let first_day = new Date(year, month, 1)

    for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
        let day = document.createElement('div')
        if (i >= first_day.getDay()) {
            day.classList.add('calendar-day-hover')
            day.innerHTML = i - first_day.getDay() + 1
            day.innerHTML += `<span></span>
                            <span></span>
                            <span></span>
                            <span></span>`
            if (i - first_day.getDay() + 1 === currDate.getDate() && year === currDate.getFullYear() && month === currDate.getMonth()) {
                day.classList.add('curr-date')
            }
        }
        calendar_days.appendChild(day)
    }
}


let currDate = new Date()

let curr_month = {value: currDate.getMonth()}
let curr_year = {value: currDate.getFullYear()}

generateCalendar(curr_month.value, curr_year.value)

document.querySelector('#prev-year').onclick = () => {
    --curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

document.querySelector('#next-year').onclick = () => {
    ++curr_year.value
    generateCalendar(curr_month.value, curr_year.value)
}

}
calendar();




function checkCanAccessible() {
    var isAccessible;
    var age = 16;
    
    if(age < 16){
        isAccessible = false;
    }
    else{
        isAccessible = true;
    }
    console.log(isAccessible);
}