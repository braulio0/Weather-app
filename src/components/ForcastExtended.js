import React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';
import ForcastItem from './ForcastItem';
import './style.css';

const renderForcasItemDays = (forcastData)=>{
    return forcastData.map(forcast =>(
                         <ForcastItem 
                             key={`${forcast.weekDay}${forcast.hour}`}
                             weekDay={forcast.weekDay}
                             hour={forcast.hour}
                             data={forcast.data}/>));
   

 }
 const renderProgrest = ()  => {
     return<CircularProgress size={100} className="ForcasEXT" />
 }
   

const ForcastExtended = ( { city, forcastData } ) => (
  
         <div>
            <h2 className="forecast-Title" >Pronóstico Extendido para {city}</h2> 
            {forcastData ? 
            renderForcasItemDays(forcastData) :
            renderProgrest()                    
            }
        </div>
    
       
    
);

ForcastExtended.propTypes={
    city: PropTypes.string.isRequired,
}
export default ForcastExtended;
