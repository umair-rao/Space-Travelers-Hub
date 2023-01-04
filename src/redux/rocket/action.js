import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { GET_ROCKETS } from './actionTypes';

export const fetchRockets = createAsyncThunk(GET_ROCKETS, async () => {
  const response = await axios.get('https://api.spacexdata.com/v3/rockets');
  const { data } = response;
  const rockets = [];
  const rocketData = ['id', 'rocket_name', 'rocket_type', 'flickr_images'];

  data.forEach((element) => {
    rockets.push(element, rocketData);
  });
  return rockets;
});

export default fetchRockets;
