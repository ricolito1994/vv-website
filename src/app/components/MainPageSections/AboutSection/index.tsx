import React from 'react';
import HeroStyleOne from 'app/components/Heroes/HeroStyleOne';

import img1 from 'assets/img/awards/img1.png';

const About = (): React.ReactElement => {
  return (
    <section>
      <HeroStyleOne
        title="Vista Villas"
        subtitle="Relaxing Highland Getaway"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis necessitatibus, amet, iusto quo architecto error laborum quasi neque aliquam officiis dolorum natus cumque placeat nam quaerat, dolorem illo quidem at!"
        linkText="About Vista Villas"
        linkTo="/about" // Wala pani ang page na about pre
        images={[img1, img1, img1]}
      />
    </section>
  );
};

export default About;