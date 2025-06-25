import React, { useContext, useEffect } from 'react';
import { AppContext } from 'app/context';
import 'app/styles/accomodation.section.style.css';
import summitVilla from 'assets/img/accomodation/img1.jpg';
import highLandCabin from 'assets/img/accomodation/img2.jpg';
import hideawaySuite from 'assets/img/accomodation/img3.jpg';

const Accomodation = (): React.ReactElement => {
  const { ACCOMMODATION_DATA } = useContext(AppContext); 

  const rooms = [
    {
      name: 'Summit Villa',
      description: 'Spacious room with sea view and king-sized bed.',
      image: summitVilla,
    },
    {
      name: 'Highland Cabin',
      description: 'Luxury suite with private balcony and lounge access.',
      image: highLandCabin,
    },
    {
      name: 'Hideaway Suite',
      description: 'Luxury suite with private balcony and lounge access.',
      image: hideawaySuite,
    },
  ];

  return (
    <section className="accommodation-section">
      <h2 className="section-title">Accommodations</h2>
      <div className="room-cards-container">
        <div className="room-cards-wrapper">
            {rooms.map((room, index) => (
                <div key={index} className="room-cards">
                    <img src={room.image} alt={room.name} className="room-image" />
                    <h3 className="room-name">{room.name}</h3>
                    <p className="room-description">{room.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Accomodation;