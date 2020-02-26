$("#js-reviews-slider").slick({
    slidesToShow: 3,
    dots: true,
    arrows: false,
    autoplay: true,

    responsive: [
        {
          breakpoint: 930,
          settings: {
            slidesToShow: 2
          }
        },
        {
            breakpoint: 584,
            settings: {
                slidesToShow: 1
            }
        }
      ]
});