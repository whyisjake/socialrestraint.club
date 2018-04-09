(function($) {
  // Start of use strict
  let location = document.location;

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 57)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  //Function to the css rule
  let checkSize = function () {
    if ($("#mainNav").css("background-color") === "rgb(255, 255, 255)") {
      $('#uscLogo').attr('src', '/img/usc-shield-name-black.png');
    } else {
      $('#uscLogo').attr('src', '/img/usc-shield-name-white.png');
    }
  }

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
      checkSize();
    } else {
      $("#mainNav").removeClass("navbar-shrink");
      checkSize();
    }
  };

  // Collapse now if page is not at top
  $(document).ready(function() {
    // run test on initial page load
    checkSize();
    // run test on resize of the window
    $(window).resize(checkSize);
    navbarCollapse();
    $('#loginButton').click(function(e){
      e.preventDefault();
      console.log('we have a click...')
      FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          console.log('Logged in.');
        }
        else {
          FB.login();
        }
      });
    })
  });

  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
