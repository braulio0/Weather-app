import trasformeForcast from "../services/trasformeForcast";
import transformWeather from "../services/transformWeather";
import getUrlWeatherbyCity from "../services/getUrlWeatherbyCity";
export const SET_CITY = "SET_CITY";
export const SET_FORCAST_DATA = "SET_FORCAST_DATA";
export const GET_WEATHER_CITY = "GET_WEATHER_CITY";
export const SET_WEATHER_CITY = "SET_WEATHER_CITY";
const setCity = (payload) => ({ type: SET_CITY, payload });
const setForcastData = (payload) => ({ type: SET_FORCAST_DATA, payload });
const getWeaterCity = (payload) => ({ type: GET_WEATHER_CITY, payload });
const setWeaterCity = (payload) => ({ type: SET_WEATHER_CITY, payload });

const api_key = "063d90159b15b9b18ed8361bdf9a7e71";
const url = "http://api.openweathermap.org/data/2.5/forecast";

export const setSelectedCity = (payload) => {
  return (dispatch) => {
    const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

    // activacion del estado de buscqueda
    dispatch(setCity(payload)); //ciudad actual

    return fetch(url_forecast)
      .then((data) => data.json())
      .then((Weather_data) => {
        const forcastData = trasformeForcast(Weather_data);
        console.log(forcastData);

        //modificacion del estado
        dispatch(setForcastData({ city: payload, forcastData }));
      });
  };
};
export const setWeather = (payload) => {
  return (dispatch) => {
    payload.forEach((city) => {
      dispatch(getWeaterCity(city));
      const api_weather = getUrlWeatherbyCity(city);
      fetch(api_weather)
        .then((resolve) => {
          return resolve.json();
        })
        .then((data) => {
          const weather = transformWeather(data);
          dispatch(setWeaterCity({ city, weather }));
        });
    });
  };
};
