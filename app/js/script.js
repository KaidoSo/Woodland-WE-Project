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
        prevArrow: '.arrow-prev',
        nextArrow: '.arrow-next',
        arrows: true,
        dots: true,
    });
});


// [START maps_add_map]
// Initialize and add the map
function initMap() {
    // [START maps_add_map_instantiate_map]
    // The location of Uluru
    const uluru = { lat: 59.397243670628086, lng: 24.768449488504277 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: uluru,
    });
    // [END maps_add_map_instantiate_map]
    // [START maps_add_map_instantiate_marker]
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    // [END maps_add_map_instantiate_marker]
  }
  // [END maps_add_map]