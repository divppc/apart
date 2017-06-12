$(document).ready(function() {    

  //mobile toggle function start

  $(".mobile-menu").on("click", function () {
    var e = $("nav");
    mobileToggle(e);
  });

  function mobileToggle(e) {
    if ($(e).hasClass("active") == true) {
      $(e).animate({maxHeight: "0"}, 100).removeClass("active");
    } else {
      $(e).animate({maxHeight: "100vh"}, 100).addClass("active");
    }
  };  
  //mobile toggle function end

  //choose language
  $(".select-language").on("click", function() {
    $(this).toggleClass("active");
  });

  //scroll to top
  $('.to-top').click(function(e) {
    e.preventDefault();
    $("html, body").animate({
        scrollTop: $("header").offset().top
    }, {
        duration: 1500
    });
  });

  //header slider
  $(".header-slider .slides").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: ".slider-left",
    nextArrow: ".slider-right",
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          dots: true,
          dotsClass: 'dots',
        }
      }
    ]
  });

  //response slider
  $(".response-container").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    mobileFirst: true,
    dots: true,
    dotsClass: 'dots',
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },

      {
        breakpoint: 390,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  });

  //gallary inside slider

  $(".thumb a").on("click", function (e) {
    e.preventDefault();
  });

  function photoSlider() {

    $('.main-photo').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      asNavFor: '.thumbs'
    });

    $('.thumbs').slick({
      slidesToShow: 5,
      slidesToScroll: 1,
      asNavFor: '.main-photo',
      prevArrow: ".slider-left",
      nextArrow: ".slider-right",
      focusOnSelect: true
    });
  };

  photoSlider();
  //product photos slider end

  $('.main-photo').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $(".fancybox").fancybox({
       helpers : {
            overlay : {
                css : {
                    'background' : 'rgba(0, 0, 0, 0.7)'
                }
            }
        }
    });
  });

  //zoom picture
  $(".fancybox").fancybox({
     helpers : {
          overlay : {
              css : {
                  'background' : 'rgba(0, 0, 0, 0.7)'
              }
          }
      }
  });

  //booking date dropper
  $(".dates").dateDropper({
    lang: 'ru',
    animate: false,
    dropPrimaryColor: '#b5876d',
    minYear: '2016',
    format: 'd/m/Y'
  });

})