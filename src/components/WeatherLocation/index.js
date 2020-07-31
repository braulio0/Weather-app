import React,{Component} from 'react';
import Location from './Locations';
import WeatherData from './WeatherData';
import './style.css';
import{
    CLOUD,
    CLOUDY,
    SUN,
    SNOW,
    RAIN,
    WINDY,

} from './../../Constants/Weathers'
const data ={
    Tempeture: 5,
    WeatherState: SUN,
    huminity: 20,
    wind: '20 m/s', 
}
const data2 ={
    Tempeture: 18,
    WeatherState: RAIN,
    huminity: 80,
    wind: '50 m/s', 
}
class WeatherLocation extends Component{

    constructor(){
        super();
        this.state={
            city:'México',
            data: data,
        }
    }

    handleUpdateClick=()=>{
        console.log('actualizado');
        this.setState({
            city: 'Guadalajara',
            data:data2,

        });
    };
    render() {
        const {city, data}=this.state;
        return(
                <div className="weatherLocationCont">
                    <Location city= {city}/>
                    <WeatherData data={data}/>
                    <button onClick={this.handleUpdateClick}> Actualizar</button>
                </div>
        );
    }
   
};
export default WeatherLocation;