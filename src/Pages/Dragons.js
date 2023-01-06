import React from 'react';
import { useSelector } from 'react-redux';
import DisplayDragons from '../Components/DisplayDragons';

const Dragons = () => {
  const dragons = useSelector((state) => state.Dragons);

  return (
    <div className="dragon-section">
      {dragons.map((dragon) => <DisplayDragons key={dragon.id} dragon={dragon} />)}
    </div>
  );
};

export default Dragons;
