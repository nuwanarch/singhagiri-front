//javascript functions
$(document).ready(function(){
  // ============= Best Deals ============
  $('.best-deals-items').owlCarousel({
    loop:true,
    margin:30,
    responsive:{
      0:{
        items:1
      },
      767:{
        items:2
      },
      1000:{
        items:3
      }
    }
  })


  // ============= Recent Products============
  var carousel = $(".recent-items");
  carousel.owlCarousel({
    loop : true,
    margin:0,
    nav : true,
    dots : false,
    responsive:{
      0:{
        items:1
      },
      600:{
        items:3
      },
      1000:{
        items:6
      }
    }
  });

  checkClasses();
  carousel.on('translated.owl.carousel', function(event) {
    checkClasses();
  });

  function checkClasses(){
    var total = $('.recent-items .owl-stage .owl-item.active').length;

    $('.recent-items .owl-stage .owl-item').removeClass('firstActiveItem lastActiveItem');

    $('.recent-items .owl-stage .owl-item.active').each(function(index){
      if (index === 0) {
        // this is the first one
        $(this).addClass('firstActiveItem');
      }
      if (index === total - 1 && total>1) {
        // this is the last one
        $(this).addClass('lastActiveItem');
      }
    });
  }






    // ============ Ratings ============
      jQuery('.kv-fa').rating({
        theme: 'krajee-fa',
        filledStar: '<i class="fa fa-star"></i>',
        emptyStar: '<i class="fa fa-star-o"></i>'
      });

      jQuery('.kv-uni-star').rating({
        theme: 'krajee-uni',
        filledStar: '&#x2605;',
        emptyStar: '&#x2606;'
      });

      jQuery( ".caption" ).remove();
      jQuery( ".clear-rating" ).remove();

      jQuery('#ratenow').on('click', function ($) {

        var rat = 0;

        jQuery('#rateModel').modal('show');
        jQuery('#setstarpop').rating('update',rat);
        //console.log('Rating selected: ' + jQuery(this).val());
      });

      jQuery('.kv-fa').on('change', function ($) {

        var rat = jQuery(this).val();

        jQuery('#rateModel').modal('show');
        jQuery('#setstarpop').rating('update',rat);
        //console.log('Rating selected: ' + jQuery(this).val());

      });
      jQuery('#rateModel').on('hidden.bs.modal', function (e) {

        var ratp = jQuery('#setstarpop').val();
        jQuery('#setstar').rating('update',ratp);

      });

      $('.successmsg').hide();

      $('.reviewform').show();

      $(".reviewform").submit(function(event){
        event.preventDefault();

        var button = $('#submitrw');
        button.prop('disabled', true);

      });





    // ============ Poducts details page scrolling menu ========================
      (function($) {
        "use strict"; // Start of use strict

        // Smooth scrolling using jQuery easing
        $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
              $('html, body').animate({
                scrollTop: (target.offset().top - 56)
              }, 1000, "easeInOutExpo");
              return false;
            }
          }
        });


        // Activate scrollspy to add active class to navbar items on scroll
        $('body').scrollspy({
          target: '#mainNav',
          offset: 56
        });

      })(jQuery); // End of use strict





    // ============ Poducts details page Products zoom effect ==================
      !function ($) {

      "use strict"; // jshint ;_;

      var Magnify = function (element, options) {
          this.init('magnify', element, options)
      }

      Magnify.prototype = {

          constructor: Magnify

          , init: function (type, element, options) {
              var event = 'mousemove'
                  , eventOut = 'mouseleave';

              this.type = type
              this.$element = $(element)
              this.options = this.getOptions(options)
              this.nativeWidth = 0
              this.nativeHeight = 0

              this.$element.wrap('<div class="magnify" >');
              this.$element.parent('.magnify').append('<div class="magnify-large" >');
              this.$element.siblings(".magnify-large").css("background", "url('" + this.$element.attr("src") + "') no-repeat");

              this.$element.parent('.magnify').on(event + '.' + this.type, $.proxy(this.check, this));
              this.$element.parent('.magnify').on(eventOut + '.' + this.type, $.proxy(this.check, this));
          }

          , getOptions: function (options) {
              options = $.extend({}, $.fn[this.type].defaults, options, this.$element.data())

              if (options.delay && typeof options.delay == 'number') {
                  options.delay = {
                      show: options.delay
                      , hide: options.delay
                  }
              }

              return options
          }

          , check: function (e) {
              var container = $(e.currentTarget);
              var self = container.children('img');
              var mag = container.children(".magnify-large");

              // Get the native dimensions of the image
              if (!this.nativeWidth && !this.nativeHeight) {
                  var image = new Image();
                  image.src = self.attr("src");

                  this.nativeWidth = image.width;
                  this.nativeHeight = image.height;

              } else {

                  var magnifyOffset = container.offset();
                  var mx = e.pageX - magnifyOffset.left;
                  var my = e.pageY - magnifyOffset.top;

                  if (mx < container.width() && my < container.height() && mx > 0 && my > 0) {
                      mag.fadeIn(100);
                  } else {
                      mag.fadeOut(100);
                  }

                  if (mag.is(":visible")) {
                      var rx = Math.round(mx / container.width() * this.nativeWidth - mag.width() / 2) * -1;
                      var ry = Math.round(my / container.height() * this.nativeHeight - mag.height() / 2) * -1;
                      var bgp = rx + "px " + ry + "px";

                      var px = mx - mag.width() / 2;
                      var py = my - mag.height() / 2;

                      mag.css({ left: px, top: py, backgroundPosition: bgp });
                  }
              }

          }
      }

      $.fn.magnify = function (option) {
          return this.each(function () {
              var $this = $(this)
                  , data = $this.data('magnify')
                  , options = typeof option == 'object' && option
              if (!data) $this.data('tooltip', (data = new Magnify(this, options)))
              if (typeof option == 'string') data[option]()
          })
      }

      $.fn.magnify.Constructor = Magnify

      $.fn.magnify.defaults = {
          delay: 0
      }
      /* MAGNIFY DATA-API
       * ================ */
      $(window).on('load', function () {
          $('[data-toggle="magnify"]').each(function () {
              var $mag = $(this);
              $mag.magnify()
          })
      })

  }(window.jQuery);





  // ============ Poducts details page Products sliders ========================
  var sync1 = $(".slider");
  var sync2 = $(".navigation-thumbs");

  var thumbnailItemClass = '.owl-item';

  var slides = sync1.owlCarousel({
  	video:true,
    startPosition: 12,
    items:1,
    loop:true,
    margin:10,
    autoplay:false,
    autoplayTimeout:6000,
    autoplayHoverPause:false,
    nav: true,
    dots: true
  }).on('changed.owl.carousel', syncPosition);

  function syncPosition(el) {
    $owl_slider = $(this).data('owl.carousel');
    var loop = $owl_slider.options.loop;

    if(loop){
      var count = el.item.count-1;
      var current = Math.round(el.item.index - (el.item.count/2) - .5);
      if(current < 0) {
          current = count;
      }
      if(current > count) {
          current = 0;
      }
    }else{
      var current = el.item.index;
    }

    var owl_thumbnail = sync2.data('owl.carousel');
    var itemClass = "." + owl_thumbnail.options.itemClass;


    var thumbnailCurrentItem = sync2
    .find(itemClass)
    .removeClass("synced")
    .eq(current);

    thumbnailCurrentItem.addClass('synced');

    if (!thumbnailCurrentItem.hasClass('active')) {
      var duration = 300;
      sync2.trigger('to.owl.carousel',[current, duration, true]);
    }
  }
  var thumbs = sync2.owlCarousel({
    startPosition: 12,
    items:4,
    loop:false,
    margin:10,
    autoplay:false,
    nav: false,
    dots: false,
    onInitialized: function (e) {
      var thumbnailCurrentItem =  $(e.target).find(thumbnailItemClass).eq(this._current);
      thumbnailCurrentItem.addClass('synced');
    },
  })
  .on('click', thumbnailItemClass, function(e) {
      e.preventDefault();
      var duration = 300;
      var itemIndex =  $(e.target).parents(thumbnailItemClass).index();
      sync1.trigger('to.owl.carousel',[itemIndex, duration, true]);
  }).on("changed.owl.carousel", function (el) {
    var number = el.item.index;
    $owl_slider = sync1.data('owl.carousel');
    $owl_slider.to(number, 100, true);
  });






  // ============ Poducts details page bank offer slider =======================
  $('.bank-promo').owlCarousel({
    loop:false,
    margin:0,
    nav:true,
    responsive:{
      0:{
        items:1
      },
      767:{
        items:2
      },
      1000:{
        items:4
      }
    }
  })


});
