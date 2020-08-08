import React,{Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import {PropTypes} from 'prop-types';
import getUrlWeatherbyCity from './../../services/getUrlWeatherbyCity';
import transformWeather from './../../services/transformWeather';
import Location from './Locations';
import WeatherData from './WeatherData';
import './style.css';

class WeatherLocation extends Component{

    constructor(props){
        super(props);
        const { city } = props;
        this.state={
            city,
            data: null,
        };
        console.log("constructor");

    }
    componentDidMount() {
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
    render() {
        const { onWeatherLocationClick }= this.props;
        const {city, data}=this.state;
        return(
                <div className="weatherLocationCont" onClick={onWeatherLocationClick}>
                    <Location city= {city}/>
                    {//operador ternario
                    }
                    {data ? 
                       <WeatherData data={data}/> : 
                       <CircularProgress size={50} />
                    }
                </div>
        );
    }
   
};
WeatherLocation.propTypes={
    city: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func.isRequired,
}
export default WeatherLocation;