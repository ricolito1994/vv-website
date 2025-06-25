import React from 'react';
import HeroStyleTwo from 'app/components/Heroes/HeroStyleTwo';

import accimg1 from 'assets/img/accommodations/img1.jpg';
import accimg2 from 'assets/img/accommodations/img2.jpg';
import accimg3 from 'assets/img/accommodations/img3.jpg';

const Accommodation = (): React.ReactElement => {
  return (
    <section>
        <HeroStyleTwo
            title="Accommodations"
            cards={[
                {
                image: accimg1,
                name: 'Villa Serene',
                description: 'A peaceful beachfront haven offering the perfect escape.',
                buttons: [{ text: 'Learn More', type: 'primary', onClick: () => console.log('Villa Serene') }],
                },
                {
                image: accimg3,
                name: 'Villa Serene',
                description: 'A peaceful beachfront haven offering the perfect escape.',
                buttons: [{ text: 'Learn More', type: 'primary', onClick: () => console.log('Villa Serene') }],
                },
                {
                image: accimg2,
                name: 'Villa Serene',
                description: 'A peaceful beachfront haven offering the perfect escape.',
                buttons: [{ text: 'Learn More', type: 'primary', onClick: () => console.log('Villa Serene') }],
                },
                {
                image: accimg2,
                name: 'Cliff Edge',
                description: 'Perched on a mountain ridge with breathtaking views.',
                buttons: [{ text: 'View Rooms', type: 'secondary', onClick: () => console.log('Cliff Edge') }],
                },
                {
                image: accimg3,
                name: 'Garden Escape',
                description: 'Surrounded by lush nature and tranquil gardens.',
                buttons: [{ text: 'Book Now', onClick: () => console.log('Garden Escape') }],
                },
            ]}
        />
    </section>
  );
};

export default Accommodation;
