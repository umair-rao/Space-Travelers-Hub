import React from 'react';
import { useSelector } from 'react-redux';

// Components
import MissionLists from '../Components/MissionLists';
import RocketLists from '../Components/RocketLists';
import DragonLists from '../Components/DragonLists';

// Stylesheet
import './Profile.css';

const Profile = () => {
  const rockets = useSelector((state) => state.Rockets);
  const missions = useSelector((state) => state.Missions);
  const reservedRockets = rockets.filter((item) => item.reserved === true);
  const joinedMissions = missions.filter((mission) => mission.joined === true);
  const dragons = useSelector((state) => state.Dragons);
  const reservedDragons = dragons.filter((dragon) => dragon.reserved === true);

  return (
    <>
      <div className="profile-main-container">
        <div className="profile-missions-section">
          <h3 className="mission-lists">My Missions</h3>
          {joinedMissions.length ? (
            joinedMissions.map((mission) => (
              <MissionLists
                key={mission.mission_id}
                mission={mission}
              />
            ))
          ) : (
            <span className="no-reserved">No Joined Missions!!!</span>
          )}
        </div>
        <div className="profile-rockets-section">
          <h3 className="rockets-list">My Rockets</h3>
          {reservedRockets.length ? (
            reservedRockets.map((rocket) => (
              <RocketLists
                key={rocket.id}
                rocket={rocket}
              />
            ))
          ) : (
            <span className="no-reserved">No Reserved Rocket!!!</span>
          )}
        </div>
        <div className="profile-dragons-section">
          <h3 className="dragon-list">My Dragon</h3>
          {reservedDragons.length ? (
            reservedDragons.map((dragon) => (
              <DragonLists
                key={dragon.id}
                dragon={dragon}
              />
            ))
          ) : (
            <span className="no-reserved">No Reserved Dragon!!!</span>
          )}
        </div>
      </div>
    </>
  );
};

export default Profile;
