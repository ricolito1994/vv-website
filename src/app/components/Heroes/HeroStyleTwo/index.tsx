import React from 'react';
import { Link } from 'react-router-dom';

import '../../../styles/vvherostyletwo.style.css';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

type HeroStyleTwoProps = {
  title: string;
  cards: {
    image: string;
    name: string;
    description: string;
    buttons?: {
      text: string;
      onClick?: () => void;
      type?: 'primary' | 'secondary';
    }[];
  }[];
};

const HeroStyleTwo = ({ title, cards }: HeroStyleTwoProps): React.ReactElement => {
  return (
    <div className="vv-hst-container">
      <h1 className="vv-hst-title">{title}</h1>

      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="vv-hst-swiper"
      >
        {cards.map((card, index) => (
          <SwiperSlide key={index}>
            <div className="vv-hst-card">
              <div className="vv-hst-imageWrapper">
                <div className="vv-hst-imageBox">
                  <img src={card.image} alt={card.name} className="vv-hst-image" />
                </div>
                <div className="vv-hst-hoverOverlay">
                  <div className="vv-hst-description">{card.description}</div>
                  <div className="vv-hst-buttons">
                    {card.buttons?.map((btn, i) => (
                      <button
                        key={i}
                        className={`vv-hst-button ${btn.type === 'secondary' ? 'vv-hst-button-secondary' : ''}`}
                        onClick={btn.onClick}
                      >
                        {btn.text}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <p className="vv-hst-name">{card.name}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroStyleTwo;