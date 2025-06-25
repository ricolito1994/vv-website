import React from 'react';
import { Button } from 'antd';
import 'app/styles/vvcarousel.style.css';

type CarouselSlide = {
  image: string;
  title: string;
  description: string;
  buttonOneText?: string;
  buttonTwoText?: string;
};

type VVCarouselProps = {
  slides: CarouselSlide[];
};

const VVCarousel = ({ slides }: VVCarouselProps): React.ReactElement => {
  return (
    <div className="accommodation-carousel">
      {slides.map((slide, i) => (
        <div
          key={i}
          className="carousel-item"
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="carousel-overlay">
            <h3 className="carousel-title">{slide.title}</h3>
            <p className="carousel-description">{slide.description}</p>
            <div className="carousel-buttons">
              <Button type="default">
                {slide.buttonOneText || 'Explore'}
              </Button>
              <Button type="primary">
                {slide.buttonTwoText || 'Reserve'}
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VVCarousel;
