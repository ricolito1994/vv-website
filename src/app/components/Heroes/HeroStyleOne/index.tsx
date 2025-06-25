import React from 'react';
import { Link } from 'react-router-dom';
import '../../../styles//vvherostyleone.style.css';

type HeroStyleOneProps = {
  title: string;
  subtitle: string;
  content: string;
  linkText: string;
  linkTo: string;
  images: string[]; // expecting 3 images
};

const HeroStyleOne = ({
  title,
  subtitle,
  content,
  linkText,
  linkTo,
  images,
}: HeroStyleOneProps): React.ReactElement => {
  return (
    <div className="vv-hso-container">
      <div className="vv-hso-wrapper">
        <h1 className="vv-hso-title">{title}</h1>
        <h2 className="vv-hso-subtitle">{subtitle}</h2>
        <p className="vv-hso-content">{content}</p>
        <Link
          to={linkTo}
          className="vv-hso-link"
        >
          {linkText}
        </Link>
        <div className="vv-hso-imgWrapper">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Hero image ${index + 1}`}
              className="vv-hso-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroStyleOne;
