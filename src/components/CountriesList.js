import React from 'react'
import PropTypes from 'prop-types'
import { fetchCountryStatuses } from '../services/countries/actionTypes';
import CountryRow from './CountryRow';

const CountriesList = ({ countries, fetchCountryStatus }) => {
  let placeCount = 0;

  const renderCountryRows = () => (countries.map((country) => {
      placeCount++;
      return (<CountryRow
        key={country.code}
        {...country}
        place={placeCount}
      />);
    }
  ));

  const renderMessage = (message) => (
    <tr>
      <td></td>
      <td></td>
      <td></td>
      <td>{message}</td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
  );

  const renderContent = () => {
    switch(fetchCountryStatus) {
      case fetchCountryStatuses.success:
        return renderCountryRows();
      case fetchCountryStatuses.fetching:
      case fetchCountryStatuses.unstarted:
        return renderMessage('Loading...');
      default :
        return renderMessage('Couldn\'t load countries :(');
    }
  };

  return (
    <tbody className="mc--clean-table-item">
      {renderContent()}
    </tbody>
  );
};

CountriesList.propTypes = {
  countries: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    gold: PropTypes.number.isRequired,
    silver: PropTypes.number.isRequired,
    bronze: PropTypes.number.isRequired
  }).isRequired).isRequired,
  fetchCountryStatus: PropTypes.string.isRequired
};

export default CountriesList;