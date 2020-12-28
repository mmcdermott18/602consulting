$(document).ready(function() {
    // run function on initial page load
    smoothScroll();
    tmClientList();
    blClientList();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
function tmClientList() {
  var tmOpen = false;
  var tmH = $('#tm-client-list').outerHeight();
  $('#tm-clients').click(function(){
    if (tmOpen == false) {
      $('#tm-client-list').removeClass('client-toggle');
      $('#tm-client-list').addClass('client-height');
      $('#tm-client-list').animate({
        height: tmH,
      }, 250, function() {

      });
      $('#tm-client-plus').addClass('plus-spin');
      tmOpen = true;
    } else {
      $('#tm-client-list').animate({
        height: 0,
      }, 250, function() {

      });
      tmOpen = false;
      // $('#tm-client-list').removeClass('client-height');
      // $('#tm-client-list').addClass('client-toggle');
      $('#tm-client-plus').removeClass('plus-spin');
    }
  });
}
function blClientList() {
  var blOpen = false;
  var blH = $('#bl-client-list').outerHeight();
  $('#bl-clients').click(function(){
    if (blOpen == false) {
      $('#bl-client-list').removeClass('client-toggle');
      $('#bl-client-list').addClass('client-height');
      $('#bl-client-list').animate({
        height: blH,
      }, 250, function() {

      });
      $('#bl-client-plus').addClass('plus-spin');
      blOpen = true;
    } else {
      $('#bl-client-list').animate({
        height: 0,
      }, 250, function() {

      });
      blOpen = false;
      // $('#tm-client-list').removeClass('client-height');
      // $('#tm-client-list').addClass('client-toggle');
      $('#bl-client-plus').removeClass('plus-spin');
    }
  });
}
function smoothScroll() {
  $(window).on("load", function(){
    $('[href*="#"]').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('body, html').animate({
            scrollTop: target.offset().top - 10
          }, 1000);
          return false;
        }
      }
    });
  });
}
