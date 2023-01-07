/* eslint-disable camelcase */
import React from 'react';
import { PropTypes } from 'prop-types';
import './DisplayMissions.css';

export default function DisplayMission({ mission, handleJoining }) {
  const {
    mission_id, mission_name, description, joined,
  } = mission;

  return (
    <div className="missionList">
      <div className="grid-item">
        <p className="missionName">{mission_name}</p>
      </div>
      <div className="grid-item">
        <p className="missionDescription">{description}</p>
      </div>
      <div className="grid-item">
        {joined ? (
          <button type="button" className="active-btn">Active Member</button>
        ) : (
          <button type="button" className="inactive-btn">NOT A MEMBER</button>
        )}
      </div>
      <div className="grid-item">
        {!joined ? (
          <button
            type="button"
            className="join-btn"
            onClick={() => {
              handleJoining(mission_id);
            }}
          >
            Join Mission
          </button>
        ) : (
          <button
            type="button"
            className="leave-btn"
            onClick={() => {
              handleJoining(mission_id);
            }}
          >
            Leave Mission
          </button>
        )}

      </div>
    </div>
  );
}

DisplayMission.propTypes = {
  mission: PropTypes.oneOfType([PropTypes.object]).isRequired,
  handleJoining: PropTypes.func.isRequired,
};
