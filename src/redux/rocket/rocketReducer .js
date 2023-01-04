import { GET_ROCKETS, RESERVE_ROCKET, CANCEL_RESERVATION } from './actionTypes';

const initialState = [];

export const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ROCKETS}/fulfilled`:
      return action.payload;
    case RESERVE_ROCKET:
      return state;
    case CANCEL_RESERVATION:
      return state;
    default:
      return state;
  }
};

export default rocketReducer;
