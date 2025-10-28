import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Slideshow.css';

const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-next" onClick={onClick}>
      &#9654; { }
    </div>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div className="custom-arrow custom-prev" onClick={onClick}>
      &#9664; { }
    </div>
  );
};

const Slideshow = () => {
  const slides = [
    {
      image: '/src/media/images/landing/members/image1.png',
      heading: 'Company Name',
      subheading: 'Class',
      description: 'Name',
    },
    {
      image: '/src/media/images/landing/members/image2.png',
      heading: 'Company Name 2',
      subheading: 'Class 2',
      description: 'Name 2',
    },
    {
      image: '/src/media/images/landing/members/image3.png',
      heading: 'Company Name 3',
      subheading: 'Class 3',
      description: 'Name 3',
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-content">
              <img src={slide.image} alt={`Slide ${index + 1}`} className="slide-image" />
              <div className="slide-text">
                <h2 className="slide-heading">{slide.heading}</h2>
                <h3 className="slide-subheading">{slide.subheading}</h3>
                <p className="slide-description">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Slideshow;