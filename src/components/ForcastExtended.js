import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForcastItem from './ForcastItem';
import trasformeForcast from './../services/trasformeForcast';
import './style.css';

/*const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo',
];
const data={
    Tempeture:10, 
    WeatherState:'normal', 
    humidity:20,
     wind:'20 m/s'
};
*/
 const api_key= '063d90159b15b9b18ed8361bdf9a7e71';
 const url= 'http://api.openweathermap.org/data/2.5/forecast';
class ForcastExtended extends Component {
    constructor(){
        super();
        this.state={
            forcastData: null,

        }
     
    }
    componentDidMount(){
        
        this.updateCity(this.props.city);
            
    }
    componentWillReceiveProps(netxProps){
        if ( netxProps.city !== this.props.city){
            this.setState({forcastData:null,})
            this.updateCity(netxProps.city);
        }
    }
    updateCity = city =>{
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;
        fetch(url_forecast).then(
            data => (data.json())
            ).then(
                Weather_data => {
                    console.log(Weather_data);
                    const forcastData = trasformeForcast(Weather_data);
                    console.log(forcastData);
                    this.setState(
                        {
                            forcastData,
                        }
                    )
                }
            );

    }
    renderForcasItemDays(forcastData){
       return forcastData.map(forcast =>(
                            <ForcastItem 
                                key={`${forcast.weekDay}${forcast.hour}`}
                                weekDay={forcast.weekDay}
                                hour={forcast.hour}
                                data={forcast.data}/>));
      

    }
    renderProgrest= ()  => {
        return <h3>Cargando</h3>;
    }
      

    

    render(){
        const { city } = this.props;
        const {forcastData}= this.state;
        return ( <div>
                    <h2 className="forecast-Title" >Pronóstico Extendido para {city}</h2> 
                    {forcastData ? this.renderForcasItemDays(forcastData) :
                    this.renderProgrest()                    
                    }
                </div> );
    }
       
    
}
ForcastExtended.propTypes={
    city: PropTypes.string.isRequired,
}
export default ForcastExtended;
