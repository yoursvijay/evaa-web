
!(function($) {
  "use strict";

  // Preloader
  $(window).on('load', function() {
    if ($('#preloader').length) {
      $('#preloader').delay(100).fadeOut('slow', function() {
        $(this).remove();
      });
    }
  });

  $(document).ready(function(){
    $('.slider-content').slick({
      autoplay:true,
      dots:true,
      vertical: false,
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      centerMode: false,
      adaptiveHeight: true,
      pauseOnHover: true,
      asNavFor: '.slider-right',
      });
      $('.slider-right').slick({
        fade:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        focusOnSelect: true,
        touchThreshold: 100,
        arrows: false,
        rtl: true
    });
  });
    
// Toggle .header-scrolled class to #header when page is scrolled
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
        $('#header').addClass('header-scrolled');
        $('#topbar').addClass('topbar-scrolled');
        $('#header .logo img').attr('src','assets/img/icons/evaa-icon.png');
    } else {
        $('#header').removeClass('header-scrolled');
        $('#topbar').removeClass('topbar-scrolled');
        $('#header .logo img').attr('src','assets/img/icons/E-Logo.png');
    }
  });


  // Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#header').outerHeight() - 1;
  $(document).on('click', '.nav-menu a, .mobile-nav a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#header') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
        return false;
      }
    }
  });
    
    
    
//for footer scrolling
// Smooth scroll for the navigation menu and links with .scrollto classes
  var scrolltoOffset = $('#heads').outerHeight() - 1;
  $(document).on('click', '.page-links ul li a, #banner-sec .btn-pair a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      if (target.length) {
        e.preventDefault();

        var scrollto = target.offset().top - scrolltoOffset;

        if ($(this).attr("href") == '#heads') {
          scrollto = 0;
        }

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        return false;
      }
    }
  });


    
 
  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top - scrolltoOffset;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).on('click', '.mobile-nav .drop-down > a', function(e) {
      e.preventDefault();
      $(this).next().slideToggle(300);
      $(this).parent().toggleClass('active');
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

   
  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });
    

    
    
// Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 100) {
        $(".nav-menu ul:first li:first, .mobile-menu ul:first li:first").addClass('active');
      }
    });
  });
    
  // modal js start
    $('#videoModal').on('hide.bs.modal', function(e) {    
      var $if = $(e.delegateTarget).find('iframe');
      var src = $if.attr("src");
      $if.attr("src", '/index.html');
      $if.attr("src", src);
      });
      
      jQuery("#carousel").owlCarousel({
        autoplay: true,
        lazyLoad: true,
        loop: false,
        dots:false,
        margin: 20,
        responsiveClass: true,
        autoHeight: true,
        autoplayTimeout: 7000,
        smartSpeed: 800,
        autoplayHoverPause:true,
        nav: true,
        responsive: {
          0: {
            items: 1
          },
      
          600: {
            items: 3
          },
      
          1024: {
            items: 4
          },
      
          1366: {
            items: 6
          }
        }
      });


        function initEmptySlide() {
          const margin = $(".container-fluid")[0].getClientRects()[0].x;
          $(".item1").css("margin-left", Math.floor(margin) - 15);
          }
          $(window).resize(function () {
          initEmptySlide();
          });
          $(document).ready(function(){
          initEmptySlide();
        $(".additional-slider").slick({
              dots: false,
              focusOnSelect: false,
              infinite: false,
              variableWidth: true,
              slidesToShow: 2,
              slidesToScroll: 1,
              appendArrows:$("#Additional .section-content2 div .hea .Arrows"), 
              prevArrow:'<span><i class="icofont-arrow-left"></i></span>',
              nextArrow:'<span><i class="icofont-arrow-right"></i></span>',
              centerPadding: "40px",
              responsive: [
                  {
                    breakpoint: 1024,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  },
                  {
                    breakpoint: 480,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                    }
                  }
                ]
        });
      });

// Init AOS
  $(window).on('load', function() {
    AOS.init({
      duration: 1000,
      once: true
    });
  });

})(jQuery);

