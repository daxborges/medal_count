import {
  actionTypes,
  sortTypes
} from './actionTypes';
import {
  isValidSortType,
  manageSortBy,
  sortBy
} from './sortByReducer';

describe('isValidSortType', () => {

  it('it should return false for an invalid type', () => {
    expect(isValidSortType('foo')).toEqual(false);
    expect(isValidSortType(0)).toEqual(false);
  });

  it('it should return true for valid sort types', () => {
    expect(isValidSortType(sortTypes.gold)).toEqual(true);
    expect(isValidSortType(sortTypes.silver)).toEqual(true);
    expect(isValidSortType(sortTypes.bronze)).toEqual(true);
    expect(isValidSortType(sortTypes.total)).toEqual(true);
  });

});

describe('manageSortBy', () => {

  it('it should return its first argument if the second argument is invalid', () => {
    expect(manageSortBy(sortTypes.silver, 'invalid1')).toEqual(sortTypes.silver);
  });

  it('it should return a proper quantity', () => {
    expect(manageSortBy(sortTypes.silver, sortTypes.gold)).toEqual(sortTypes.gold);
    expect(manageSortBy(sortTypes.gold, sortTypes.silver)).toEqual(sortTypes.silver);
    expect(manageSortBy(sortTypes.gold, sortTypes.bronze)).toEqual(sortTypes.bronze);
  });

});

describe('sortBy', () => {

  it('it should default to gold', () => {
    expect(sortBy(undefined, {})).toEqual(sortTypes.gold);
  });

  it('it should only respond to the CHANGE_SORT action', () => {

    expect(sortBy(undefined, {
      type: 'INVALID',
      sortType: sortTypes.silver
    })).toEqual(sortTypes.gold);

    expect(sortBy(sortTypes.gold, {
      type: 'INVALID',
      sortType: sortTypes.silver
    })).toEqual(sortTypes.gold);

    expect(sortBy(sortTypes.gold, {
      type: actionTypes.CHANGE_SORT,
      sortType: sortTypes.silver
    })).toEqual(sortTypes.silver);

  });

  it('it shouldn\'t respond to invalid sort types', () => {

    expect(sortBy(sortTypes.gold, {
      type: actionTypes.CHANGE_SORT,
      sortType: 'foo'
    })).toEqual(sortTypes.gold);

  });

});
