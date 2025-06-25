import React from 'react';
import 'app/styles/herostyleone.style.css';

type HeroStyleOneProps = {
  headerText: string;
  subHeaderText: string;
  paragraphLines: string[];
};

const HeroStyleOne = ({ headerText, subHeaderText, paragraphLines }: HeroStyleOneProps): React.ReactElement => {
  return (
    <div className="hero-style-one">
      <h1 className="hero-header">{headerText}</h1>
      <h4 className="hero-subheader">{subHeaderText}</h4>
      <div className="hero-paragraph">
        {paragraphLines.map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      </div>
    </div>
  );
};

export default HeroStyleOne;
