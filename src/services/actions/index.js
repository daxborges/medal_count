import actionTypes from './actionTypes';

export const changeSort = (sortType) => ({
  type: actionTypes.CHANGE_SORT,
  sortType: sortType
});

export const setCountries = (countries) => ({
  type: actionTypes.SET_COUNTRIES,
  countries: countries
});