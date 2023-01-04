import React from 'react';

import MissionLists from '../Components/MissionLists';
import RocketLists from '../Components/RocketLists';

import './Profile.css';

const Profile = () => (
  <>
    <div className="profile-container">
      <div className="profile-missions-section">
        <h3 className="mission-lists">My Missions</h3>
        <MissionLists />
      </div>
      <div className="profile-rockets-section">
        <h3 className="rockets-list">My Rockets</h3>
        <RocketLists />
      </div>
    </div>
  </>
);

export default Profile;
