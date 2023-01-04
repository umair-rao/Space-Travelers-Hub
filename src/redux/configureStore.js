import rocketReducer from 'rocket/rocketReducer';
import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const rootReduce = {
  reducer: {
    rockets: rocketReducer,
  },
};

const store = configureStore(rootReduce, composeWithDevTools(applyMiddleware(thunk)));

export default store;
