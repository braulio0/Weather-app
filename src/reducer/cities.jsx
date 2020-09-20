import {
  SET_FORCAST_DATA,
  SET_WEATHER_CITY,
  GET_WEATHER_CITY,
} from "./../actions";
import { createSelector } from "reselect";
import toPairs from "lodash.topairs";
export const cities = (state = {}, action) => {
  switch (action.type) {
    case SET_FORCAST_DATA: {
      const { city, forcastData } = action.payload;
      return {
        ...state,
        [city]: { forcastData },
      };
    }
    case GET_WEATHER_CITY: {
      const city = action.payload;
      return {
        ...state,
        [city]: { weather: null },
      };
    }
    case SET_WEATHER_CITY: {
      const { city, weather } = action.payload;
      return {
        ...state,
        [city]: { weather },
      };
    }
    default:
      return state;
  }
};

export const getForecastDataFromCities = createSelector(
  (state, city) => state[city] && state[city].forcastData,
  (forcastData) => forcastData
);
const fromObjToArray = (cities) =>
  toPairs(cities).map(([key, value]) => ({
    key,
    name: key,
    data: value.weather,
  }));

export const getWeatherCities = createSelector(
  (state) => fromObjToArray(state),
  (cities) => cities
);

