import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Utils
import pick, { addJoinLeave } from '../utils';

// API

const BASE_URL = 'https://api.spacexdata.com/v3/missions';

// Actions
const FETCH_MISSIONS = 'Missions/Missions/FETCH_MISSIONS';
const TOGGLE_JOINING = 'Missions/Missions/TOGGLE_JOINING';

// Reducer
const initialState = [];

export default function missionReducer(state = initialState, action) {
  switch (action.type) {
    case `${FETCH_MISSIONS}/fulfilled`:
      return [...action.payload];
    case TOGGLE_JOINING:
      return (state.map((missions) => {
        if (missions.mission_id === action.id) {
          return {
            ...missions,
            joined: !missions.joined,
          };
        }
        return missions;
      }));
    default:
      return state;
  }
}

// Action Creators
export const fetchMissions = createAsyncThunk(FETCH_MISSIONS, async () => {
  const response = await axios.get(BASE_URL);
  const { data } = response;
  let missions = [];
  const selectedData = ['mission_id', 'mission_name', 'description'];

  data.forEach((object) => {
    missions.push(pick(object, selectedData));
  });
  missions = addJoinLeave(missions);
  return missions;
});

export const toggleJoining = (id) => ({ type: TOGGLE_JOINING, id });
