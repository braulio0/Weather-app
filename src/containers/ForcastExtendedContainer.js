import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForcastExtended from './../components/ForcastExtended';
import {getForecastDataFromCities, getCity }from './../reducer';
class ForcastExtendedContainer extends Component {
    render() {
        const  {city, forcastData} = this.props;
        return (
           city && 
          <ForcastExtended 
            city={city}
            forcastData={forcastData} />
        );
    }
    
}

ForcastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,
    forcastData: PropTypes.array.isRequired,

};
const mapStateToProps = (state) => ({ city:getCity(state), forcastData: getForecastDataFromCities(state) });

export default  connect(mapStateToProps, null)(ForcastExtendedContainer);