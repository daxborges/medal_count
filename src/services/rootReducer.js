import { combineReducers } from 'redux';
import countries from './countries/countriesReducer';
import fetchCountryStatus from './countries/fetchCountryStatus';
import sortBy from './sorting/sortByReducer';


const rootReducer = combineReducers({
  countries,
  fetchCountryStatus,
  sortBy
});

export default rootReducer;