import React from 'react';
import PropTypes from 'prop-types';
import './style/index.css';

function HotelList({ hotels, onHotelSelect }) {
  return (
    <div>
      {hotels && hotels.length > 0 ? (
        <ul>
          {hotels.map((hotel) => (
            <li key={hotel.id} onClick={() => onHotelSelect(hotel)}>
              {hotel.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No hotels found.</p>
      )}
    </div>
  );
}

HotelList.propTypes = {
  hotels: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
  onHotelSelect: PropTypes.func.isRequired,
};

export default HotelList;
