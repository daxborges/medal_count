import { sortTypes } from '../services/sorting/actionTypes';
import { setTotalForCountry } from '../services/countries/countriesReducer';
import {
  sortCountries,
  topTenSorted
} from './TopTenCountries';

const countries = ([
  {
    "code": "USA",
    "gold": 9,
    "silver": 7,
    "bronze": 12
  },
  {
    "code": "NOR",
    "gold": 11,
    "silver": 5,
    "bronze": 10
  },
  {
    "code": "RUS",
    "gold": 13,
    "silver": 11,
    "bronze": 9
  },
  {
    "code": "NED",
    "gold": 8,
    "silver": 7,
    "bronze": 9
  },
  {
    "code": "FRA",
    "gold": 4,
    "silver": 4,
    "bronze": 7
  },
  {
    "code": "SWE",
    "gold": 2,
    "silver": 7,
    "bronze": 6
  },
  {
    "code": "ITA",
    "gold": 0,
    "silver": 2,
    "bronze": 6
  },
  {
    "code": "CAN",
    "gold": 10,
    "silver": 10,
    "bronze": 5
  },
  {
    "code": "SUI",
    "gold": 6,
    "silver": 3,
    "bronze": 2
  },
  {
    "code": "BLR",
    "gold": 5,
    "silver": 0,
    "bronze": 1
  },
  {
    "code": "GER",
    "gold": 8,
    "silver": 6,
    "bronze": 5
  },
  {
    "code": "AUT",
    "gold": 4,
    "silver": 8,
    "bronze": 5
  },
  {
    "code": "CHN",
    "gold": 3,
    "silver": 4,
    "bronze": 2
  }
]).map(setTotalForCountry);

describe('sortCountries', () => {

  it('should use gold first when sorting by gold', () => {
    const totalResults = sortCountries(countries, sortTypes.gold);
    expect(totalResults[0].code).toEqual('RUS');
    expect(totalResults[1].code).toEqual('NOR');
    expect(totalResults[2].code).toEqual('CAN');
  });

  it('should use silver for its tie breaker when sorting by gold', () => {
    const totalResults = sortCountries(countries, sortTypes.gold);
    expect(totalResults[4].code).toEqual('NED');
    expect(totalResults[5].code).toEqual('GER');
  });

  it('should use silver first when sorting by silver', () => {
    const totalResults = sortCountries(countries, sortTypes.silver);
    expect(totalResults[0].code).toEqual('RUS');
    expect(totalResults[1].code).toEqual('CAN');
    expect(totalResults[2].code).toEqual('AUT');
  });

  it('should use gold for its tie breaker when sorting by silver', () => {
    const totalResults = sortCountries(countries, sortTypes.silver);
    expect(totalResults[3].code).toEqual('USA');
    expect(totalResults[4].code).toEqual('NED');
    expect(totalResults[5].code).toEqual('SWE');
  });

  it('should use bronze first when sorting by bronze', () => {
    const totalResults = sortCountries(countries, sortTypes.bronze);
    expect(totalResults[0].code).toEqual('USA');
    expect(totalResults[1].code).toEqual('NOR');
    expect(totalResults[2].code).toEqual('RUS');
  });

  it('should use gold for its tie breaker when sorting by bronze', () => {
    const totalResults = sortCountries(countries, sortTypes.bronze);
    expect(totalResults[7].code).toEqual('CAN');
    expect(totalResults[8].code).toEqual('GER');
    expect(totalResults[9].code).toEqual('AUT');
  });

  it('should use total first when sorting by total', () => {
    const totalResults = sortCountries(countries, sortTypes.total);
    expect(totalResults[0].code).toEqual('RUS');
    expect(totalResults[1].code).toEqual('USA');
    expect(totalResults[2].code).toEqual('NOR');
  });

  it('should use gold for its tie breaker when sorting by total', () => {
    const totalResults = sortCountries(countries, sortTypes.total);
    expect(totalResults[7].code).toEqual('FRA');
    expect(totalResults[8].code).toEqual('SWE');
  });

});

describe('topTenSorted', () => {

  const totalResults = topTenSorted(countries, sortTypes.gold);

  it('should have ten results', () => {
    expect(totalResults).toHaveLength(10);
  });

  it('should be sorted', () => {
    expect(totalResults[0].code).toEqual('RUS');
    expect(totalResults[1].code).toEqual('NOR');
    expect(totalResults[2].code).toEqual('CAN');
  });

});