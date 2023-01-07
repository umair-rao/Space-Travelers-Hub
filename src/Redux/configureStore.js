import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/Missions';
import rocketReducer from './Rockets/Rockets';
import dragonReducer from './Dragon/Dragon';

const store = configureStore({
  reducer: {
    Missions: missionReducer,
    Rockets: rocketReducer,
    Dragons: dragonReducer,
  },
});

export default store;
