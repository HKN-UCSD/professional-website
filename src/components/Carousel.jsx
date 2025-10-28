import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Carousel.css';

const Carousel = () => {
  const slides = [
    { image: '/src/media/images/hcf/arkus-logo.webp' },
    { image: '/src/media/images/hcf/interlink-logo.webp' },
    { image: '/src/media/images/hcf/viasat-logo.png' },
    { image: '/src/media/images/hcf/llnl-logo.png' },
    { image: '/src/media/images/hcf/scholars-logo.png' },
    { image: '/src/media/images/hcf/tbp-logo.png' },
    { image: '/src/media/images/hcf/hkn-logo.png' },
  ];

  const settings = {
    dots: false, 
    infinite: true, 
    speed: 5000,
    slidesToShow: 4, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 1, 
    cssEase: 'linear',
    arrows: false, 
  };

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <img src={slide.image} alt={`Slide ${index + 1}`} className="carousel-image" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;