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






    // ------------------ Ratings ----------------
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



});
