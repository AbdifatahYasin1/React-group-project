import React from 'react';
import { PropTypes } from 'prop-types';

const RocketItem = ({
  image,
  name,
  description,
  reserved,
}) => (
  <div style={{ display: 'flex', gap: '20px' }}>
    <img src={image} alt="rocket" style={{ width: '250px' }} />
    <div>
      <h2>{name}</h2>
      <p>{description}</p>
      {reserved ? (
        <button
          type="button"
          style={{
            backgroundColor: 'transparent',
            border: '1px solid #6D757D',
            color: '#6D757D',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Cancel Reservation
        </button>
      ) : (
        <button
          type="button"
          style={{
            backgroundColor: '#007BFF',
            border: 'none',
            color: '#fff',
            padding: '10px 15px',
            borderRadius: '5px',
            cursor: 'pointer',
            marginTop: '20px',
          }}
        >
          Reserve Rocket
        </button>
      )}
    </div>
  </div>
);

RocketItem.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserved: PropTypes.bool.isRequired,
};
export default RocketItem;