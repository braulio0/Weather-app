import React, {Component} from 'react';
import PropTypes from 'prop-types';
class ForcastExtended extends Component {
    render(){
        const { city } = this.props;
        return ( <div>Pronostico Extendido para {city} </div> );
    }
       
    
}
ForcastExtended.propTypes={
    city: PropTypes.string.isRequired,
}
export default ForcastExtended;
