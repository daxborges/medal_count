import {
  actionTypes,
  sortTypes
} from './actionTypes';
import { memoize, includes } from 'lodash';

/**
 * Takes a sort type and returns a boolean for if it's valid or not
 *
 * @param sortType
 * @returns {boolean}
 */
export const isValidSortType = memoize((sortType) => ( includes(sortTypes, sortType) ));

/**
 * Make sure sortType value stays as a valid value
 *
 * @param state
 * @param sortType
 * @returns string
 */
export const manageSortBy = (state, sortType) => {
  if(isValidSortType(sortType)) {
    return sortType;
  } else if(isValidSortType(state)) {
    return state;
  }

  return sortTypes.gold;
};


/**
 * Sort by reducer, ensures only valid actions are taken
 *
 * @param state
 * @param action
 * @returns string
 */
export const sortBy = (state = sortTypes.gold, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_SORT:
      return manageSortBy(state, action.sortType);
    default:
      return state
  }
};

export default sortBy;