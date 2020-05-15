"use strict";
(function ($) {

  $(window).load(function () {
    $("#preloader").fadeOut(3000);
  });

  $(".home-slider").owlCarousel({
    loop: true,
    dots: false,
    nav: false,
    items: 1,
    animateOut: "fadeOut",
    autoplay: true,
    smartSpeed: 1000,
    autoplayHoverPause: true
  });

  $(".owl-courses").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    smartSpeed: 1000,
    autoplay: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 3
      }
    }
  });

  $(".owl-client").owlCarousel({
    loop: true,
    nav: false,
    autoplayHoverPause: true,
    dots: true,
    smartSpeed: 1000,
    autoplay: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      992: {
        items: 3
      }
    }
  });

  smartScroll.init(
    {
      speed: 700,
      addActive: true,
      activeClass: "active",
      offset: 150
    },
    () => console.log("callback")
  );

})(jQuery);

(() => {
  const form = document.querySelector(".form-tab");
  const tabs = form.querySelectorAll(".fs-h2");
  const panels = form.querySelectorAll(".form-tab-panel > div");

  function defaultStyle() {
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.backgroundColor = "";
      panels[i].style.display = "none";
    }
  }

  tabs.forEach((tab, index) => {
    tab.addEventListener("click", event => {
      event.preventDefault();
      defaultStyle();
      tabs[index].style.backgroundColor = "#3f51b5";
      panels[index].style.display = "block";
    });
  });
  tabs[0].style.backgroundColor = "#3f51b5";
  panels[0].style.display = "block";
})();
