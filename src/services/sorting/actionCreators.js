import { actionTypes } from './actionTypes';

/**
 * Create change sort action
 *
 * @param sortType
 */
export const changeSort = (sortType) => ({
  type: actionTypes.CHANGE_SORT,
  sortType: sortType
});

