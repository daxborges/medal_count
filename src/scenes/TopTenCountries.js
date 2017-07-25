import { connect } from 'react-redux';
import { take } from 'lodash';
import { sortTypes } from '../services/sorting/actionTypes';
import CountriesList from '../components/CountriesList';


const COUNTRIES_TO_SHOW = 10;

/**
 * Sort the countries by a specific sort type
 *
 * @param countries
 * @param sort
 * @returns {*}
 */
export const sortCountries = (countries, sort) => {
  return countries.sort(function (country1, country2) {
    let sortBy = sort;

    // if we have a tie default to silver for gold and use gold for the rest
    if(country1[sortBy] === country2[sortBy]) {
      sortBy = sort === sortTypes.gold ? sortTypes.silver : sortTypes.gold;
    }

    return country1[sortBy] > country2[sortBy] ? -1 : 1;
  });
};

/**
 * Get the top ten sorted countries by sort
 *
 * @param countries
 * @param sort
 * @returns {*}
 */
export const topTenSorted = (countries, sort) => {
  return take(sortCountries(countries, sort), COUNTRIES_TO_SHOW)
};

/**
 * Map state to properties for CountriesList
 */
const mapStateToProps = (state) => ({
  countries: topTenSorted(state.countries, state.sortBy),
  fetchCountryStatus: state.fetchCountryStatus
});

const mapDispatchToProps = {};

const TopTenCountries = connect(
  mapStateToProps,
  mapDispatchToProps
)(CountriesList);

export default TopTenCountries;
