import thunk from "redux-thunk";
import { createStore, compose, applyMiddleware } from "redux";
import { GET_CHANNELS } from "./actions/channels";

const reducer = (state, action) => {
  if (action.type === GET_CHANNELS) {
    return {
      loadChannels: action.payload
    };
  }
  return state;
};

const initialState = {
  loadChannels: []
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
