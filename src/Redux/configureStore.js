import { configureStore } from '@reduxjs/toolkit';
import missionReducer from './Missions/Missions';

const store = configureStore({
  reducer: {
    Missions: missionReducer,
  },
});

export default store;
