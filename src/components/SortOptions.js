import React from 'react'
import PropTypes from 'prop-types'
import { sortTypes } from '../services/sorting/actionTypes';

const SortOptions = ({ sortBy, changeSort }) => {

  const allClasses = 'mc--border-grey mc--border-thick mc--border-bottom ';
  const selectedClasses = 'mc--border-grey mc--border-thick mc--border-top mc--th-selected ';
  const renderSelectClass = (sort, sortBy) => (sort === sortBy ? selectedClasses : '');

  return (
    <thead>
      <tr>
        <th className={ allClasses }></th>
        <th className={ allClasses }></th>
        <th className={ allClasses }></th>
        <th className={ allClasses }></th>
        <th className={ allClasses + renderSelectClass(sortBy, sortTypes.gold)}>
          <button className="mc--clean-button mc--circle-button mc--circle mc--bg-gold mc--vert-align-middle" onClick={() => (changeSort(sortTypes.gold))} title={sortTypes.gold}></button>
        </th>
        <th className={ allClasses + renderSelectClass(sortBy, sortTypes.silver)}>
          <button className="mc--clean-button mc--circle-button mc--circle mc--bg-silver mc--vert-align-middle" onClick={() => (changeSort(sortTypes.silver))} title={sortTypes.silver}></button>
        </th>
        <th className={ allClasses + renderSelectClass(sortBy, sortTypes.bronze)}>
          <button className="mc--clean-button mc--circle-button mc--circle mc--bg-bronze mc--vert-align-middle" onClick={() => (changeSort(sortTypes.bronze))} title={sortTypes.bronze}></button>
        </th>
        <th className={ allClasses + renderSelectClass(sortBy, sortTypes.total)}>
          <button className="mc--clean-button mc--bg-none mc--text-upper mc--text-dark-grey mc--text-size-1-1 mc--text-space-neg-0-5 mc--line-height-20 mc--vert-align-middle"
                  onClick={() => (changeSort(sortTypes.total))}>TOTAL</button>
        </th>
      </tr>
    </thead>
  );
};

SortOptions.propTypes = {
  sortBy: PropTypes.string.isRequired,
  changeSort: PropTypes.func.isRequired,
};

export default SortOptions;