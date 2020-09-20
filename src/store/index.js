import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./../reducer";
const INITIALSTATE = {
  city: "Guadalajara, mex",
};

const composeEmhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  reducers,
  INITIALSTATE,
  composeEmhacers(applyMiddleware(thunk))
);
