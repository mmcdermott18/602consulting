$(document).ready(function() {
    // run function on initial page load
    smoothScroll();
    clientList();
    // run function on resize of the window
    $(window).resize(function() {

    })
    // run function on scroll
    $(window).scroll(function() {

    })
});
function clientList() {
  $('#clients').click(function(){
    $('#bio').toggleClass('bio-toggle');
    $('#client-list').toggleClass('client-toggle');
    $('.client-plus').toggleClass('plus-spin');
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
