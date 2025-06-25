import React from 'react';
import 'app/styles/accomodation.section.style.css';

type SectionContainerProps = {
  id?: string;
  className?: string;
  title?: string;
  children: React.ReactNode;
};

const SectionContainer = ({ id, className, title, children }: SectionContainerProps): React.ReactElement => {
  return (
    <section id={id} className={`vv-section-container ${className || ''}`}>
      {title && <h2 className="vv-section-title">{title}</h2>}
      <div className="vv-section-content">{children}</div>
    </section>
  );
};

export default SectionContainer;