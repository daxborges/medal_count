import { actionTypes } from './actionTypes';
import { map, isString, isInteger, isArray, isObject } from 'lodash';

const COUNTRY_CODE_LENGTH = 3;

/**
 * Make sure the medal count is valid
 *
 * @param count
 * @returns {boolean}
 */
export const isValidMedalCount = (count) => {
  return isInteger(count) && count >= 0;
};

/**
 * Makes sure country object is valid
 *
 * @param country
 * @returns {*|boolean}
 */
export const isValidCountry = (country) => {
  return isObject(country)
    && isString(country.code)
    && country.code.length === COUNTRY_CODE_LENGTH
    && isValidMedalCount(country.gold)
    && isValidMedalCount(country.silver)
    && isValidMedalCount(country.bronze);
};

/**
 * Sets the total value on the country
 *
 * @param country
 */
export const setTotalForCountry = (country) => {
  return {
    ...country,
    total: country.gold + country.silver + country.bronze
  };
};

/**
 * Make sure all countries being set are valid
 *
 * @param state
 * @param countries
 * @returns Array
 */
export const manageCountries = (state, countries) => {
  state = isArray(state) ? state : [];
  countries = isArray(countries) ? countries.filter(isValidCountry) : state.filter(isValidCountry);
  return map(countries, setTotalForCountry);
};

/**
 * Countries reducer
 *
 * @param state
 * @param action
 */
export const countries = (state = [], action) => {
  switch (action.type) {
    case actionTypes.SET_COUNTRIES:
      return manageCountries(state, action.countries);
    default:
      return state
  }
};

export default countries;