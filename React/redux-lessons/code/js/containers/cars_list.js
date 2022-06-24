import React, {Component} from 'react';
import {bindActionCreatiors} from 'redux';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        cars: state.cars
    }
};

class CarsList extends Component {
    render() {
        return (
            <ol>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ol>
        )
    }
};

export default connect(mapStateToProps)(CarsList);