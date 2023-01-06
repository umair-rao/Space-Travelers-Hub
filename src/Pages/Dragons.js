import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DisplayDragons from '../Components/DisplayDragons';
import { toggleReservation } from '../Redux/Dragon/Dragon';

const Dragons = () => {
  const dispatch = useDispatch();
  const dragons = useSelector((state) => state.Dragons);
  const eventHandler = (id) => {
    dispatch(toggleReservation(id));
  };

  return (
    <div className="dragon-section">
      {dragons.map((dragon) => (
        <DisplayDragons
          key={dragon.id}
          dragon={dragon}
          eventHandler={eventHandler}
        />
      ))}
    </div>
  );
};

export default Dragons;
