import React from 'react';
import { useSelector } from 'react-redux';

import MissionLists from '../Components/MissionLists';
// import RocketLists from '../Components/RocketLists';

import './Profile.css';

const Profile = () => {
  const missions = useSelector((state) => state.Missions);
  const joinedMissions = missions.filter((mission) => mission.joined === true);
  return (
    <>
      <div className="profile-container">
        <div className="profile-missions-section">
          <h3 className="mission-lists">My Missions</h3>
          { joinedMissions.map((mission) => (
            <MissionLists
              key={mission.mission_id}
              mission={mission}
            />
          )) }
        </div>
        <div className="profile-rockets-section">
          <h3 className="rockets-list">My Rockets</h3>
          {/* <RocketLists /> */}
        </div>
      </div>
    </>
  );
};

export default Profile;
