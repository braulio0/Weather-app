import convert from 'convert-units';
import{
    CLOUD,
    SUN,
    SNOW,
    RAIN,
    THUNDER,
    DRIZZLE,

} from './../Constants/Weathers'
   
   
    const getTemp = kelvin =>{
        return Number(convert(kelvin).from("K").to("C").toFixed(2));
    }
    const getWeatherState = weather =>{
        const {id}=weather;
        if(id<300){
            return THUNDER;
        }else if (id<400){
            return DRIZZLE;
        }else if(id <500) {
            return RAIN;
        }else if (id < 700){
            return SNOW;
        }else if (id === 800){
            return SUN;
        }else {
            return CLOUD;
        }
    }
    const trasformWeather =  weather_data =>{
        const{ humidity, temp} = weather_data.main;
        const {speed}= weather_data.wind;
        const WeatherState=getWeatherState(weather_data.weather[0]);
        const Tempeture = getTemp(temp);
        const data = {
            humidity,
            Tempeture,
            WeatherState,
            wind:`${speed} m/s`,
        }
        return data;
    }
export default trasformWeather;