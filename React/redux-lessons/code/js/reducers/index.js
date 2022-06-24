import {combineReducers} from 'redux';
import CarReducers from './car';

const allReducers = combineReducers({
    cars: CarReducers,
});

export default allReducers