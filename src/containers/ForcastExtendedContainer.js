import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ForcastExtended from './../components/ForcastExtended';

class ForcastExtendedContainer extends Component {
    render() {
        return (
            this.props.city && 
          <ForcastExtended city={this.props.city} />
        );
    }
}

ForcastExtendedContainer.propTypes = {
    city: PropTypes.string.isRequired,

};
const mapStateToProps = ({ city }) => ({ city });

export default  connect(mapStateToProps, null)(ForcastExtendedContainer);