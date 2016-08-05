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

    rowLength = 3;
    rowNum = 1;
    function initRows() {
      var $cells = $('.section-services__service-tile');
      for (var x = 0; x < $cells.length; x++) {
        if (x < (rowLength * rowNum)) {
          $($cells[x]).removeClass('hidden');
        } else {
          $($cells[x]).addClass('hidden');
        }
        if($cells.length <= (rowLength * rowNum)) {
          $('.load-more').hide();
        }
      }
    }

    function setRowLength() {
      if ($(window).width() < 992) {
        rowLength = 2;
      } else {
        rowLength = 3;
      }
    }

    $(document).ready(function () {
        setRowLength();
        initRows();

        $('.load-more').on("click", function () {
          rowNum += 1;
          initRows();
        });


      }
    );
    $(window).on("resize", function () {
      setRowLength();
      initRows();
      console.log(rowLength);
      console.log(rowNum);
    });


  });
})(jQuery);