(function($) {
  var HelloWorldDevs = function() {
    this.rowLength = 3;
    this.rowNum = 1;
    that = this;
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
      }
    });
    
    $('.load-more').on("click", function () {
      HWD.rowNum += 1;
      HWD.fixRows();
    });
  };

  HelloWorldDevs.prototype.fixRows = function () {
    var rowLength = ($(window).width() < 992) ? 2 : 3;
    var mod = rowLength * this.rowNum;
    var $cells = $('.section-services__service-tile');
    var $loadMore = $('.load-more');
    for (var x = 0; x < $cells.length; x++) {
      if (x < mod) {
        $($cells[x]).removeClass('hidden');
      } else {
        $($cells[x]).addClass('hidden');
      }
      if ($cells.length <= mod) {
        $loadMore.hide();
      }
    }
  };

  var HWD = new HelloWorldDevs();
  $(document).ready(function () {
    HWD.fixRows();
  });
  $(window).on("resize", function () {
    HWD.fixRows();
  });
})(jQuery);
