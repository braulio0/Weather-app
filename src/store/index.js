import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import {city} from './../reducer/city'
 const INITIALSTATE = {

     city: "Buenos Aires, ar"
};

const composeEmhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    export const store = createStore(city, INITIALSTATE , composeEmhacers(applyMiddleware(thunk)));
