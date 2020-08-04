import {url_base_weather, api_key} from './../Constants/api_url';
const getUrlWeatherbyCity = city =>{

    return  `${url_base_weather}?q=${city}&appid=${api_key}`;
    
}
export default getUrlWeatherbyCity;