// mostrare / nascondere il menu principale

var menu = $('.hamburger-menu');
var openClick = $('.header-right a i');
var closeClick = $('.hamburger-menu .close')
//
// openClick.click( function() {
//     menu.slideDown(1000);
//   })
//
// closeClick.click( function() {
//   menu.slideUp(1000)
// })
//
// //versione 2
// openClick.click( function() {
//     menu.addClass('active');
//   })
//
// closeClick.click( function() {
//   menu.removeClass('active');
// })
//
//  //versione 3
// openClick.click( function() {
//     menu.show(1000);
//   })
//
// closeClick.click( function() {
//   menu.hide(1000);
// })

// versione 4
openClick.click( function() {
    menu.fadeIn(1000);
  })

closeClick.click( function() {
  menu.fadeOut(1000);
})
