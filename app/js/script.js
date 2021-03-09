const menu_btn = document.querySelector('.hamburger');
const mobile_menu = document.querySelector('.mobile__links');

menu_btn.addEventListener('click', function(){
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
});

$(document).ready(function(){
    $('#slideshow .slick').slick({
        autoplay: false,
        speed: 1000,
        prevArrow: '.arrow_prev',
        nextArrow: '.arrow_next',
        arrows: true,
        dots: true,
    });
});