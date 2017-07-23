import { combineReducers } from 'redux';
import countries from './countries';
import sortBy from './sortBy';


const medalCount = combineReducers({
  countries,
  sortBy
});

export default medalCount;