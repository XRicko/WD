$('.news').slick({
    slidesToShow: 3,
    autoplay: true,
    autoplaySpeed: 2500,
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
    responsive: [
      {
        breakpoint: 950,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });