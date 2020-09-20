import { combineReducers } from "redux";
import { createSelector } from "reselect";
import {
  cities,
  getForecastDataFromCities as _getForecastDataFromCities,
  getWeatherCities as _getWeatherCities,
} from "./cities";
import { city } from "./city";

export default combineReducers({
  cities,
  city,
});
//selectores
export const getCity = createSelector(
  (state) => state.city,
  (city) => city
);
export const getForecastDataFromCities = createSelector(
  (state) => state.cities,
  getCity,
  _getForecastDataFromCities
);
// old selector export const getCity = (state) => state.city;
export const getWeatherCities = createSelector(
  (state) => state.cities,
  _getWeatherCities
);
