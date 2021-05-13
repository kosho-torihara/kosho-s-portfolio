// $('#js-buttonHamburger').click(function () {
//   $('body').toggleClass('is-drawerActive');

//   if ($(this).attr('aria-expanded') == 'false') {
//       $(this).attr('aria-expanded', true);
//   } else {
//       $(this).attr('aria-expanded', false);
//   }
// });

// $(function(){
//   $('#js-buttonHamburger').on('click',function(){
//       $(this).toggleClass('-active');
//       $('#nav').toggleClass('-active');
//   });
// });

$('.menu-aboutme').click(function() {
  $("html,body").animate({scrollTop:$(".profile").offset().top});
  $('#nav').removeClass('-active');
  $('#nav-btn').removeClass('-active');
});
$('.menu-service').click(function() {
  $("html,body").animate({scrollTop:$(".service").offset().top});
  $('#nav').removeClass('-active');
  $('#nav-btn').removeClass('-active');
});
$('.menu-works').click(function() {
  $("html,body").animate({scrollTop:$(".works").offset().top});
  $('#nav').removeClass('-active');
  $('#nav-btn').removeClass('-active');
});
$('.menu-contact').click(function() {
  $("html,body").animate({scrollTop:$(".footer").offset().top});
  $('#nav').removeClass('-active');
  $('#nav-btn').removeClass('-active');
});

$(function(){
  $('#nav-btn').on('click',function(){
      $(this).toggleClass('-active');
      $('#nav').toggleClass('-active');
  });
});