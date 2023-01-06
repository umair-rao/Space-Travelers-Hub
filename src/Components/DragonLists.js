import React from 'react';
import PropTypes from 'prop-types';
import './DragonLists.css';

const DragonLists = ({ dragon }) => {
  const { name } = dragon;
  return (
    <div className="dragon-container">
      <span className="dragon-name">{ name }</span>
    </div>
  );
};

DragonLists.propTypes = {
  dragon: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default DragonLists;
