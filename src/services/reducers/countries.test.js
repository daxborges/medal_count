import { actionTypes } from '../actions/actionTypes';
import {
  isValidMedalCount,
  isValidCountry,
  manageCountries,
  countries
} from './countries';

const sweden = {
  "code": "SWE",
  "gold": 2,
  "silver": 7,
  "bronze": 6
};

const france = {
  "code": "FRA",
  "gold": 4,
  "silver": 4,
  "bronze": 7
};

const validCountriesList = [sweden, france];

describe('isValidMedalCount', () => {

  it('it should return false for anything that\'s not a positive ints', () => {
    expect(isValidMedalCount(-1)).toEqual(false);
    expect(isValidMedalCount(1.1)).toEqual(false);
    expect(isValidMedalCount('foo')).toEqual(false);
  });

  it('it should return true for ints 0 and above', () => {
    expect(isValidMedalCount(0)).toEqual(true);
    expect(isValidMedalCount(1)).toEqual(true);
    expect(isValidMedalCount(5)).toEqual(true);
    expect(isValidMedalCount(1000)).toEqual(true);
  });

});

describe('isValidCountry', () => {

  it('it should return false for countries with invalid country codes', () => {

    expect(isValidCountry({
      ...sweden,
      code: 'SWEE'
    })).toEqual(false);

    expect(isValidCountry({
      ...sweden,
      code: 'SW'
    })).toEqual(false);

    expect(isValidCountry({
      ...sweden,
      code: [1,2,3]
    })).toEqual(false);

  });

  it('it should return false for countries with invalid medal counts', () => {

    expect(isValidCountry([{
      ...sweden,
      gold: -1
    }])).toEqual(false);

    expect(isValidCountry([{
      ...sweden,
      silver: -1
    }])).toEqual(false);

    expect(isValidCountry([{
      ...sweden,
      bronze: -1
    }])).toEqual(false);

    expect(isValidCountry([{
      code: 'SWE',
      gold: 2,
      silver: 7
    }])).toEqual(false);

  });

});


describe('manageCountries', () => {

  it('it should filter out random objects', () => {
    expect(manageCountries([{}])).toHaveLength(0);
  });

  it('it should filter out countries with invalid countries codes', () => {

    expect(manageCountries([])).toHaveLength(0);

    expect(manageCountries([{
      ...sweden,
      code: 'SW'
    }])).toHaveLength(0);

    expect(manageCountries([{
      ...sweden,
      gold: -1
    }])).toHaveLength(0);

  });

  it('it shouldn\'t filter out countries that are valid', () => {

    expect(manageCountries([{
      ...sweden
    }])).toHaveLength(1);

  });

});

describe('countries', () => {

  it('it should default to an empty array', () => {
    expect(countries(undefined, {})).toEqual([]);
  });

  it('it should only respond to the SET_COUNTRIES action', () => {

    expect(countries(undefined, {
      type: 'INVALID',
      countries: validCountriesList
    })).toEqual([]);

    expect(countries([], {
      type: 'INVALID',
      countries: validCountriesList
    })).toEqual([]);

    expect(countries([{...sweden}], {
      type: actionTypes.SET_COUNTRIES,
      countries: validCountriesList
    })).toEqual(expect.arrayContaining(validCountriesList));

  });

  it('it shouldn\'t respond to invalid countries ', () => {

    expect(countries(validCountriesList, {
      type: actionTypes.CHANGE_SORT,
      countries: 'foo'
    })).toEqual(expect.arrayContaining(validCountriesList));

  });

});