import { actionTypes, fetchCountryStatuses } from './actionTypes';

/**
 * Create set countries action
 *
 * @param countries
 */
export const setCountries = (countries) => ({
  type: actionTypes.SET_COUNTRIES,
  countries: countries
});

/**
 * Create fetch countries failure action
 */
export const fetchCountriesFailed = () => ({
  type: actionTypes.FETCH_COUNTRIES_FAILURE
});

/**
 * Take fetch actions
 *
 * Request the countries json, if necessary dispatching the and fails
 */
export const fetchCountries = () => {
  return (dispatch, getState) => {

    if(getState().fetchCountryStatus === fetchCountryStatuses.fetching) {
      return;
    }

    const oReq = new XMLHttpRequest();

    // Handle successful response
    oReq.addEventListener('load', () => {
      let countries;

      try {
        countries = window.JSON.parse(oReq.responseText);
      } catch(e) {
        dispatch(fetchCountriesFailed());
        return;
      }

      dispatch({ type: actionTypes.FETCH_COUNTRIES_SUCCESS });
      dispatch(setCountries(countries));
    });

    // Handle response failure
    oReq.addEventListener('error', () => {
      dispatch(fetchCountriesFailed());
    });

    // Dispatch the action for starting the request and make the request
    dispatch({ type: actionTypes.FETCH_COUNTRIES_REQUEST });
    oReq.open('GET', '//s3-us-west-2.amazonaws.com/reuters.medals-widget/medals.json');
    oReq.send();
  };
};