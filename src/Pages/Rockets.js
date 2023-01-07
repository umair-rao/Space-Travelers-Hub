import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleReservation } from '../Redux/Rockets/Rockets';
// Components
import RocketDetails from '../Components/RocketDetails';

// Stylesheet
import '../Components/RocketDetails.css';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.Rockets);
  const eventHandler = (id) => {
    dispatch(toggleReservation(id));
  };

  return (
    <>
      <div className="rockets-main-section">
        {rockets.map((rocket) => (
          <RocketDetails
            key={rocket.id}
            rocket={rocket}
            eventHandler={eventHandler}
          />
        ))}
      </div>
    </>
  );
};

export default Rockets;
