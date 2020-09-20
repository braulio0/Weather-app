import React from "react";
import PropTypes from "prop-types";
import WeatherExtraInfo from "./WeatherExtraInfo";
import WeatherTempeture from "./WeatherTempeture";
import "./style.css";
const WeatherData = ({ data: { Tempeture, WeatherState, humidity, wind } }) => {
  // const{Tempeture, WeatherState, huminity, wind}= data; se borra por metodo deconstruring

  return (
    <div className="weatherDataCont">
      <WeatherTempeture Tempeture={Tempeture} WeatherState={WeatherState} />
      <WeatherExtraInfo humidity={humidity} wind={wind} />
    </div>
  );
};
WeatherData.propTypes = {
  data: PropTypes.shape({
    Tempeture: PropTypes.number.isRequired,
    WeatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};
export default WeatherData;

