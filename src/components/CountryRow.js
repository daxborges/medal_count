import React from 'react';
import PropTypes from 'prop-types';

const CountryRow = ({ code, gold, silver, bronze, total, place }) => {
  const thinBottomClass = 'mc--clean-table-item mc--border-light-grey mc--border-thin mc--border-bottom';
  const getFlagClass = (code) => ('mc--flag-' + code.toLowerCase());
  return (
    <tr>
      <td className={thinBottomClass}>{place}</td>
      <td className={thinBottomClass}><span className={ 'mc--flag ' + getFlagClass(code) } title={ 'flag ' + code}></span></td>
      <td className={ 'mc--text-bold ' + thinBottomClass}>{code}</td>
      <td className={thinBottomClass}></td>
      <td className={thinBottomClass}>{gold}</td>
      <td className={thinBottomClass}>{silver}</td>
      <td className={thinBottomClass}>{bronze}</td>
      <td className={ 'mc--text-bold mc--text-dark-grey ' + thinBottomClass}>{total}</td>
    </tr>
  );
}

CountryRow.propTypes = {
  code: PropTypes.string.isRequired,
  gold: PropTypes.number.isRequired,
  silver: PropTypes.number.isRequired,
  bronze: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  place: PropTypes.number.isRequired,
}

export default CountryRow
