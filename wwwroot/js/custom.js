(function($) {
  $(document).ready(function(){
    console.log("GOT HERE");
    $('.fslider.customjs').flexslider({
      selector: ".slider-wrap > .slide",
      animation: 'slide',
      easing: 'swing',
      direction: 'horizontal',
      reverse: false,
      slideshow: 'false',
      slideshowSpeed: Number(5000),
      animationSpeed: Number(600),
      pauseOnHover: true,
      video: false,
      controlNav: true,
      directionNav: false,
      smoothHeight: false,
      useCSS: true,
      touch: true,
      start: function (slider) {
        SEMICOLON.widget.animations();
        SEMICOLON.initialize.verticalMiddle();
        slider.removeClass('preloader2');
      },
      after: function () {
      }
    });
  });
})(jQuery);