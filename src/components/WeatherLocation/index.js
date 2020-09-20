import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { PropTypes } from "prop-types";
import Location from "./Locations";
import WeatherData from "./WeatherData";
import "./style.css";
/*     componentDidMount() {
        console.log("componentDidMount");
        this.handleUpdateClick();
    }
    handleUpdateClick=()=>{
        const api_weather= getUrlWeatherbyCity(this.state.city);
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            //debugger;
            this.setState({
                data:newWeather,
            });
        

        });
      
    };
 constructor(props){
        super(props);
        const { city } = props;
        this.state={
            city,
            data: null,
        };
        console.log("constructor");

    }
*/

const WeatherLocation = ({ onWeatherLocationClick, city, data }) => (
  <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
    <Location city={city} />
    {data ? <WeatherData data={data} /> : <CircularProgress size={50} />}
  </div>
);

WeatherLocation.propTypes = {
  city: PropTypes.string.isRequired,
  onWeatherLocationClick: PropTypes.func.isRequired,
  data: PropTypes.shape({
    Tempeture: PropTypes.number.isRequired,
    WeatherState: PropTypes.string.isRequired,
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
  }),
};
export default WeatherLocation;
