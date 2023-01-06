import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import pick, { addReserved } from './utlis';

// API
const BASE_URL = 'https://api.spacexdata.com/v3/dragons';

// Action-Types
const GET_ALL_DRAGONS = 'Dragons/Dragons/GET_ALL_DRAGONS';
const TOGGLE_DRAGONS_RESERVATION = 'Dragons/Dragons/TOGGLE_DRAGONS_RESERVATION';

// Reducers
const initialState = [];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case `${GET_ALL_DRAGONS}/fulfilled`:
      return [...action.payload];
    case TOGGLE_DRAGONS_RESERVATION:
      return (state.map((dragon) => {
        if (dragon.id === action.id) {
          return {
            ...dragon,
            reserved: !dragon.reserved,
          };
        }
        return dragon;
      }));
    default:
      return state;
  }
}

// Action-Creators
export const fetchDragons = createAsyncThunk(GET_ALL_DRAGONS, async () => {
  const res = await axios.get(BASE_URL);
  const { data } = res;
  let dragons = [];
  const selectedData = ['id', 'name', 'type', 'flickr_images'];

  data.forEach((object) => {
    dragons.push(pick(object, selectedData));
  });
  dragons = addReserved(dragons);
  return dragons;
});

export const toggleReservation = (id) => ({ type: TOGGLE_DRAGONS_RESERVATION, id });
