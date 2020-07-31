import React from 'react';
import WeatherIcons  from 'react-weathericons';
import PropTypes from 'prop-types';
import{
    CLOUD,
    CLOUDY,
    SUN,
    SNOW,
    RAIN,
    WINDY,
    FOG,

} from './../../../Constants/Weathers';
import  './style.css';

const icons = {
    [CLOUD]:'cloud',
    [SUN]: 'day-sunny',
    [FOG]: 'day-fog',
   [RAIN] : 'rain',
    [SNOW]: 'snow',
    [WINDY]: 'windy',
    [CLOUDY]: 'cloudy'
};
const sizeicon = '4x';
const getWeatherIcon = WeatherState => {
    const icon=icons[WeatherState];
    if(icon)
        return <WeatherIcons className="wicon" name={icon} size={sizeicon} />
    else
        return <WeatherIcons className="wicon" name="day-sunny" size={sizeicon} />
}

const WeatherTempeture =({Tempeture, WeatherState})=>(
<div className="weatherTempetureCont"> 
    {
        getWeatherIcon(WeatherState)
    }
    <span className="tempeture">{`${Tempeture}`}</span>
    <span className="tempetureType"> {`C°`}</span>
</div>
);
WeatherTempeture.propTypes={
    Tempeture: PropTypes.number.isRequired,
    WeatherState: PropTypes.string.isRequired,
};
export default WeatherTempeture;