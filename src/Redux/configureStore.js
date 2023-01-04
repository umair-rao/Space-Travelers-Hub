import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/Missions';
import rocketReducer from './Rockets/Rockets';

const store = configureStore({
  reducer: {
    Missions: missionReducer,
    Rockets: rocketReducer,
  },
});

export default store;
