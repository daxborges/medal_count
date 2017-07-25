import {
  actionTypes,
  fetchCountryStatuses
} from './actionTypes';

/**
 * Countries reducer
 *
 * @param state
 * @param action
 */
export const fetchCountryStatus = (state = fetchCountryStatuses.unstarted, action) => {
  switch (action.type) {
    case actionTypes.FETCH_COUNTRIES_REQUEST:
      return fetchCountryStatuses.fetching;
    case actionTypes.FETCH_COUNTRIES_FAILURE:
      return fetchCountryStatuses.failed;
    case actionTypes.FETCH_COUNTRIES_SUCCESS:
      return fetchCountryStatuses.success;
    default:
      return state
  }
};

export default fetchCountryStatus;