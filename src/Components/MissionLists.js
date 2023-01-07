import React from 'react';
import PropTypes from 'prop-types';
import './MissionLists.css';

const MissionLists = ({ mission }) => (
  <div className="mission-container">
    <span className="mission-name">{mission.mission_name}</span>
  </div>
);

MissionLists.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default MissionLists;
