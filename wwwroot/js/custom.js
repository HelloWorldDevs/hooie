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
  HelloWorldDevs.prototype.mailForm = function (form) {
    $(form).before('<div class="form-error"></div>');
    $(form).submit(function (e) {
      e.preventDefault();
      var formData = $(form).serialize();
      $.ajax({
        type: 'POST',
        // url: 'test.json',
        url: 'error.php',
        data: formData,
        dataType: 'json',
        encode: true
      }).done(function (data) {
        $(form).replaceWith(data.message);
      }).error(function (e, r, message) {
        message = (message) ? message : r;
        $('.form-error').text(message);
      });
    });
  };

  HelloWorldDevs.prototype.externalLinks = function (elem) {
    $(elem).each(function () {
      var a = new RegExp('/' + window.location.host + '/');
      if (!a.test(this.href)) {
        $(this).click(function (event) {
          event.preventDefault();
          event.stopPropagation();
          window.open(this.href, '_blank');
        });
      }
    });
  };

  HelloWorldDevs.prototype.copywriteYear = function (elem) {
    var year = new Date().getFullYear();
    $(elem).text(year);
  };

  var HWD = new HelloWorldDevs();
  $(document).ready(function () {
    HWD.fixRows();
    HWD.copywriteYear('.copywrite-year');
    HWD.mailForm('#mail-form');
    HWD.externalLinks('a');
  });
  $(window).on("resize", function () {
    HWD.fixRows();
  });
})(jQuery);
