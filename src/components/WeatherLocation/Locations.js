import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const Location =({city})=>(
    // Destructuring ES6 cost {city}= props;
    // return const city= props.city; javascript
    <div className="locationCont"> 
        <h1> 
            {city} 
        </h1>
    </div>
);
Location.propTypes={
    city: PropTypes.string.isRequired,
};
export default Location;