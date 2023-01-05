/* eslint-disable camelcase */
import React from 'react';
import PropTypes from 'prop-types';
import './DisplayDragons.css';

const DisplayDragons = ({ dragon, eventHandler }) => {
  const {
    id, name, type, flickr_images,
  } = dragon;

  return (
    <div>
      <div className="container">
        <div className="image-container">
          <img src={flickr_images[0]} alt="dragon_imgae" />
        </div>
        <div className="dragon-detail">
          <h2 className="dragon-name">{name}</h2>
          <div>
            <h3 className="dragon-type">{type}</h3>
          </div>
          <div className="dragon-btn-div">
            <button
              type="button"
              className="dragon-btn"
              onClick={() => { eventHandler(id); }}
            >
              Reserve Dragon
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

DisplayDragons.propTypes = {
  dragon: PropTypes.oneOfType([PropTypes.object]).isRequired,
  eventHandler: PropTypes.func.isRequired,
};

export default DisplayDragons;
