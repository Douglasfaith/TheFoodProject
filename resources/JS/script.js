$(document).ready(function() {

   /* FOr the Sticky Nav */
   $('.js--section-features').waypoint(function(direction){
      if (direction=="down" ){
         $('nav').addClass('sticky');

      }else{
         $('nav').removeClass('sticky');
      }

   }, {
      offset: '60px;'
      });

      /*Scroll on button
  
    $('.js--scroll-to-plans').click(function () {
       $('html. body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);
    }); 
     $('.js--scroll-to-start').click(function () {
      $('html. body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);
   }); 
*/

$('.sliding-link').click(function(e) {
   e.preventDefault();
   var aid = $(this).attr("href");
   $('html,body').animate({scrollTop: $(aid).offset().top}, 1000);
});

$('js--scroll-to-start').on('click', 'a[href^=#]', function(e){
    e.preventDefault();
    var id = $(this).attr('href');
    $('html,body').animate({scrollTop: $(id).offset().top}, 1000);
});

//Navigation Scroll

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
   .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

  /*Animation on Scroll*/
  $('.js--wp-1').waypoint(function(direction){
     $('.js--wp-1').addClass('animate fadein');
  },{
   offset: '50%;'
   });
   $('.js--wp-2').waypoint(function(direction){
      $('.js--wp-2').addClass('animate fadeinUp');
   },{
    offset: '50%;'
    });
    $('.js--wp-3').waypoint(function(direction){
      $('.js--wp-3').addClass('animate fadein');
   },{
    offset: '50%;'
    });
    $('.js--wp-4').waypoint(function(direction){
      $('.js--wp-4').addClass('animate pulse');
   },{
    offset: '50%;'
    });

    
/*-----Mobile-nav-----*/


    $('.js--nav-icon').click(function() {

      var nav = $('.js--main-nav');
      var icon = $('.js--nav-icon i');

      nav.slideToggle(200);
      if(icon.hasClass('ion-navicon-round')) {
         icon.addClass('ion-close-round');
         icon.removeClass('ion-navicon-round');

      } else {
         icon.addClass('ion-navicon-round');
         icon.removeClass('ion-close-round');

      }
    }) ;

}) ;


