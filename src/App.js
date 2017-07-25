import React from 'react';
import SortHeader from './scenes/SortHeader';
import TopTenCountries from './scenes/TopTenCountries';

const App = () => (
  <div className="mc--sans-font mc--text-grey mc--padding-5">
    <h2 className="mc--margin-top-5 mc--margin-bottom-10 mc--text-upper mc--text-lighter mc--text-space-neg-0-5">Medal Count</h2>
    <table className="mc--text-center mc--clean-table-item mc--table">
      <SortHeader />
      <TopTenCountries />
    </table>
  </div>
);

export default App;