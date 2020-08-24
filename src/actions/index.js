import trasformeForcast from '../services/trasformeForcast';
export const SET_CITY= 'SET_CITY';
export const SET_FORCAST_DATA= 'SET_FORCAST_DATA'

export const setCity = payload => ({ type:SET_CITY , payload});
const setForcastData = payload => ({type:SET_FORCAST_DATA, payload})

    const api_key= '063d90159b15b9b18ed8361bdf9a7e71';
    const url= 'http://api.openweathermap.org/data/2.5/forecast';

export const setSelectedCity = payload => {
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        // activacion del estado de buscqueda 
        dispatch(setCity(payload)) //ciudad actual

        return fetch(url_forecast).then(
            data => (data.json())
            ).then(
                Weather_data => {
                    const forcastData = trasformeForcast(Weather_data);
                    console.log(forcastData);

                    //modificacion del estado
                    dispatch(setForcastData({ city: payload, forcastData}))
                }
        );
    };
};