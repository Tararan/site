$(document).ready(function() {
//ANIMATING THE HAMBURGER    
    const open = 'navigation__hamburger--is-open';
    const hamburger = $('.navigation__hamburger');

    hamburger.click(function () {
        $(this).toggleClass(open);
    });
    
//SMOOTH SCROLLING FROM HEADER LNKS TO NAVIGATION
    $(".smooth").on('click', function(e) {
        // prevent default anchor click behavior
        e.preventDefault();

        // animate
        $('html, body').animate({
           scrollTop: $(this.hash).offset().top
         }, 600, function(){

           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = this.hash;
         });
     });
});
