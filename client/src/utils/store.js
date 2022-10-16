import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import { reducers } from '../reducers';
import thunk from "redux-thunk";

const intialState = {};
const middleware = [thunk];

const store = createStore(
  reducers, 
  intialState, 
composeWithDevTools(applyMiddleware(...middleware)));

export default store;