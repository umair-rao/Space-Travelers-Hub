import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// API
const BASE_URL = 'https://api.spacexdata.com/v3/dragons';

// Action-Types
const GET_ALL_DRAGONS = 'Dragons/Dragons/GET_ALL_DRAGONS';
const RESERVE_DRAGONS = 'Dragons/Dragons/RESERVE_ROCKET';
const CANCEL_DRAGONS = 'Dragons/Dragons/CANCEL_RESERVATION';

// Reducers
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_DRAGONS}/fulfilled`:
      return [...action.payload];
    case RESERVE_DRAGONS:
      return state;
    case CANCEL_DRAGONS:
      return state;
    default:
      return state;
  }
}

// Action-Creators
export const fetchDragons = createAsyncThunk(GET_ALL_DRAGONS, async () => {
  const res = await axios.get(BASE_URL);
  const { data } = res;
  const dragons = [];

  data.forEach((object) => {
    dragons.push(object);
  });
  return dragons;
});
